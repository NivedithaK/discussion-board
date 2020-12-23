// TODO: FIX THESE ESLINT ERROR
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
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

  return (
    <ChakraProvider>
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
