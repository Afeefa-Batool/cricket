import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ref, update, push, onValue } from "firebase/database";
import { db } from "../firebase";
import OngoingGame from "./OngoingGame";
import Clock from "./Clock";

const Admin = ({ user }) => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const gamesRef = ref(db, "games");
        const unsubscribe = onValue(gamesRef, (snapshot) => {
            const gamesData = snapshot.val();
            const gamesArray = [];
            for (const id in gamesData) {
                gamesArray.push({ id, ...gamesData[id] });
            }
            setGames(gamesArray);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleGameSelect = (e) => {
        const gameId = e.target.value;
        const game = games.find((game) => game.id === gameId);
        setSelectedGame(game);
    };

    const updateGameInDB = async (game) => {
        if (!user) return;
        const gameRef = ref(db, `games/${game.id}`);
        try {
            await update(gameRef, game);
        } catch (err) {
            console.error(err.message);
        }
    };

    const addNewGameToDB = async (game) => {
        if (!user) return;
        const gamesRef = ref(db, "games");
        try {
            const newGameRef = await push(gamesRef, game);
            setSelectedGame({ id: newGameRef.key, ...game });
            router.push(`/game/${newGameRef.key}`);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="admin">
            <h1>Admin Panel</h1>
            {selectedGame && <Clock game={selectedGame} />}
            <OngoingGame
                games={games}
                game={selectedGame}
                handleGameSelect={handleGameSelect}
                updateGameInDB={updateGameInDB}
                addNewGameToDB={addNewGameToDB}
                user={user}
            />
        </div>
    );
};

export default Admin;
