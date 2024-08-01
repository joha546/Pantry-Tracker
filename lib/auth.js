// lib/auth.js

import { auth, db } from './firebase';
import { 
  createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
      signOut as firebaseSignOut,
        onAuthStateChanged,
          updateProfile
          } from 'firebase/auth';
          import { doc, setDoc } from 'firebase/firestore';

          export const signUp = async (email, password, name) => {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;
                        
                            // Update user profile
                                await updateProfile(user, { displayName: name });

                                    // Add user details to Firestore
                                        await setDoc(doc(db, 'users', user.uid), {
                                              name: name,
                                                    email: email,
                                                        });

                                                            return user;
                                                              } catch (error) {
                                                                  console.error("Error in signUp:", error);
                                                                      throw error;
                                                                        }
                                                                        };

                                                                        export const signIn = async (email, password) => {
                                                                          try {
                                                                              const userCredential = await signInWithEmailAndPassword(auth, email, password);
                                                                                  return userCredential.user;
                                                                                    } catch (error) {
                                                                                        console.error("Error in signIn:", error);
                                                                                            throw error;
                                                                                              }
                                                                                              };

                                                                                              export const signOut = () => {
                                                                                                return firebaseSignOut(auth);
                                                                                                };

                                                                                                export const onAuthStateChange = (callback) => {
                                                                                                  return onAuthStateChanged(auth, callback);
                                                                                                  };