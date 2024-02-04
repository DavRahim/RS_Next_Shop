"use client";
import { toast } from "react-hot-toast";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const AddToCartBtn = ({ id }) => {
//   const { cart, isLoading, mutate } = useCart();
  return (
    <>
      {" "}
      <button
        onClick={() => handleAddToCart(id)}
        className="btn btn-primary mt-4"
        // disabled={isAlready !== -1 || isLoading}
      >
        <MdOutlineAddShoppingCart />
        {/* {isAlready !== -1 ? "Already added" : "Add To Cart"} */}
        Add To Cart
      </button>
    </>
  );
};

export default AddToCartBtn;
