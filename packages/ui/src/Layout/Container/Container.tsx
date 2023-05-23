import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
interface IContainer {
  (props: { children: ReactNode }): JSX.Element;
}

const Container: IContainer = ({ children }) => {
  return (
    <Flex
      bg="primary.100"
      minHeight="100vh"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        bg="gray.800"
        minH="500px"
        minW="70%"
        borderRadius="lg"
        overflow="hidden"
      >
        {children}
      </Box>
    </Flex>
  );
};
export default Container;
