import Layout from "@/components/globals/Layout";
import telegram, { tg } from "@/hooks/telegram";
import { store } from "@/redux/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
