import Head from 'next/head';
import Navbar from '../components/Navbar';
import GameList from '../components/GameList';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LineUpA from '@/components/lineUpA/LineUpA';

// import Grotta from '@/components/lineUpA/Grotta/Grotta';
import LinkUp from '@/components/lineUpA/LinkUp/LinkUp';
import Game from '@/components/lineUpA/Game1/Game1';
import Game2 from '@/components/lineUpA/Game2/Game2';
import Game3 from '@/components/lineUpA/Game3/Game3';
import Game4 from '@/components/lineUpA/Game4/Game4';
import Game5 from '@/components/lineUpA/Game5/Game5';
import Game6 from '@/components/lineUpA/Game6/Game6';
import StadanTable from '@/components/lineUpA/StadanTable/StadanTable';


export default function Home() {
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

  return (
    <div>
      <Head>
        <title>Live Sports Clock</title>
        <meta name="description" content="Live sports clock for soccer broadcasts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} />
      <main>
        <GameList />
      </main>
      <LineUpA/>
<Game/>
<Game2/>
<Game3/>
<Game4/>
<Game5/>
<Game6/>

      {/* <Grotta/> */}
      <LinkUp/>
      <StadanTable/>
    </div>
  );
}