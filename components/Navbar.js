import { useState } from 'react';
import { getAuth, signOut as signOutUser } from 'firebase/auth';
import Link from 'next/link';

const Navbar = ({ user }) => {
    const signOut = async () => {
        try {
            await signOutUser(getAuth());
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <nav>
            <Link href="/">
                Home
            </Link>
            {user ? (
                <>
                    <Link href="/admin">
                        Admin
                    </Link>
                    <button onClick={signOut}>Logout</button>
                </>
            ) : (
                <>
                    <Link href="/login">
                        Login
                    </Link>
                    <Link href="/register">
                        Register
                    </Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;