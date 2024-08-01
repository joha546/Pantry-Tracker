// lib/auth.js

import { auth } from './firebase';
import { 
  createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
      signOut as firebaseSignOut,
        onAuthStateChanged
        } from 'firebase/auth';

        export const signUp = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
          };

          export const signIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
            };

            export const signOut = () => {
              return firebaseSignOut(auth);
              };

              export const onAuthStateChange = (callback) => {
                return onAuthStateChanged(auth, callback);
                };