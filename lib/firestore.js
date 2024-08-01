// lib/firestore.js

import { db } from './firebase';
import { 
  collection, 
    addDoc, 
      updateDoc, 
        deleteDoc, 
          doc, 
            getDocs, 
              query, 
                where 
                } from 'firebase/firestore';

                export const addItem = (userId, item) => {
                  return addDoc(collection(db, 'users', userId, 'pantryItems'), item);
                  };

                  export const updateItem = (userId, itemId, updatedData) => {
                    const itemRef = doc(db, 'users', userId, 'pantryItems', itemId);
                      return updateDoc(itemRef, updatedData);
                      };

                      export const deleteItem = (userId, itemId) => {
                        const itemRef = doc(db, 'users', userId, 'pantryItems', itemId);
                          return deleteDoc(itemRef);
                          };

                          export const getItems = async (userId) => {
                            const itemsRef = collection(db, 'users', userId, 'pantryItems');
                              const snapshot = await getDocs(itemsRef);
                                return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                                };

                                export const searchItems = async (userId, searchTerm) => {
                                  const itemsRef = collection(db, 'users', userId, 'pantryItems');
                                    const q = query(itemsRef, where('name', '>=', searchTerm), where('name', '<=', searchTerm + '\uf8ff'));
                                      const snapshot = await getDocs(q);
                                        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                                        };