import { Flex, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { SidebarListItem } from "../utility/constants/sidebar.constants";

function Navbar() {
  return (
    <>
      {/* Navigation for the pages  */}
      <Flex direction={"column"} align={"flex-start"} rowGap={"sm"}>
        {SidebarListItem.map((items) => (
          <Link
            key={items}
            to={items.redirectTo}
            style={{
              display: "flex",
            }}
          >
            <Text pe={"xs"}> {items.icon}</Text>
            <Text>{items.label}</Text>
          </Link>
        ))}
      </Flex>
    </>
  );
}

export default Navbar;
