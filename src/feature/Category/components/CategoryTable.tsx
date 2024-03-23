import { MouseEvent, Suspense, useRef, useState } from "react";
import { lazily } from "react-lazily";
import { Box, Paper, PopoverPosition, Switch } from "@mui/material";
import { CategoryTableRowActionMenu } from ".";
import { useTranslation } from "react-i18next";
import { GridActionsCellItem, GridColDef, GridFooterContainer, GridPagination } from "@mui/x-data-grid-pro";
import { CachedIcon, MoreVertIcon } from "@/components/icons";
import Button from "@/components/Button";
import { useGetCategories } from "../hooks";
import useNavigation, { Routes } from "@/navigation/useNavigation";

const { DataGridPro } = lazily(() => import("@/components/DataGridPro"));

export interface CategoryTableRefInterface {}

export default function CategoryTable() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const selectRowIdRef = useRef<string>("");

  const [contextMenuAnchorPosition, setContextMenuAnchorPosition] = useState<PopoverPosition | null>(null);

  const { data: categories, isLoading, refetch: refetchCategories } = useGetCategories();

  const handleOnContextMenu = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    selectRowIdRef.current = event.currentTarget.getAttribute("data-id")!;
    setContextMenuAnchorPosition({ left: event.clientX - 2, top: event.clientY - 4 });
  };

  const TABLE_COLUMNS: GridColDef[] = [
    {
      field: "ID",
      headerName: t("ID"),
      width: 500,
    },
    {
      field: "name",
      headerName: t("name"),
      width: 500,
    },
    {
      field: "active",
      headerName: t("active"),
      width: 500,
      renderCell: (params) => <Switch defaultChecked={params.row.active} />,
    },
    {
      field: "actions",
      type: "actions",
      width: 10,
      pinnable: true,
      getActions: (params) => [<GridActionsCellItem label='' onClick={() => handleOnContextMenu(params.row)} icon={<MoreVertIcon />} />],
    },
  ];

  const footer = () => (
    <GridFooterContainer>
      <Button startIcon={<CachedIcon />} onClick={() => refetchCategories()}>
        {t("refetch")}
      </Button>
      <GridPagination />
    </GridFooterContainer>
  );

  return (
    <Suspense>
      <Box component={Paper} p={2}>
        <DataGridPro
          loading={isLoading}
          columns={TABLE_COLUMNS}
          rows={categories ?? []}
          getRowId={(row) => row.ID}
          pagination
          getRowHeight={() => "auto"}
          disableRowSelectionOnClick
          pageSizeOptions={[7, 15, 20]}
          pinnedColumns={{ right: ["actions"] }}
          slots={{ footer }}
          slotProps={{
            row: {
              onContextMenu: handleOnContextMenu,
              onDoubleClick: (event) => navigation.navigate(`/categories/products/${event.currentTarget.getAttribute("data-id")!}` as Routes),
            },
          }}
        />
      </Box>

      <CategoryTableRowActionMenu isOpen={!!contextMenuAnchorPosition} anchorPosition={contextMenuAnchorPosition!} onClose={() => setContextMenuAnchorPosition(null)} categoryId={selectRowIdRef.current} refresh={refetchCategories} />
    </Suspense>
  );
}
