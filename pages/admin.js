import Head from 'next/head';
import Navbar from '../components/Navbar';
import AddGameForm from '../components/AddGameForm';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Admin() {
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
                <title>Admin - Live Sports Clock</title>
                <meta name="description" content="Admin dashboard for managing games on Live Sports Clock" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar user={user} />
            <main>
                {user ? (
                    <AddGameForm />
                ) : (
                    <p>You must be logged in to view this page.</p>
                )}
            </main>
        </div>
    );
}