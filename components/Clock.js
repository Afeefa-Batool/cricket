import { useState, useEffect } from 'react';
import { ref, onValue, update } from 'firebase/database';
import moment from "moment";
import { db } from '../firebase';

function Clock({ game }) {
    const [localGoals, setLocalGoals] = useState(game.homeScore);
    const [visitorGoals, setVisitorGoals] = useState(game.awayScore);
    const [time, setTime] = useState(0);
    const [extraTime, setExtraTime] = useState(0);

    const [running, setRunning] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [overallSeconds, setOverallSeconds] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                fetch('/api/tick', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ gameId: game.id, time: overallSeconds + 1 })
                });
                if (seconds < 59) {
                    setSeconds((prevSeconds) => prevSeconds + 1);
                    setOverallSeconds((prevSeconds) => prevSeconds + 1)

                } else {
                    setMinutes((prevMinutes) => prevMinutes + 1);
                    setSeconds(0);
                    setOverallSeconds((prevSeconds) => prevSeconds + 1)
                }
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    }, [running, minutes, seconds, overallSeconds]);

    useEffect(() => {
        const gameRef = ref(db, `games/${game.id}`);
        const unsubscribe = onValue(gameRef, (snapshot) => {
            const gameData = snapshot.val();
            console.log('Firebase snapshot data:', gameData);
            setRunning(gameData.running);
            setTime(gameData.time);
            setExtraTime(gameData.extraTime);
            setLocalGoals(gameData.homeScore);
            setVisitorGoals(gameData.awayScore);
        });

        return () => {
            unsubscribe();
        };
    }, [game.id]);

    const updateGameScore = async (localGoals, visitorGoals) => {
        const gameRef = ref(db, `games/${game.id}`);
        try {
            await update(gameRef, {
                homeScore: localGoals,
                awayScore: visitorGoals,
            });
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleStartClick = async () => {
        try {
            const res = await fetch('/api/start', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gameId: game.id })
            });
            const data = await res.json();
            setRunning(true);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleStopClick = async () => {
        try {
            const res = await fetch('/api/stop', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gameId: game.id })
            });
            const data = await res.json();
            console.log(data);
            setRunning(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleResetClick = async () => {
        try {
            const res = await fetch('/api/reset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gameId: game.id })
            });
            const data = await res.json();
            console.log(data);
            setMinutes(0);
            setSeconds(0);
            setRunning(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleMinutesChange = (event) => {
        const { value } = event.target;
        setMinutes(parseInt(value, 10));
    };

    const handleSecondsChange = (event) => {
        const { value } = event.target;
        setSeconds(parseInt(value, 10));
    };

    const handleClockUpdate = async () => {
        setOverallSeconds(minutes * 60 + seconds);
        setIsLoading(true)
        const res = await fetch('/api/tick', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ gameId: game.id, time: minutes * 60 + seconds })
        });
        const data = await res.json();
        setIsLoading(false)
    }

    return (
        <div className="match">
            <div className="match-info">
                <span className="team-name local-team t-border-left">
                    {game.homeTeam}
                </span>
                <input
                    type="number"
                    value={localGoals}
                    onChange={(e) => updateGameScore(parseInt(e.target.value), visitorGoals)}
                />
                <span>:</span>
                <input
                    type="number"
                    value={visitorGoals}
                    onChange={(e) => updateGameScore(localGoals, parseInt(e.target.value))}
                />
                <span className="team-name visitor-team t-border-right">
                    {game.awayTeam}
                </span>
            </div>
            <div className="clock">
                <h3>Game Clock</h3>
                <div className="time">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>

                <button disabled={isLoading} onClick={handleStartClick} className='ml-3'>Start</button>
                <button disabled={isLoading} onClick={handleStopClick}>Stop</button>
                <button disabled={isLoading} onClick={handleResetClick}>Reset</button>
            </div>
            <div className="timer-controls">
                <div>
                    <label htmlFor="minutes">Minutes: </label>
                    <input
                        type="number"
                        id="minutes"
                        min="0"
                        max="90"
                        value={minutes}
                        onChange={handleMinutesChange}
                        disabled={isLoading || running}
                    />
                </div>
                <div>
                    <label htmlFor="seconds">Seconds: </label>
                    <input
                        type="number"
                        id="seconds"
                        min="0"
                        max="59"
                        value={seconds}
                        onChange={handleSecondsChange}
                        disabled={isLoading || running}
                    />
                </div>
                <button disabled={isLoading || running} onClick={handleClockUpdate}>Update Clock</button>
            </div>
        </div>
    );
}

export default Clock;
