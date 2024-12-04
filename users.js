import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import styles from './styles';

const Users = () => {
  const [users, setUsers] = useState([]);  // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://192.168.1.4:8082/users');
        
        // Check the structure of the response
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('Expected an array of users');
          setUsers([]);  // Fallback in case the data is not an array
        }
        setLoading(false);
      } catch (err) {
        setError('Error fetching users');
        setUsers([]);  // Ensure users is an empty array on error
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Check if users is an array before calling filter
  const filteredUsers = Array.isArray(users) ? users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

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
        <Text style={styles.sectionHeader}>Uni Scholar Users</Text>
        <Text>This page displays all the users that are on Uni Scholar.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Users</Text>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by username"
            value={searchQuery}
            onChangeText={handleSearchChange}
          />
          <Icon name="search" size={20} color="#333" style={styles.searchIcon} />
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

export default Users;
