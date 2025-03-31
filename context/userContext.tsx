'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, firestore } from '../utils/init-firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  User,
  UserCredential,
} from 'firebase/auth';
import { upload_url, default_profile_image } from '../utils/constants';
import axios from 'axios';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { UserData } from '@/app/types';

interface UserContextType {
  currentUser: User | null;
  currentUserData: UserData | undefined;
  userLoading: boolean;
  registerUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  logoutUser: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (oobCode: string, newPassword: string) => Promise<void>;
  signInWithGoogle: () => Promise<UserCredential>;
  updateUserData: (data: Partial<UserData>) => Promise<void>;
  uploadProfileImage: (image: string) => Promise<{ success: any; data?: any, message?: any }>;
  updateUserProfilePassword: (newPassword: string) => Promise<void>;
  reauthenticateUser: (existingPassword: string) => Promise<UserCredential | undefined>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentUserData, setCurrentUserData] = useState<UserData | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const registerUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:3000/login',
    });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const resetPassword = (oobCode: string, newPassword: string) => {
    return confirmPasswordReset(auth, oobCode, newPassword);
  };

  const reauthenticateUser = async (existingPassword: string) => {
    if (!currentUser) {
      return;
    }

    const credentials = EmailAuthProvider.credential(
      currentUser.email!,
      existingPassword
    );
    return reauthenticateWithCredential(currentUser, credentials);
  };

  const updateUserProfilePassword = async (newPassword: string) => {
    if (!currentUser) {
      return;
    }

    return updatePassword(currentUser, newPassword);
  };

  const uploadProfileImage = async (image: string) => {
    try {
      const response = await axios.post(upload_url, { image });
      const { success, data } = response.data;
      return { success, data };
    } catch (error: any) {
      const { success, message } = error.response.data;
      return { success, message };
    }
  };

  const updateUserData = async (data: Partial<UserData>) => {
    if (!currentUser) {
      return;
    }

    const userDoc = doc(firestore, 'users', currentUser.uid);

    return setDoc(userDoc, {
      ...data,
      shipping: {
        ...(currentUserData?.shipping || {}),
        ...data.shipping,
      }
    } as UserData, { merge: true });
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    
    const userDoc = doc(firestore, 'users', currentUser.uid);

    getDoc(userDoc)
    .then(doc => {
      if (doc.exists()) {
        setCurrentUserData(doc.data() as UserData || null);
      }
    })
    .catch(() => {
      console.log('Error occured');
    })
  }, [currentUser]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        currentUserData,
        userLoading: loading,
        registerUser,
        loginUser,
        logoutUser,
        signInWithGoogle,
        forgotPassword,
        resetPassword,
        updateUserData,
        uploadProfileImage,
        updateUserProfilePassword,
        reauthenticateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};