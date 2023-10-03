import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/index';
import React, {createContext, useEffect, useState} from 'react';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadUser() {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser !== null) {
          setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    loadUser();
  }, []);

  // async function handleLogin(email, password) {
  //   try {
  //     const response = await api.loginUser(email, password);
  //     const user = response.data;
  //     console.log(user);
  //     await AsyncStorage.setItem('user', JSON.stringify(user));
  //     setUser(user);
  //     navigation.navigate('Home');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  async function handleLogin(email, password) {
    try {
      const response = await api.loginUser(email, password);
      const {token} = response.data;
      await AsyncStorage.setItem('token', token);
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogout() {
    await AsyncStorage.removeItem('user');
    setUser({});
    navigation.navigate('Welcome');
  }

  const handleSignUp = async (
    name,
    email,
    password,
    confirmPassword,
    squad,
  ) => {
    try {
      console.log(name, email, password, confirmPassword, squad);
      if (!password || password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }
      const newUser = await api.registerUser(name, email, password, squad);
      console.log('novo usuario');
      console.log(newUser);
      if (newUser) {
        const {token} = newUser;
        await AsyncStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
        navigation.navigate('Home');
      } else {
        throw new Error('Failed to register user');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{user, isLoading, handleLogin, handleLogout, handleSignUp}}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
