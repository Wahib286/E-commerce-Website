import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {/* Cart Items */}
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
              <h3 className="text-lg text-gray-600">Summary</h3>
              <p className="text-gray-700">
                Total Items:{" "}
                <span className="font-semibold">{cart.length}</span>
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xl font-bold text-green-600">
                Total Amount: ${totalAmount.toFixed(2)}
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition">
                Check Out Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart View
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">
            Your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
