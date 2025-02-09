import { ActionIcon, Table } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const ProductListItems = ({ product, onEdit, onDelete }) => {
  return (
    <Table.Tr style={{ textAlign: "left" }}>
      <Table.Td style={{ textTransform: "capitalize" }}>
        {product.name}
      </Table.Td>
      <Table.Td style={{ textTransform: "capitalize" }}>
        {product.description}
      </Table.Td>
      <Table.Td style={{ textTransform: "capitalize" }}>
        {product.category}
      </Table.Td>
      <Table.Td style={{ textTransform: "capitalize" }}>
        ₹{product.price}
      </Table.Td>
      <Table.Td style={{ textTransform: "capitalize" }}>
        {product.status}
      </Table.Td>
      <Table.Td display={"flex"}>
        <ActionIcon
          color="blue"
          variant="subtle"
          onClick={() => onEdit(product)}
        >
          <IconEdit size={16} />
        </ActionIcon>
        <ActionIcon
          color="red"
          variant="subtle"
          onClick={() => onDelete(product.id)}
        >
          <IconTrash size={16} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  );
};

export default ProductListItems;
