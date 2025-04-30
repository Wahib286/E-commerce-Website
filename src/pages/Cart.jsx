import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex max-w-6xl mx-auto h-100vh">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>

          <div className="p-6 mx-auto flex flex-col justify-between h-full">
            {/* Header */}
            <div className="mb-10">
              <div className="text-sm text-gray-600 font-semibold uppercase">
                Your Cart
              </div>
              <div className="text-3xl font-bold text-green-700">Summary</div>
              <p className="mt-2 text-md font-medium text-gray-800">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            {/* Footer */}
            <div className="mt-auto">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Total Amount: <span className="font-bold">${totalAmount}</span>
              </p>
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md font-semibold transition-colors">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
