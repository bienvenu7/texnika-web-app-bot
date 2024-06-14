import SvgSelector from "@/components/main/SvgSelector";
import telegram from "@/hooks/telegram";
import { AddLike, DeleteLike } from "@/redux/reducers/product";
import { selectLikes } from "@/redux/selectors/productSelector";
import { AppDispatch } from "@/redux/store";
import { ILike } from "@/types/app";
import { addLike, removeLike } from "@/utils/apis/product";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const TopBar = (props: Props) => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [like, setLike] = useState(false);

  const { user } = telegram();

  const likes = useSelector(selectLikes);

  const productId = router.query.id as string;

  useEffect(() => {
    if (
      likes.find(
        (el) =>
          el.productId === productId && el.userId === parseInt(user?.id as any)
      )
    ) {
      setLike(true);
    }
  }, []);

  const handleLike = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    try {
      const id = likes.filter(
        (el) =>
          el.productId === productId && el.userId === parseInt(user?.id as any)
      )[0].id as string;

      if (like === true) {
        const removedLikes = await removeLike(id);

        if (removedLikes === 200) {
          dispatch(DeleteLike(id));
          setLike(!like);
        }
      } else {
        const newLike: ILike = await addLike({
          productId,
          userId: parseInt(user?.id as any),
        });

        if (newLike) {
          dispatch(AddLike(newLike));
          setLike(!like);
        }
      }
    } catch (error) {
      return error;
    }
  };
  return router.asPath.split("/")[1] !== "reviews" ? (
    <div className="topbar__container">
      <div className="topbar__box">
        <button onClick={(e) => router.push("/")}>
          <SvgSelector id="arrow-left" />
        </button>
        <button className={like ? "like" : ""} onClick={handleLike}>
          <SvgSelector id="heart" />
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default TopBar;
