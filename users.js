import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://192.168.1.10:8081/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const renderUser = ({ item }) => (
    <View key={item.programme} style={styles.userCard}>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.programme}>Programme: {item.programme}</Text>
    </View>
  );

  return (
    <View style={styles.content}>
      <View style={styles.section}>
        <Text style={styles.header}>Uni Scholar Users</Text>
        <Text>This page displays all the users that are on Uni Scholar.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Users</Text>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by username"
            value={searchQuery}
            onChangeText={handleSearchChange}
          />
        </View>

        {loading ? (
          <Text>Loading users...</Text>
        ) : error ? (
          <Text>{error}</Text>
        ) : filteredUsers.length === 0 ? (
          <Text>No users found.</Text>
        ) : (
          <FlatList
            data={filteredUsers}
            renderItem={renderUser}
            keyExtractor={(item) => item.programme}
            style={styles.userList}
          />
        )}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  users: {
    marginTop: 20,
    position: 'relative', // Relative positioning
  },
  userList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Similar to grid gap
    marginTop: 20,
  },
  userCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
    textAlign: 'center',
    marginBottom: 20, // Space between cards
    width: '45%', // Responsive width, adjust as needed
  },
  username: {
    margin: 0,
    fontSize: 24, // Convert rem to px equivalent
    color: 'black',
  },
  programme: {
    fontSize: 16,
    color: '#555',
  },
});


export default Users;
