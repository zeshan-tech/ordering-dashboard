import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem } from "@mui/material";

import { CachedIcon, DeleteIcon, EditIcon, SearchIcon } from "@/components/icons";
import CategoryTable from "../components/CategoryTable";

export default function CategoryScreen() {
  const { t } = useTranslation();
  const [actionMenuEnchorEl, setActionMenuEnchorEl] = useState<HTMLElement | null>(null);

  // const actionMenu = (
  //   <Menu open={!!actionMenuEnchorEl} onClose={() => setActionMenuEnchorEl(null)} anchorEl={actionMenuEnchorEl} onClick={() => setActionMenuEnchorEl(null)}>
  //     <MenuItem onClick={() => alert("seriesTableRef.current?.onRefresh")}>
  //       <CachedIcon tooltip={t("refetch")} />
  //     </MenuItem>
  //     <MenuItem onClick={() => alert("seriesTableRef.current?.onDeleteMultipleMovie")}>
  //       <SearchIcon tooltip={t("search")} />
  //     </MenuItem>
  //     <MenuItem onClick={() => alert("seriesTableRef.current?.onDeleteMultipleMovie")}>
  //       <DeleteIcon tooltip={t("deleteSelected")} color='error' />
  //     </MenuItem>
  //     <MenuItem onClick={() => alert("seriesTableRef.current?.onEditMultipleMovie")}>
  //       <EditIcon tooltip={t("editSelected")} color='primary' />
  //     </MenuItem>
  //   </Menu>
  // );

  return <CategoryTable />;
}

{
  /* <Stack direction={"row"} mb={1} justifyContent={"space-between"} alignItems={"center"}>
    <Typography variant='h5'>{t("yourMovies")}</Typography>
    <Stack gap={1} direction={"row"} alignItems={"center"} justifyContent={"flex-end"}>
      <Hidden mdDown>
        <CachedIcon tooltip={t("refetch")} iconButton onClick={() => alert("seriesTableRef.current?.onRefresh")} />
        <SearchIcon tooltip={t("search")} iconButton onClick={() => alert("seriesTableRef.current?.onSearchToogle")} />
        <DeleteIcon tooltip={t("deleteSelected")} color='error' iconButton onClick={() => () => alert("seriesTableRef.current?.onDeleteMultipleMovie")} />
        <EditIcon tooltip={t("editSelected")} color='primary' iconButton onClick={() => alert("seriesTableRef.current?.onEditMultipleMovie")} />
      </Hidden>
      <Hidden smDown>
        <Button onClick={handleOnCreateMovieClick}>{t("uploadMovie")}</Button>
      </Hidden>
      <Hidden smUp>
        <AddIcon iconButtonProps={{ color: "primary" }} onClick={handleOnCreateMovieClick} tooltip={t("createMovie")} />
      </Hidden>
      <Hidden mdUp>
        <MoreVertIcon />
        {actionMenu}
      </Hidden>
    </Stack>
  </Stack> */
}
