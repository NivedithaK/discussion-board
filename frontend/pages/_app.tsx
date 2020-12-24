// TODO: FIX THESE ESLINT ERROR
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import "../styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import * as locales from "../content/locale";
import configureStore from "../stores/store";

export default function App({ Component, pageProps }) {
  const store = configureStore(pageProps.initialReduxState);
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];
  const theme = extendTheme({
    colors: {
      brand: {
        100: "#2d9cdc", // main blue
        200: "#96cfee", // light blue
        300: "gray.600", // dark grey text
        400: "#4e93bb", // dark blue shadow
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </IntlProvider>
    </ChakraProvider>
  );
}

