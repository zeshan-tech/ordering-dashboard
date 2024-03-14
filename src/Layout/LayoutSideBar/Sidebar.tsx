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
        icon: <DashboardIcon isListIcon />,
        label: t("home"),
        onClick: () => {
          navigation.navigate("/home");
        },
        isActive: activeItem.startsWith("/home"),
      },
      {
        icon: <ViewStreamIcon isListIcon />,
        label: t("orders"),
        onClick: () => {
          console.log("orders");
        },
        isActive: activeItem.startsWith("/orders"),
      },
      {
        icon: <InboxIcon isListIcon />,
        label: t("index"),
        onClick: () => {
          console.log("index");
        },
        isActive: activeItem.startsWith("/index"),
      },
      {
        icon: <StoreIcon isListIcon />,
        label: t("categories"),
        onClick: () => {
          console.log("categories");
        },
        isActive: activeItem.startsWith("/categories"),
      },
      {
        icon: <AnalyticsIcon isListIcon />,
        label: t("analytics"),
        onClick: () => alert(t("analytics")),
        isActive: activeItem.startsWith("/analytics"),
      },
      {
        icon: <LinkIcon isListIcon />,
        label: t("deliveries"),
        onClick: () => alert(t("deliveries")),
        isActive: activeItem.startsWith("/deliveries"),
      },
      {
        icon: <LinkIcon isListIcon />,
        label: t("support"),
        onClick: () => alert(t("support")),
        isActive: activeItem.startsWith("/support"),
      },
    ],
    footer: [
      {
        icon: <SettingIcon isListIcon />,
        label: t("settings"),
        onClick: () => alert(t("settings")),
        isActive: activeItem.startsWith("/settings"),
        childrens: [
          {
            icon: <PersonIcon isListIcon />,
            label: t("personal"),
            onClick: () => {
              navigation.navigate('/settings')
            },
            isActive: activeItem.startsWith("/settings/personal"),
          },
          {
            icon: <WebIcon isListIcon />,
            label: t("site"),
            onClick: () => {
              navigation.navigate('/settings')
            },
            isActive: activeItem.startsWith("/upload/site"),
          },
        ],
      },
      {
        icon: <QuestionAnswerIcon isListIcon />,
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
import { AnalyticsIcon, DashboardIcon, InboxIcon, LinkIcon, QuestionAnswerIcon, SearchIcon, SettingIcon, StoreIcon, ViewStreamIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import useNavigation from "@/navigation/useNavigation";
import { SidebarItem, SidebarItemProps } from ".";
import { AuthenticatedRouteParams, useLocation } from "@/navigation";
import { useSidebarContext } from "@/context/SidebarContext";
import { Box, Drawer, List, Divider, Stack, Collapse } from "@mui/material";

interface SidebarSectionProps {
  listItems: SidebarItemProps[];
}

function SidebarSection({ listItems }: Readonly<SidebarSectionProps>) {
  const [expandItemIndex, setExpandItemIndex] = useState(-1);

  const handleExpand = (index: number) => {
    if (expandItemIndex === index) setExpandItemIndex(-1);
    else setExpandItemIndex(index);
  };

  return (
    <Stack component={List}>
      {listItems.map((item, index) => {
        if (item.childrens) {
          return (
            <>
              <SidebarItem key={item.label} label={item.label} onClick={() => handleExpand(index)} isActive={item.isActive} icon={item.icon} hasSubmenu />
              <Collapse in={expandItemIndex === index} unmountOnExit>
                <List sx={{ pl: 2 }} disablePadding>
                  {item.childrens.map((subItem) => {
                    return <SidebarItem key={subItem.label} label={subItem.label} onClick={subItem.onClick} isActive={subItem.isActive} icon={subItem.icon} />;
                  })}
                </List>
              </Collapse>
            </>
          );
        }

        return <SidebarItem key={item.label} label={item.label} onClick={item.onClick} isActive={item.isActive} icon={item.icon} />;
      })}
    </Stack>
  );
}

export default function Sidebar() {
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
        icon: <DashboardIcon isListIcon />,
        label: t("home"),
        onClick: () => {
          navigation.navigate("/home");
        },
        isActive: activeItem.startsWith("/home"),
      },
      {
        icon: <ViewStreamIcon isListIcon />,
        label: t("orders"),
        onClick: () => {
          navigation.navigate("/orders");
          console.log("orders");
        },
        isActive: activeItem.startsWith("/orders"),
      },
      {
        icon: <InboxIcon isListIcon />,
        label: t("inbox"),
        onClick: () => {
          navigation.navigate("/inbox");
        },
        isActive: activeItem.startsWith("/inbox"),
      },
      {
        icon: <StoreIcon isListIcon />,
        label: t("categories"),
        onClick: () => {
          navigation.navigate("/categories");
        },
        isActive: activeItem.startsWith("/categories"),
      },
      {
        icon: <AnalyticsIcon isListIcon />,
        label: t("analytics"),
        onClick: () => {
          navigation.navigate("/analytics");
        },
        isActive: activeItem.startsWith("/analytics"),
      },
      {
        icon: <LinkIcon isListIcon />,
        label: t("deliveries"),
        onClick: () => {
          navigation.navigate("/deliveries");
        },
        isActive: activeItem.startsWith("/deliveries"),
      },
      {
        icon: <LinkIcon isListIcon />,
        label: t("support"),
        onClick: () => {
          navigation.navigate("/support");
        },
        isActive: activeItem.startsWith("/support"),
      },
    ],
    footer: [
      {
        icon: <SearchIcon isListIcon />,
        label: t("search"),
        onClick: () => alert(t("search")),
        isActive: activeItem.startsWith("/search"),
      },
      {
        icon: <SettingIcon isListIcon />,
        label: t("settings"),
        onClick: () => alert(t("settings")),
        isActive: activeItem.startsWith("/settings"),
      },
      {
        icon: <QuestionAnswerIcon isListIcon />,
        label: t("feedback"),
        onClick: () => alert(t("feedback")),
        isActive: activeItem.startsWith("/feedback"),
      },
    ],
  };

  return (
    <Drawer open={isRootSidebarOpen} onClose={handleToggleRootSidebar}>
      <Box sx={{ width: 250 }} role='presentation'>
        <SidebarSection listItems={sections.sidebar} />
        <Divider />
        <SidebarSection listItems={sections.footer} />
      </Box>
    </Drawer>
  );
}
