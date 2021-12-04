import { FC } from 'react';
import {useNavigate} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { deleteFromCart, addToCart } from '../store/slices/cartSlice';
import { Game } from '../store/types/game';


type GamePageProps = {
    game: Game;
}

const GamePage: FC<GamePageProps> = ({game}) => {

  const { items } = useAppSelector((state) => state.cart);
  const isInCart = items.some((item) => item.id === game.id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const handleClick = () => {
    if (isInCart) {
      dispatch(deleteFromCart(game.id));
    } else dispatch(addToCart(game));
  };

  if (!game) {
    navigate('/');
  }

  return (
    <div className='py-4'>
      <h1 className='font-bold text-white text-xl'>{game.title}</h1>
      <div className="flex justify-between w-full mt-4">
        <iframe
          width="600"
          height="400"
          src={game.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={"max-w-sm rounded-2xl flex flex-col bg-warmGray-900"}>
          <img
            className="block rounded-t-2xl"
            src={game.image}
            alt={game.title}
          />
          <div className="info flex-grow py-1 flex flex-col items-start gap-y-1">
            <p>{game.description}</p>
            <p className='text-gray-400'>Популярные метки этого продукта:</p>
            <div className="genres flex flex-wrap gap-1">
              {game.genres.map((genre) => (
                <span className="bg-gray-600 text-white text-xs rounded-xl px-1">
                  {genre}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center w-full">
              <span className="mr-2 text-2xl">{game.price}₽</span>
              <button
                onClick={handleClick}
                className={
                  isInCart
                    ? "bg-gray-500 px-7 py-2 rounded-lg"
                    : "bg-pink-700 px-7 py-2 rounded-lg"
                }
              >
                {isInCart ? "Удалить из корзины" : "В корзину"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;