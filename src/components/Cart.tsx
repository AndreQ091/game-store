import { Badge, Card, Button } from "antd";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { calculateTotal } from "../utils";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { deleteFromCart } from '../store/slices/cartSlice';

const Cart = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const [visible, setVisible] = useState(false);
  const { items } = useAppSelector((state) => state.cart);
  const total = calculateTotal(items);
  const qty = items.length;

  const title = items.length
    ? items.map((item) => (
        <div key={item.id} className="flex justify-between">
          <span>{item.title}</span>
          <div className="flex items-center gap-x-2">
            <span>{item.price}₽</span>
            <DeleteOutlined
              onClick={() => dispatch(deleteFromCart(item.id))}
              className="cursor-pointer"
            />
          </div>
        </div>
      ))
    : false;

  const handleClick = useCallback(() => {
    setVisible(false);
    history("/order");
  }, [history]);

  return (
    <div className="cart relative flex items-center">
      <Badge count={qty} size={"small"} offset={[-8, 8]}>
        <ShoppingCartOutlined
          onClick={() => setVisible(!visible)}
          className="text-white cursor-pointer text-2xl mr-2"
        />
      </Badge>
      <span className="price text-xl ml-1">{qty ? `${total}₽` : null}</span>
      {visible && (
        <Card
          className="absolute top-10 right-1 z-10 w-64 rounded-lg bg-warmGray-800 px-3 py-1"
          title={title}
          bordered={false}
          style={{ width: 300 }}
        >
          {qty ? (
            <>
              <div className="flex justify-between w-full">
                <span>Итого:</span>
                <span>{total}₽</span>
              </div>
              <Button
                onClick={handleClick}
                className="rounded-3xl bg-indigo-500 mt-4 hover:bg-gray-900"
              >
                Оформить заказ
              </Button>
            </>
          ) : (
            "Корзина пуста"
          )}
        </Card>
      )}
    </div>
  );
};

export default Cart;
