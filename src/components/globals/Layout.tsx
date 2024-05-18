import { useRouter } from "next/router";
import React, { PropsWithChildren, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./navigation/Header";
import Modal from "./navigation/Modal";
import TopBar from "./navigation/TopBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
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
