
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword, signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {toast} from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyCu0lo1xsUSuOtRHIGZQROpmCmJML9QuHs",
    authDomain: "netflix-clone-bc896.firebaseapp.com",
    projectId: "netflix-clone-bc896",
    storageBucket: "netflix-clone-bc896.firebasestorage.app",
    messagingSenderId: "627732542653",
    appId: "1:627732542653:web:79e727342428f7d324f3d4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        // alert(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
        console.log(error);
        // alert(error); instead of this we will give toast err alert
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout };