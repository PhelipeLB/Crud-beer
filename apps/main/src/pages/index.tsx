import { Container } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      bg="gray.300"
      maxW="100%"
      minHeight="100vh"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Center
        bg="gray.800"
        h="100px"
        color="white"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        padding={5}
      >
        Welcome to Crud-beer
      </Center>
    </Flex>
  );
}
