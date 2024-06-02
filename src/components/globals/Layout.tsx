import { useRouter } from "next/router";
import React, { PropsWithChildren, ReactNode, useEffect } from "react";
import Footer from "./Footer";
import Header from "./navigation/Header";
import Modal from "./navigation/Modal";
import TopBar from "./navigation/TopBar";
import telegram, { tg } from "@/hooks/telegram";
import { useDispatch } from "react-redux";
import { SetuserId } from "@/redux/reducers/categoryReducers";
import { AppDispatch } from "@/redux/store";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (tg) {
      tg.ready();
    }
  }, []);

  const { queryId, user } = telegram();
  dispatch(SetuserId(user?.id as number));

  console.log(user, queryId);
  const router = useRouter();

  return (
    <>
      {router.asPath === "/" || router.asPath === "/cart" ? (
        <Header />
      ) : (
        <TopBar />
      )}
      <main>{children}</main>

      {router.asPath === "/" || router.asPath.split("/")[1] === "products" ? (
        <Footer />
      ) : (
        <Modal
          type={router.asPath.split("/")[1]}
          query={router.query.id as string}
        />
      )}
    </>
  );
};

export default Layout;
