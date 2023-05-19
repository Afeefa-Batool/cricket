import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getGameById } from '../../firebase';
import Clock from '../../components/Clock';
import Navbar from '../../components/Navbar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AdminGame = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedGame, setSelectedGame] = useState(null);
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

  useEffect(() => {
    if (id) {
      const fetchGame = async () => {
        const gameData = await getGameById(id);
        setSelectedGame(gameData);
      };

      fetchGame();
    }
  }, [id]);

  if (!selectedGame) return null;

  return (
    <>
      <Navbar user={user} />
      <div className="ongoing-game">
        <Clock game={selectedGame} />
      </div>
    </>
  );
};

export default AdminGame;
