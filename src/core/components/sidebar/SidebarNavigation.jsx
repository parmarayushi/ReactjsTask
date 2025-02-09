import { Link } from "react-router-dom";
import { SidebarListItem } from "../../utility/constants/sidebar.constants";
import classes from "./Sidebar.module.css";

export function SidebarNavigation({ active, setActive }) {
  return (
    <div className={classes.navbarMain}>
      {SidebarListItem.map((item, index) => (
        <Link key={index} to={item.redirectTo}>
          <li
            className={classes.link}
            data-active={item.label === active || undefined}
            key={item.label}
            onClick={() => {
              setActive(item.label);
            }}
          >
            <item.icon stroke={1.3} className={classes.linkIcon} />
            <span>{item.label}</span>
          </li>
        </Link>
      ))}
    </div>
  );
}
