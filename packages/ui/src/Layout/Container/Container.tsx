import { Box, Flex } from "@chakra-ui/react";

const Container = ({ children }: any) => {
  return (
    <Flex
      bg="primary.100"
      maxW="100%"
      minHeight="100vh"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        bg="gray.800"
        minH="500px"
        minW="70%"
        color="white"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        {children}
      </Box>
    </Flex>
  );
};
export default Container;
