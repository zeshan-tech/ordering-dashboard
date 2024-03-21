import { useTranslation } from "react-i18next";
import { SettingIcon, WebIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import useNavigation from "@/navigation/useNavigation";
import { SidebarItem, SidebarItemProps } from "..";
import { AuthenticatedRouteParams, useLocation } from "@/navigation";
import { useSidebarContext } from "@/context/SidebarContext";
import { Box, Drawer, List, Stack, Collapse } from "@mui/material";

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

  const { isSettingsSidebarOpen, handleToggleSettingsSidebar } = useSidebarContext();

  const [activeItem, setActiveItem] = useState<keyof AuthenticatedRouteParams>("/home");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const sidebar: SidebarItemProps[] = [
    {
      icon: <SettingIcon isListIcon />,
      label: t("settings"),
      onClick: () => {
        navigation.navigate("/settings");
      },
      isActive: activeItem.endsWith("/settings"),
    },
    {
      icon: <WebIcon isListIcon />,
      label: t("site"),
      onClick: () => navigation.navigate("/settings/site"),
      isActive: activeItem.startsWith("/settings/site"),
    },
  ];

  return (
    <Drawer open={isSettingsSidebarOpen} onClose={handleToggleSettingsSidebar}>
      <Box sx={{ width: 250 }} role='presentation'>
        <SidebarSection listItems={sidebar} />
      </Box>
    </Drawer>
  );
}
