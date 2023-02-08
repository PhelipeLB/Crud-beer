import { Box, Flex } from "@chakra-ui/react";
import { ProductBox } from "@crud-beer/ui";
import { CommandBox } from "@crud-beer/ui";

const ContainerBody = () => {
  return (
    <Flex>
      <CommandBox></CommandBox>
      <ProductBox></ProductBox>
    </Flex>
  );
};
export default ContainerBody;
