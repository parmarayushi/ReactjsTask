import {
  Button,
  Flex,
  Modal,
  Pagination,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductListDataQuery,
} from "../../utility/services/products.service";
import { ProductsForm } from "./ProductsForm";
import ProductsList from "./ProductsList";

export const ManageProducts = () => {
  // const [opened, setOpened] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [isEditMode, setIsEditMode] = useState(null);
  const { data: products = [], refetch } = useGetProductListDataQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle Sorting
  const handleSort = (field) => {
    setSortOrder(
      sortField === field ? (sortOrder === "asc" ? "desc" : "asc") : "asc"
    );
    setSortField(field);
  };

  // Handle Edit Product
  const handleEdit = (product) => {
    setIsEditMode(product);
    open();
  };

  // Handle Delete Product
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      refetch();
    }
  };

  // Filter & Sort Products
  const filteredProducts = products
    .filter((product) => {
      const query = searchQuery.toLowerCase();
      return ["name", "description", "category"].some((key) =>
        product[key].toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      return typeof valueA === "string"
        ? sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA)
        : sortOrder === "asc"
        ? valueA - valueB
        : valueB - valueA;
    });

  // pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Flex justify="space-between" align="center">
        {/* Title,searchBox and add button */}
        <Title order={4}>Manage Products</Title>
        <Flex gap="md">
          <TextInput
            placeholder="Search Products"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
          <Button onClick={open}>Add Product</Button>
        </Flex>
      </Flex>

      {/* Modal for Adding/Editing Product */}
      <Modal
        opened={opened}
        onClose={close}
        title={isEditMode ? "Edit Product" : "Add  Product"}
        centered
      >
        <ProductsForm product={isEditMode} onSuccess={close} />
      </Modal>

      {/* Product List */}
      <ProductsList
        products={paginatedProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSort={handleSort}
        sortField={sortField}
      />

      {/* Pagination */}
      <Flex align="center" justify="center" mt={30}>
        {totalPages > 1 && (
          <Pagination
            withEdges
            total={totalPages}
            page={currentPage}
            onChange={setCurrentPage}
            mt={"12px"}
          />
        )}
      </Flex>
    </>
  );
};
