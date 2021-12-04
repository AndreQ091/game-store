import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import HomePage from "./pages/HomePage";
import HeaderComp from "./components/Header";
import GamePage from "./pages/GamePage";
import { useAppSelector } from "./app/hooks";
import OrderPage from "./pages/OrderPage";

const { Content } = Layout;

function App() {
  const { currentGame } = useAppSelector((state) => state.game);
  return (
    <Layout>
      <HeaderComp />
      <Content className="px-28 bg-warmGray-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/:title" element={<GamePage game={currentGame} />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
