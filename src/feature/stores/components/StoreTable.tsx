import { MouseEvent, Suspense, useState } from "react";
import { lazily } from "react-lazily";
import { Box, Paper, PopoverPosition, Rating, Switch } from "@mui/material";
import { StoreTableRowActionMenu } from ".";
import { useTranslation } from "react-i18next";
import { GridActionsCellItem, GridColDef, GridFooterContainer, GridPagination } from "@mui/x-data-grid-pro";
import TableCard from "./TableCard";
import { CachedIcon, MoreVertIcon, OpenTabIcon } from "@/components/icons";
import storeMockData from "../mock/stores";
import Button from "@/components/Button";

const { DataGridPro } = lazily(() => import("@/components/DataGridPro"));

export interface StoreTableRefInterface {}

export default function StoreTable() {
  const { t } = useTranslation();

  const [contextMenuAnchorPosition, setContextMenuAnchorPosition] = useState<PopoverPosition | null>(null);

  const handleOnContextMenu = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setContextMenuAnchorPosition({ left: event.clientX - 2, top: event.clientY - 4 });
  };

  const TABLE_COLUMNS: GridColDef[] = [
    {
      field: "ID",
      headerName: t("ID"),
      width: 100,
      // renderCell: (params) => <TableCard logoUrl={params.row.logoUrl} name={params.row.name} type={params.row.type} />,
    },
    {
      field: "business",
      headerName: t("business"),
      width: 200,
      renderCell: (params) => <TableCard logoUrl={params.row.logoUrl} name={params.row.name} type={params.row.type} />,
    },
    {
      field: "hyperlink",
      headerName: t("hyperlink"),
      width: 150,
      renderCell: (params) => <OpenTabIcon fontSize='small' onClick={() => window.open(params.value, "_blank")} />,
    },
    {
      field: "ratings",
      headerName: t("ratings"),
      width: 200,
      renderCell: (params) => <Rating value={params.row.avarageRating} precision={0.5} readOnly />,
    },
    {
      field: "active",
      headerName: t("active"),
      width: 200,
      renderCell: (params) => <Switch defaultChecked={params.row.active} />,
    },
    {
      field: "actions",
      type: "actions",
      width: 10,
      pinnable: true,
      //TODO: here is a bug those is that when i'm opening context menu by clicking on icon its not detecting target row
      getActions: () => [<GridActionsCellItem label='' onClick={(e) => handleOnContextMenu(e)} icon={<MoreVertIcon />} />],
    },
  ];

  const footer = () => (
    <GridFooterContainer>
      <Button startIcon={<CachedIcon />} onClick={() => alert("seriesTableRef.current?.onRefresh")}>
        {t("refetch")}
      </Button>
      <GridPagination />
    </GridFooterContainer>
  );

  return (
    <Suspense>
      <Box component={Paper}>
        <DataGridPro
          columns={TABLE_COLUMNS}
          rows={storeMockData}
          getRowId={(row) => row.ID}
          pagination
          getRowHeight={() => "auto"}
          checkboxSelection
          disableRowSelectionOnClick
          pageSizeOptions={[7, 15, 20]}
          pinnedColumns={{ right: ["actions"] }}
          slots={{ footer }}
          slotProps={{
            row: {
              onContextMenu: handleOnContextMenu,
            },
          }}
        />
      </Box>

      <StoreTableRowActionMenu
        isOpen={!!contextMenuAnchorPosition}
        anchorPosition={contextMenuAnchorPosition!}
        onClose={() => setContextMenuAnchorPosition(null)}
        onRefresh={function (): void {
          throw new Error("Function not implemented.");
        }}
        onSelect={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Suspense>
  );
}
