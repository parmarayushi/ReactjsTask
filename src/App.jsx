import { AppShell, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./core/components/sidebar/Sidebar";
import { isTokenExpired } from "./core/utility/services/authUtility";

function App() {
  const [opened, { toggle }] = useDisclosure();

  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      if (isTokenExpired()) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    checkToken();
    const interval = setInterval(checkToken, 60000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header
        display="flex"
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#005ba9",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1.25rem",
        }}
      >
        <Burger
          opened={opened}
          onClick={toggle}
          color="white"
          hiddenFrom="sm"
          size="sm"
          style={{ position: "absolute", left: 20, zIndex: 1000 }}
        />
        <Text>DASHBOARD APP</Text>
      </AppShell.Header>

      <AppShell.Navbar p="md" style={{ backgroundColor: "#005ba9" }}>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main py={"xl"}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
