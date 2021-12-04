import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Button } from "antd";
import CartItem from "../components/CartItem";
import { calculateTotal } from "../utils";

const OrderPage = () => {
  const { items } = useAppSelector((state) => state.cart);

  if (!items.length) {
    return (
      <>
        <h1 className='text-3xl text-white mb-3'>Корзина пуста</h1>
        <p>
          <Link to="/">Добавить</Link> товары?
        </p>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      {items.map((game) => (
        <CartItem key={game.id} game={game} />
      ))}
      <p className="text-2xl">
        {items.length} тов. {calculateTotal(items)}₽
      </p>
      <Button className="w-auto rounded-2xl text-white border-none outline-none bg-green-600 hover:bg-green-800">
        <a href="https://vk.com/venv7" target="_blank" rel="noreferrer">
          Оплатить
        </a>
      </Button>
    </div>
  );
};

export default OrderPage;
