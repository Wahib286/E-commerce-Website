import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex justify-between border-b pb-6 gap-x-4  my-10 max-w-xl">
      {/* Image */}
      <div className="h-[180px] w-[180px] flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between max-w-[24rem] ">
        {/* Title and description */}
        <div>
          <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
          <p className="text-gray-500 text-sm line-clamp-3">
            {item.description}
          </p>
        </div>

        {/* Price and delete button at bottom */}
        <div className="flex items-center justify-between mt-auto">
          <p className="text-green-600 font-semibold text-md">${item.price}</p>
          <button
            onClick={removeFromCart}
            className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition-colors">
            <AiOutlineDelete className="text-red-600 text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
