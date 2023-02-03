import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@crud-beer/ui";


export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
