import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './home';
import HistoryPage from './history';
import SignUpPage from './signup';
import LoginPage from './login';
import Users from './users';
import { UserProvider } from './usercontext';
import withNavbar from './withnavbar'; // Adjust the path as needed

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={withNavbar(HomePage)} />
        <Stack.Screen name="History" component={withNavbar(HistoryPage)} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Users" component={withNavbar(Users)} />
      </Stack.Navigator>
    </UserProvider>
  );
};

const WrappedApp = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);

export default WrappedApp;
