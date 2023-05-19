// Timer.js
import { useEffect } from "react";
import { ref, onValue, update } from "firebase/database";
import { db } from "../firebase";

const Timer = ({ game }) => {
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const paddedMinutes = minutes.toString().padStart(2, "0");
        const paddedSeconds = remainingSeconds.toString().padStart(2, "0");
        return `${paddedMinutes}:${paddedSeconds}`;
    };

    useEffect(() => {
        const gameRef = ref(db, `games/${game.id}`);
        let timer;
        let startTime = game.startTime || Date.now();
        let time = game.time || 0;
        let extraTime = game.extraTime || 0;
        let running = game.running || false;
        let localGoals = game.homeScore || 0;
        let visitorGoals = game.awayScore || 0;
        const unsubscribe = onValue(gameRef, (snapshot) => {
            const gameData = snapshot.val();
            if (gameData) {
                startTime = gameData.startTime;
                time = gameData.time;
                extraTime = gameData.extraTime;
                running = gameData.running;
                localGoals = gameData.homeScore;
                visitorGoals = gameData.awayScore;
            }
        });
        return () => {
            unsubscribe();
            if (running) {
                timer = setInterval(() => {
                    const currentTime = Date.now();
                    const newTime = Math.floor((currentTime - startTime) / 1000);
                    if (newTime <= 90 * 60) {
                        time = newTime;
                        updateGameTime(time, extraTime, startTime, true);
                    } else {
                        clearInterval(timer);
                    }
                }, 1000);
            }
        };
    }, [game]);

    const updateGameTime = async (time, extraTime, startTime, running) => {
        const gameRef = ref(db, `games/${game.id}`);
        try {
            await update(gameRef, {
                time,
                extraTime,
                startTime,
                running,
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleStartClick = async () => {
        const gameRef = ref(db, `games/${game.id}`);
        const startTime = Date.now();
        updateGameTime(game.time, game.extraTime, startTime, true);
    };

    const handleStopClick = async () => {
        const gameRef = ref(db, `games/${game.id}`);
        updateGameTime(game.time, game.extraTime, game.startTime, false);
    };

    const handleResetClick = async () => {
        const gameRef = ref(db, `games/${game.id}`);
        const startTime = Date.now();
        updateGameTime(0, 0, startTime, false);
    };

    return (
        <div className="clock">
            <span className="time">{formatTime(game.time)}</span>
            {game.extraTime > 0 && (
                <span className="extra-time">+{formatTime(game.extraTime)}</span>
            )}
            <div className="timer-controls">
                {game.running === false && (
                    <button onClick={handleStartClick}>Start</button>
                )}
                {game.running === true && (
                    <button onClick={handleStopClick}>Stop</button>
                )}
                <button onClick={handleResetClick}>Reset</button>
            </div>
        </div>

    );
};
export default Timer;