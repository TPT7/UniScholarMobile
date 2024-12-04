import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import HomePage from './home';
import HistoryPage from './history';
import SignUpPage from './signup';
import LoginPage from './login';
import Navbar from './navbar';
import Users from './users';
import { UserProvider } from './usercontext';
import { useNavigationState } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  // Get the current route name to conditionally render the Navbar
  const currentRoute = useNavigationState((state) => state.routes[state.index].name);

  return (
    <UserProvider>
      <View style={styles.container}>
        {/* Conditionally render Navbar based on the current route */}
        {currentRoute !== 'Login' && currentRoute !== 'SignUp' && <Navbar />}

        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="History" component={HistoryPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
      </View>
    </UserProvider>
  );
};

const WrappedApp = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WrappedApp;
