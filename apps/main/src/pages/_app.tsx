import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@crud-beer/ui";
import { theme } from '../chakra/theme'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
