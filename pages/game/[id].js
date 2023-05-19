import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';
import Navbar from '../../components/Navbar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const GamePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [game, setGame] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const paddedMinutes = minutes.toString().padStart(2, '0');
        const paddedSeconds = remainingSeconds.toString().padStart(2, '0');
        return `${paddedMinutes}:${paddedSeconds}`;
    };

    useEffect(() => {
        if (id) {
            const gameRef = ref(db, `games/${id}`);
            const unsubscribe = onValue(gameRef, (snapshot) => {
                const gameData = snapshot.val();
                setGame(gameData);
            });
            return () => {
                // Detach the listener when the component unmounts
                unsubscribe();
            };
        }
    }, [id]);

    return (
        <>
            <div>
                {game && (
                    <div className="game-container">
                        <div className="wrapper-game">
                            <div className="logo-container">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/bikatti/clock-plugin@main-3/assets/logo.png"
                                    alt="logo-lengju"
                                />
                            </div>
                            <div className="wrapper-match">
                                <div className="match-info">
                                    <span className="team-name local-team">
                                        {game.homeTeam}
                                    </span>
                                    <span className="scores">
                                        {game.homeScore} - {game.awayScore}
                                    </span>
                                    <span className="team-name away-team">
                                        {game.awayTeam}
                                    </span>
                                </div>
                                <div className="clock-container">
                                    <div className="clock">
                                        <div className="half-time">
                                            <span className="time">{formatTime(game.time)}</span>
                                        </div>
                                        {game.extraTime > 0 && (
                                            <div className="wrapper-extra-time">
                                                <span className="extra-time">
                                                    +{formatTime(game.extraTime)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default GamePage;
