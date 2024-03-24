import { ImageList, Stack, styled } from "@mui/material";

interface IProductImageList {
  list: string[];
}
export default function ProductImageList({ list }: IProductImageList) {
  return (
    <StyledImageList>
      <Stack flexDirection={"row"} height={100}>
        {list.map((item) => (
          <img key={item} srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} src={`${item}?w=164&h=164&fit=crop&auto=format`} alt={"Right click and choose reload"} loading='lazy' />
        ))}
      </Stack>
    </StyledImageList>
  );
}

const StyledImageList = styled(ImageList)`
  overflow-x: scroll;
  width: 100%;
`;
