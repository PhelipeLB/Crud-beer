import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#f8e8b4",
      200: "#f2dd89",
      300: "#edd45c",
      400: "#e8ce31",
      500: "#cea817",
      600: "#a1780f",
      700: "#734e07",
      800: "#452a01",
      900: "#190c00",
    },
  },
})