import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CheckedInCard from '../../components/CheckedInCard';
import api from '../../services/index';
import {AuthContext} from '../../context/auth';

export default function Home() {
  const {user} = useContext(AuthContext);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const {handleLogout} = useContext(AuthContext);

  const handleCheckIn = async () => {
    console.log('check-in');
    try {
      const response = await api.checkIn(user.id);
      console.log(response.data);
      setIsCheckedIn(true);
    } catch (error) {
      console.log('error');
    }
  };

  const handleCheckOut = async () => {
    console.log('check-out');
    try {
      const response = await api.checkOut(user.id);
      console.log(response.data);
      setIsCheckedIn(false);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.profilePicture}>
            <Image
              source={require('../../assets/profile.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerMenu}>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.squad}>{user.squad}</Text>
          </View>
          <View style={styles.menuItems}>
            <TouchableOpacity
              style={[styles.checkInButton, styles.centerButton]}>
              <View style={styles.checkInButton}>
                <CheckedInCard />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.checkInButton,
                styles.centerButton,
                isCheckedIn ? styles.disabledButton : null,
              ]}
              onPress={handleCheckIn}
              disabled={isCheckedIn}>
              <Text style={styles.checkInButtonText}>Check-in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.checkOutButton,
                styles.centerButton,
                !isCheckedIn ? styles.disabledButton : null,
              ]}
              onPress={handleCheckOut}
              disabled={!isCheckedIn}>
              <Text style={styles.checkOutButtonText}>Check-out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4B548',
    opacity: 0.9,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#A4B548',
    opacity: 0.9,
  },
  button: {
    backgroundColor: '#51C1C5',
    padding: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  profile: {
    alignItems: 'center',
    marginTop: -60,
    marginBottom: 16,
  },
  profilePicture: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  containerMenu: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 16,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  squad: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  checkInButton: {
    backgroundColor: '#A4B548',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 16,
  },
  checkInButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  checkOutButton: {
    backgroundColor: '#ed574a',
    borderWidth: 1,
    borderColor: '#333',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  checkOutButtonText: {
    color: '#333',
    fontSize: 16,
  },
  menuItems: {
    marginTop: 16,
  },
  centerButton: {
    alignSelf: 'center',
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: '#ccc',
  },
});
