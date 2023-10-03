import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import api from '../../services/index';

const CheckinDetails = () => {
  const [checkedInUsers, setCheckedInUsers] = useState([]);

  const fetchCheckedInUsers = async () => {
    try {
      const response = await api.getAllUsers();
      const data = response.data.data.filter(user => user.checkedIn);
      setCheckedInUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCheckedInUsers();
  }, []);

  return (
    <View style={styles.container}>
      {checkedInUsers.map(user => (
        <View key={user.id} style={styles.userContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userContainer: {
    borderWidth: 1,
    borderColor: '#123',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  userEmail: {
    fontSize: 16,
    color: '#000',
  },
});

export default CheckinDetails;
