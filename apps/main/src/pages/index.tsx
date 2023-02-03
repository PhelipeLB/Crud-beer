import { Container } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      bg="#f8e8b4"
      maxW="100%"
      minHeight="100vh"
      justifyContent={"center"}
      alignItems={"center"}
      
    >
      <Center
        bg="#cea817"
        h="100px"
        color="#190c00"
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
