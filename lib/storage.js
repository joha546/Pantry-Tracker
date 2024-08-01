// lib/storage.js

import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadImage = async (userId, file) => {
  const storageRef = ref(storage, `users/${userId}/${file.name}`);
    await uploadBytes(storageRef, file);
      return getDownloadURL(storageRef);
      };