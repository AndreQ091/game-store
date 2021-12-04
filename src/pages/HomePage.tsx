import GameItem from "../components/GameItem";
import { games } from "../data";

const HomePage = () => {
  return (
    <div className="flex flex-wrap justify-start items-center gap-x-10 gap-y-7 mt-6">
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};

export default HomePage;
