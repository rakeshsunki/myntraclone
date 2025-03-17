import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import WishCard from "./wishlistcard";
import { bagActions, wishlistActions } from "../../store/mainStore";
import { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";

const WishList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  if (wishlist.length == 0) {
    return (
      <>
        <h4 className="w-full h-[400px] bg-[indianred] text-white flex items-center justify-center">
          WishList Is Empty :
          <Link to={"/"} type="button" className="bg-light">
            Shop Now
          </Link>
        </h4>
      </>
    );
  }
  return (
    <>
      <center>
        <h5 style={{ marginTop: "80px" }}>
          {wishlist.length}- Item(s) In The WishList
          <button
            className="btn btn-success"
            onClick={() => {
              dispatch(bagActions.WISHADD(wishlist));
              console.log("wish list move to bag", wishlist);
              dispatch(wishlistActions.EMPTY());
              navigate("/bag");
            }}
          >
            MOVE TO BAG
          </button>
        </h5>
      </center>
      <div className="flex flex-wrap relative justify-center top-20 bg-white">
        {wishlist.map((item, index) => (
          <WishCard item={item} key={index}></WishCard>
        ))}
      </div>
    </>
  );
};
export default WishList;
