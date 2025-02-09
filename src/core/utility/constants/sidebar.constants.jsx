import {
  IconHome,
  IconShoppingCartCog,
  IconTemplate,
} from "@tabler/icons-react";

export const SidebarListItem = [
  {
    icon: IconHome,
    redirectTo: "/",
    label: "Dashboard",
  },
  {
    icon: IconTemplate,
    redirectTo: "products",
    label: "Manage Products",
  },
  {
    icon: IconShoppingCartCog,
    redirectTo: "orders",
    label: "Manage Orders",
  },
];
