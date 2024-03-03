import SvgSelector from "@/components/main/SvgSelector";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const TopBar = (props: Props) => {
  const router = useRouter();
  return router.asPath.split("/")[1] !== "reviews" ? (
    <div className="topbar__container">
      <div className="topbar__box">
        <button onClick={() => router.push("/")}>
          <SvgSelector id="arrow-left" />
        </button>
        <button>
          <SvgSelector id="heart" />
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default TopBar;
