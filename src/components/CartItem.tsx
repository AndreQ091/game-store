import { FC } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Game } from "../store/types/game";
import { useAppDispatch } from '../app/hooks';
import { deleteFromCart } from '../store/slices/cartSlice';

type CartItemProps = {
  game: Game;
};

const CartItem: FC<CartItemProps> = ({ game }) => {
    const dispatch = useAppDispatch();
    const onDelete = () => {
        dispatch(deleteFromCart(game.id));
    }
  return (
    <div className="flex justify-between items-center w-full">
      <img
        className="block w-64 h-auto rounded-t-md"
        src={game.image}
        alt={game.title}
      />
      <div className="flex-grow font-medium text-lg text-white flex justify-center items-center">
        {game.title}
      </div>
      <div className="flex gap-x-2 items-center">
        <span className="font-medium text-lg text-white">{game.price}₽</span>
        <DeleteOutlined
          onClick={onDelete}
          className="font-medium flex items-center text-2xl text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartItem;
