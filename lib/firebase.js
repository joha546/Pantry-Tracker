// lib/firebase.js

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebaseConfig from '../config/firebase-config';

let app;

// Initialize Firebase
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
    }

    // Initialize Firebase services
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app);

    export { app, auth, db, storage };