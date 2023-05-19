import { useState } from 'react';
import { useRouter } from 'next/router';
import { ref, push, update } from 'firebase/database';
import { db } from '../firebase';

const AddGameForm = ({ gameId, gameData }) => {
    const [homeTeam, setHomeTeam] = useState(gameData?.homeTeam || '');
    const [awayTeam, setAwayTeam] = useState(gameData?.awayTeam || '');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const game = {
            homeTeam,
            awayTeam,
        };

        const gamesRef = ref(db, 'games');

        if (gameId) {
            const gameRef = ref(db, `games/${gameId}`);
            try {
                await update(gameRef, game);
                router.push(`/game/${gameId}`);
            } catch (err) {
                console.error(err.message);
            }
        } else {
            try {
                const newGameRef = await push(gamesRef, game);
                router.push(`/game/${newGameRef.key}`);
            } catch (err) {
                console.error(err.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{gameId ? 'Edit Game' : 'Add New Game'}</h2>
            <div className="match">
                <div className="match-info">
                    <input
                        type="text"
                        placeholder="Home Team"
                        value={homeTeam}
                        onChange={(e) => setHomeTeam(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Away Team"
                        value={awayTeam}
                        onChange={(e) => setAwayTeam(e.target.value)}
                    />
                </div>
                <button type="submit">Add Game</button>
            </div>
        </form>
    );
};

export default AddGameForm;
