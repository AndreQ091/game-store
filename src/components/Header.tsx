import { Link } from "react-router-dom";
import { Layout } from "antd";
import Cart from './Cart';

const { Header } = Layout;

const HeaderComp = () => {
  return (
    <Header className="bg-warmGray-900 px-28 flex justify-between items-center h-24">
      <h2 className="text-2xl cursor-pointer text-white">
        <Link to="/">Game Store</Link>
      </h2>
      <Cart />
    </Header>
  );
};

export default HeaderComp;
