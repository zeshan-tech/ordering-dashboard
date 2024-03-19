import { ImageList, ImageListItem } from "@mui/material";

interface IProductImageList {
  list: string[];
}
export default function ProductImageList({list}: IProductImageList) {

    console.log(list);
    
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {list.map((item) => (
        <ImageListItem key={item}>
          <img srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} src={`${item}?w=164&h=164&fit=crop&auto=format`} alt={"Right click and choose reload"} loading='lazy' />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
