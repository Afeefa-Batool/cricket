import { ref, update } from 'firebase/database';
import { db } from '../../firebase';

export default async function handler(req, res) {
  const gameId = req.body.gameId;
  const time = req.body.time;
  const gameRef = ref(db, `games/${gameId}`);

  try {
    await update(gameRef, { running: true, time: time });
    res.status(200).json({ status: 'Timer started' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
