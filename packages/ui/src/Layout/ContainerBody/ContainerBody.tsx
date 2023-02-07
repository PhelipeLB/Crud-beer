import { Box, Flex } from "@chakra-ui/react";
import { ProductBox } from "@crud-beer/ui";
import { CommandBox } from "@crud-beer/ui";

export default function ContainerBody() {
  return (
    <Flex>
      <CommandBox></CommandBox>
      <ProductBox></ProductBox>
    </Flex>
  );
}
