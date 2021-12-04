import { addToCart, deleteFromCart } from "../store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { Game } from '../store/types/game';
import { FC } from 'react';
import { setCurrentGame } from '../store/slices/gameSlice';

type GameItemProps = {
  game: Game;
}

const GameItem: FC<GameItemProps> = ({game}) => {
  const history = useNavigate();
  const { items } = useAppSelector((state) => state.cart);
  const isInCart = items.some((item) => item.id === game.id);
  const dispatch = useAppDispatch();
  const path = game.title.replace(' ', '');

  const openDetails = () => {
    dispatch(setCurrentGame(game));
    history(`/app/${path}`)
  }

  const handleClick = () => {
    if (isInCart) {
      dispatch(deleteFromCart(game.id));
    } else dispatch(addToCart(game));
  };
  return (
    <div className={"w-60 h-60 rounded-2xl flex flex-col bg-warmGray-800"}>
      <img className="block rounded-t-2xl" src={game.image} alt="" />
      <div className="info flex-grow relative py-1 px-3 flex flex-col items-start gap-y-1">
        <h3
          onClick={openDetails}
          className="text-lg font-semibold text-white cursor-pointer"
        >
          {game.title}
        </h3>
        <div className="genres flex flex-wrap gap-1">
          {game.genres.map((genre) => (
            <span key={genre} className="bg-gray-600 text-white text-xs rounded-xl px-1">
              {genre}
            </span>
          ))}
        </div>
        <div className="absolute -bottom-2 right-0">
          <span className="text-base mr-2">{game.price}₽</span>
          <button
            onClick={handleClick}
            className={
              isInCart
                ? "bg-gray-500 px-5 rounded-lg"
                : "bg-pink-700 px-5 rounded-lg"
            }
          >
            {isInCart ? "Удалить из корзины" : "В корзину"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
