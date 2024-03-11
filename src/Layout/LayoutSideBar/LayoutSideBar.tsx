/* import { Drawer, List, Stack, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AnalyticsIcon, DashboardIcon, InboxIcon, LinkIcon, PersonIcon, QuestionAnswerIcon, SettingIcon, StoreIcon, ViewStreamIcon, WebIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import useNavigation from "@/navigation/useNavigation";
import { SidebarItem, SidebarItemProps } from ".";
import { AuthenticatedRouteParams, useLocation } from "@/navigation";
import { useSidebarContext } from "@/context/SidebarContext";

interface SidebarSectionProps {
  listItems: SidebarItemProps[];
}

function SidebarSection({ listItems }: Readonly<SidebarSectionProps>) {
  return (
    <Stack component={List} rowGap={1}>
      {listItems.map((item) => {
        return <SidebarItem key={item.label} label={item.label} onClick={item.onClick} isActive={item.isActive} icon={item.icon} />;
      })}
    </Stack>
  );
}

export default function LayoutSidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigation = useNavigation();
  const { isRootSidebarOpen, handleToggleRootSidebar } = useSidebarContext();

  const [activeItem, setActiveItem] = useState<keyof AuthenticatedRouteParams>("/home");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const sections: { sidebar: SidebarItemProps[]; footer: SidebarItemProps[] } = {
    sidebar: [
      {
        icon: <DashboardIcon />,
        label: t("home"),
        onClick: () => {
          navigation.navigate("/home");
        },
        isActive: activeItem.startsWith("/home"),
      },
      {
        icon: <ViewStreamIcon />,
        label: t("orders"),
        onClick: () => {
          console.log("orders");
        },
        isActive: activeItem.startsWith("/orders"),
      },
      {
        icon: <InboxIcon />,
        label: t("messages"),
        onClick: () => {
          console.log("messages");
        },
        isActive: activeItem.startsWith("/messages"),
      },
      {
        icon: <StoreIcon />,
        label: t("stores"),
        onClick: () => {
          console.log("stores");
        },
        isActive: activeItem.startsWith("/stores"),
      },
      {
        icon: <AnalyticsIcon />,
        label: t("analytics"),
        onClick: () => alert(t("analytics")),
        isActive: activeItem.startsWith("/analytics"),
      },
      {
        icon: <LinkIcon />,
        label: t("deliveries"),
        onClick: () => alert(t("deliveries")),
        isActive: activeItem.startsWith("/deliveries"),
      },
      {
        icon: <LinkIcon />,
        label: t("support"),
        onClick: () => alert(t("support")),
        isActive: activeItem.startsWith("/support"),
      },
    ],
    footer: [
      {
        icon: <SettingIcon />,
        label: t("settings"),
        onClick: () => alert(t("settings")),
        isActive: activeItem.startsWith("/settings"),
        childrens: [
          {
            icon: <PersonIcon />,
            label: t("personal"),
            onClick: () => {
              console.log("Child 1");
            },
            isActive: activeItem.startsWith("/settings/personal"),
          },
          {
            icon: <WebIcon />,
            label: t("trailer"),
            onClick: () => {
              console.log("Child 1");
            },
            isActive: activeItem.startsWith("/upload/site"),
          },
        ],
      },
      {
        icon: <QuestionAnswerIcon />,
        label: t("feedback"),
        onClick: () => alert(t("feedback")),
        isActive: activeItem.startsWith("/feedback"),
      },
    ],
  };

  const containerStyle: SxProps = {
    zIndex: 2,
    position: "fixed",
    top: 0,
    left: 0,
  };

  return (
    <Drawer variant='temporary' sx={containerStyle} open={isRootSidebarOpen} onClose={handleToggleRootSidebar}>
      <Stack justifyContent={"space-between"} height={"100vh"}>
        <SidebarSection listItems={sections.sidebar} />
        <Stack pb={8}>
          <SidebarSection listItems={sections.footer} />
        </Stack>
      </Stack>
    </Drawer>
  );
}
 */

import { useTranslation } from "react-i18next";
import { AnalyticsIcon, DashboardIcon, InboxIcon, LinkIcon, PersonIcon, QuestionAnswerIcon, SettingIcon, StoreIcon, ViewStreamIcon, WebIcon } from "@/components/icons";
import { useState } from "react";
import useNavigation from "@/navigation/useNavigation";
import { SidebarItem, SidebarItemProps } from ".";
import { AuthenticatedRouteParams, useLocation } from "@/navigation";
import { useSidebarContext } from "@/context/SidebarContext";
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";

export default function TemporaryDrawer() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigation = useNavigation();
  const { isRootSidebarOpen, handleToggleRootSidebar } = useSidebarContext();

  const [activeItem, setActiveItem] = useState<keyof AuthenticatedRouteParams>("/home");

  const sections: { sidebar: SidebarItemProps[]; footer: SidebarItemProps[] } = {
    sidebar: [
      {
        icon: <DashboardIcon />,
        label: t("home"),
        onClick: () => {
          navigation.navigate("/home");
        },
        isActive: activeItem.startsWith("/home"),
      },
      {
        icon: <ViewStreamIcon />,
        label: t("orders"),
        onClick: () => {
          console.log("orders");
        },
        isActive: activeItem.startsWith("/orders"),
      },
      {
        icon: <InboxIcon />,
        label: t("messages"),
        onClick: () => {
          console.log("messages");
        },
        isActive: activeItem.startsWith("/messages"),
      },
      {
        icon: <StoreIcon />,
        label: t("stores"),
        onClick: () => {
          console.log("stores");
        },
        isActive: activeItem.startsWith("/stores"),
      },
      {
        icon: <AnalyticsIcon />,
        label: t("analytics"),
        onClick: () => alert(t("analytics")),
        isActive: activeItem.startsWith("/analytics"),
      },
      {
        icon: <LinkIcon />,
        label: t("deliveries"),
        onClick: () => alert(t("deliveries")),
        isActive: activeItem.startsWith("/deliveries"),
      },
      {
        icon: <LinkIcon />,
        label: t("support"),
        onClick: () => alert(t("support")),
        isActive: activeItem.startsWith("/support"),
      },
    ],
    footer: [
      {
        icon: <SettingIcon />,
        label: t("settings"),
        onClick: () => alert(t("settings")),
        isActive: activeItem.startsWith("/settings"),
        childrens: [
          {
            icon: <PersonIcon />,
            label: t("personal"),
            onClick: () => {
              console.log("Child 1");
            },
            isActive: activeItem.startsWith("/settings/personal"),
          },
          {
            icon: <WebIcon />,
            label: t("trailer"),
            onClick: () => {
              console.log("Child 1");
            },
            isActive: activeItem.startsWith("/upload/site"),
          },
        ],
      },
      {
        icon: <QuestionAnswerIcon />,
        label: t("feedback"),
        onClick: () => alert(t("feedback")),
        isActive: activeItem.startsWith("/feedback"),
      },
    ],
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={handleToggleRootSidebar}>
      <List>
        {sections.sidebar.map((item) => (
          <SidebarItem key={item.label} label={item.label} onClick={item.onClick} isActive={item.isActive} icon={item.icon} />
        ))}
      </List>

      <Divider />
      <Stack pb={8}>
        <List>
          {sections.footer.map((item) => (
            <SidebarItem key={item.label} label={item.label} onClick={item.onClick} isActive={item.isActive} icon={item.icon} />
          ))}
        </List>
      </Stack>
    </Box>
  );

  return (
    <Drawer open={isRootSidebarOpen} onClose={handleToggleRootSidebar}>
      {DrawerList}
    </Drawer>
  );
}
