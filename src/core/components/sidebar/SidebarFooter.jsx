import {
  Divider,
  Flex,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconLogout, IconMoonStars, IconSun } from "@tabler/icons-react";
import classes from "./Sidebar.module.css";

export function SidebarFooter({ handleLogout }) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <div className={classes.footer}>
      <Divider my="md" />

      <Flex justify={"space-between"}>
        <a href="#" className={classes.link} onClick={handleLogout}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>

        <div className={classes.link} style={{ cursor: "pointer" }}>
          <Switch
            size="md"
            color="dark.4"
            onLabel={
              <IconSun
                size={16}
                stroke={2.5}
                color="var(--mantine-color-yellow-4)"
              />
            }
            offLabel={
              <IconMoonStars
                size={16}
                stroke={2.5}
                color="var(--mantine-color-blue-6)"
              />
            }
            onChange={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
          />
        </div>
      </Flex>
    </div>
  );
}
