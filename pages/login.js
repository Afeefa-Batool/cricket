import Head from 'next/head';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from "react";


export default function Login() {
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
                <title>Login - Live Sports Clock</title>
                <meta name="description" content="Login page for Live Sports Clock" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar user={user} />
            <main>
                <LoginForm />
            </main>
        </div>
    );
}