import { Game } from './store/types/game';

export const calculateTotal = (items: Game[]) => items.reduce((acc, item) => (acc += item.price), 0);
