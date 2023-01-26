import { ChakraProvider } from '@chakra-ui/react'

// @ts-ignore
export default function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

