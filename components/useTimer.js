import { useState, useEffect } from "react";
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

const useTimer = (game) => {
  const [time, setTime] = useState(game.time || 0);
  const [extraTime, setExtraTime] = useState(game.extraTime || 0);
  const [isRunning, setIsRunning] = useState(false);

  // Listen for game time updates from Firebase
  useEffect(() => {
    const gameRef = ref(db, `games/${game.id}`);
    const unsubscribe = onValue(gameRef, (snapshot) => {
      const gameData = snapshot.val();
      setTime(gameData.time || 0);
      setExtraTime(gameData.extraTime || 0);
      setIsRunning(gameData.running || false);
    });
    return () => {
      unsubscribe();
    };
  }, [game.id]);

  return { time, extraTime, isRunning };
};

export default useTimer;
