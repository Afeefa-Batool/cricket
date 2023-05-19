import Head from 'next/head';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from "react";

export default function Register() {
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
                <title>Register - Live Sports Clock</title>
                <meta name="description" content="Registration page for Live Sports Clock" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar user={user} />
            <main>
                <RegisterForm />
            </main>
        </div>
    );
}