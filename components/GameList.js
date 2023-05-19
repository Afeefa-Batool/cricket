import { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';
import GameItem from './GameItem';
// Import at the top of the file
import Link from 'next/link';

function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const gamesRef = ref(db, 'games');
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

    return (
        <div className="list-games">
            <h2>Games</h2>
            <Link href="/admin">
                <button>Add New Game</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game) => (
                        <GameItem key={game.id} game={game} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GameList;