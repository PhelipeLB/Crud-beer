import { Box } from "@chakra-ui/react";
import { ItensCommandBox } from "@crud-beer/ui";
import { ProductsBox } from "@crud-beer/ui";

const ProductBox = () => {
  return (
    <Box
      bg="gray.800"
      minH="500px"
      width="60%"
      color="white"
      overflow="hidden"
      border={"1px"}
      borderColor={"gray.200"}
    >
      <ProductsBox></ProductsBox>
      <ItensCommandBox></ItensCommandBox>
    </Box>
  );
};
export default ProductBox;
