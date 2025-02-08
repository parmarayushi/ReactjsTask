import { IconHome, IconLogout } from "@tabler/icons-react";

export const SidebarListItem = [
  {
    icon: <IconHome />,
    redirectTo: "/",
    label: "Dashboard",
  },
  {
    icon: <IconHome />,
    redirectTo: "products",
    label: "Manage Products",
  },
  {
    icon: <IconHome />,
    redirectTo: "orders",
    label: "Manage Orders",
  },
  {
    icon: <IconLogout />,
    redirectTo: "",
    label: "Logout",
  },
];
