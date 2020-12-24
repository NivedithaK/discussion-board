// TODO: FIX THESE ESLINT ERROR
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import "../styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import * as locales from "../content/locale";
import configureStore from "../stores/store";

export const PageWrapper = ({ children, title }) => {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

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

  const messagesMap = {
    "/": "Homepage",
  };
  return (
    <ChakraProvider theme={theme}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        <Provider store={store}>
          <PageWrapper title={messagesMap[pathname]}>
            <Component {...pageProps} />
          </PageWrapper>
        </Provider>
      </IntlProvider>
    </ChakraProvider>
  );
}

