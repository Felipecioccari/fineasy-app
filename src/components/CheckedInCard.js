import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../services/index';
import styles from '../styles/checkedInCard';

const CheckedInCard = () => {
  const navigation = useNavigation();
  const [checkedInCount, setCheckedInCount] = useState(0);

  const fetchCheckedInCount = async () => {
    try {
      const response = await api.getAllUsers();
      const count = response.data.data.filter(user => user.checkedIn).length;
      setCheckedInCount(count);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCheckedInCount();
    const intervalId = setInterval(fetchCheckedInCount, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePress = () => {
    navigation.navigate('CheckedInDetails');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>Usuários no escritório</Text>
      <Text style={styles.count}>{checkedInCount}</Text>
      <Text style={styles.subtitle}>Detalhes</Text>
    </TouchableOpacity>
  );
};

export default CheckedInCard;
