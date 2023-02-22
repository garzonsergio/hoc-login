import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

interface PropsRegister {
  email: string;
  password: string;
}

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return uid;
  } catch (error) {
    alert((error as Error).message);
  }
};

export const signInWithCredetials = async ({
  email,
  password,
}: PropsRegister) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    return result.user.uid;
  } catch (error) {
    alert((error as Error).message);
  }
};

export const loginWithCredetials = async ({
  email,
  password,
}: PropsRegister) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    return result.user.uid;
  } catch (error) {
    alert((error as Error).message);
  }
};
