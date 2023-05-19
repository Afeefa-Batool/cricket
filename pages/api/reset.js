import { ref, update } from 'firebase/database';
import { db } from '../../firebase';

export default async function handler(req, res) {
  const gameId = req.body.gameId;
  const gameRef = ref(db, `games/${gameId}`);
  const startTime = Date.now();
  try {
    await update(gameRef, { time: 0, extraTime: 0, running: false, startTime: startTime });
    res.status(200).json({ status: 'Timer reset' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
