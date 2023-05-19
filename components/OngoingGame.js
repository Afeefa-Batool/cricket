import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import Clock from "./Clock";

const OngoingGame = () => {
    const [game, setGame] = useState(null);

    useEffect(() => {
        const gameRef = database.ref("game");
        gameRef.on("value", (snapshot) => {
            setGame(snapshot.val());
        });

        return () => {
            gameRef.off();
        };
    }, []);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ongoing-game">
            <h2>Ongoing Game</h2>
            <Clock game={game} />
        </div>
    );
};

export default OngoingGame;
