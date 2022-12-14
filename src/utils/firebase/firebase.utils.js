import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgsXZW2Z2eIpAKGvxvVPjauuPYFFcFKTs",
    authDomain: "crwn-clothing-db-69916.firebaseapp.com",
    projectId: "crwn-clothing-db-69916",
    storageBucket: "crwn-clothing-db-69916.appspot.com",
    messagingSenderId: "382431931404",
    appId: "1:382431931404:web:a355dd8d6d7b94bc9bd229",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        console.log("user not exist");
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
    email,
    password
) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
};
export const signInAuthUserWithEmailAndPassword = async (
    email,
    password
) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => {
    await signOut(auth);
};
export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(
        auth,
        callback
        // errorCallback,
        // completedCallback
    );
