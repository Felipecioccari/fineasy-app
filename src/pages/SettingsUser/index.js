// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import api from '../../services/index';

// const SettingsUser = () => {
//   const [checkedInUsers, setCheckedInUsers] = useState([]);

//   const fetchUserId = async (id) => {
//     try {
//       const response = await api.getUserById(id);
//       const data = response.data.data.filter(user => user.checkedIn);
//       setCheckedInUsers(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchCheckedInUsers();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {checkedInUsers.length === 0 ? (
//         <Text style={styles.name}>No users checked in.</Text>
//       ) : (
//         checkedInUsers.map(user => (
//           <View key={user.id} style={styles.card}>
//             <Text style={styles.name}>{user.name}</Text>
//             <Text style={styles.email}>{user.email}</Text>
//             <Text style={styles.email}>{user.squad}</Text>
//           </View>
//         ))
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#333',
//   },
//   email: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#666',
//   },
//   checkinTime: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

// export default CheckinDetails;
