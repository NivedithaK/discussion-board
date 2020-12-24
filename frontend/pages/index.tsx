/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Box, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { BiPalette } from "react-icons/bi";
import { ImWrench } from "react-icons/im";
import { IoAccessibility } from "react-icons/io5";
import { RiCodeSSlashLine } from "react-icons/ri";
import { RiOpenSourceFill } from "react-icons/ri";
import { useIntl } from "react-intl";

import { FeatureCard } from "../components/FeatureCard/FeatureCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box bg="blue.300" w="100%" h="100%" p={4}>
          <Text fontSize="3xl" align="center" color="white" fontWeight="bold">
            {f("featuresTitle")}
          </Text>
          <br></br>
          <br></br>
          <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={12}>
            <FeatureCard
              title={f("feature1")}
              description={f("feature1msg")}
              icon={BiPalette}
            />

            <FeatureCard
              title={f("feature2")}
              description={f("feature2msg")}
              icon={ImWrench}
            />

            <FeatureCard
              title={f("feature3")}
              description={f("feature3msg")}
              icon={ImWrench}
            />

            <FeatureCard
              title={f("feature4")}
              description={f("feature4msg")}
              icon={IoAccessibility}
            />

            <FeatureCard
              title={f("feature5")}
              description={f("feature5msg")}
              icon={RiCodeSSlashLine}
            />

            <FeatureCard
              title={f("feature6")}
              description={f("feature6msg")}
              icon={RiOpenSourceFill}
            />
          </SimpleGrid>
        </Box>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
