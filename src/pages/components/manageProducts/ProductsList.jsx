import { Table } from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons-react";
import ProductListItems from "./ProductListItems";

const headerItems = [
  "name",
  "description",
  "category",
  "price",
  "status",
  "actions",
];
const ProductsList = ({ products, onEdit, onDelete, onSort }) => {
  return (
    <Table horizontalSpacing="xl" verticalSpacing="sm" mt="md">
      <Table.Thead>
        <Table.Tr>
          {headerItems.map((field) => (
            <Table.Th
              px={"sm"}
              key={field}
              onClick={() => field !== "actions" && onSort(field)}
              style={{
                textAlign: "center",
                cursor: field !== "actions" ? "pointer" : "default",
              }}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
              {field !== "actions" && (
                <IconArrowsSort
                  size={14}
                  style={{ marginLeft: 6, opacity: 0.6 }}
                />
              )}
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductListItems
              key={product.id}
              product={product}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan="6" style={{ textAlign: "center" }}>
              No products found
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Tbody>
    </Table>
  );
};

export default ProductsList;
