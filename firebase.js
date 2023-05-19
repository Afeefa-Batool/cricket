import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set, update } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvw0N9T-v6cw_LbfD29ggVqMHBSC3aNqE",
    authDomain: "oz-graphics-overlay-firebase.firebaseapp.com",
    databaseURL: "https://oz-graphics-overlay-firebase-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "oz-graphics-overlay-firebase",
    storageBucket: "oz-graphics-overlay-firebase.appspot.com",
    messagingSenderId: "739566702799",
    appId: "1:739566702799:web:1972276008caa450bae7ba",
    measurementId: "G-E39X5HDDEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db, ref, set };

export const getGameById = async (gameId) => {
    const gameRef = ref(db, `games/${gameId}`);
    return new Promise((resolve, reject) => {
        onValue(
            gameRef,
            (snapshot) => {
                const gameData = snapshot.val();
                if (gameData) {
                    resolve({ id: gameId, ...gameData });
                } else {
                    reject(new Error(`id sent: ${gameId}`));
                }
            },
            (error) => {
                reject(error);
            }
        );
    });
};


export const updateGameTime = async (gameId, time, extraTime) => {
    const gameRef = ref(db, `games/${gameId}`);
    await update(gameRef, { time, extraTime, running: true });
};