import { useState } from "react";
import classes from "./Sidebar.module.css";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarNavigation } from "./SidebarNavigation";

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className={classes.navbar}>
      <SidebarNavigation active={active} setActive={setActive} />
      <SidebarFooter handleLogout={handleLogout} />
    </nav>
  );
}

export default Sidebar;
