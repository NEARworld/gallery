import { createContext } from "react";

type CardContextProps = {
    cards: number,
    setCards: React.Dispatch<React.SetStateAction<number>>

}

export const CardContext = createContext<CardContextProps | null>(null);