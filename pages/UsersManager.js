import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Text} from 'react-native';

import HomeScreen from './home';
import Login from './login';
import Register from './register';
import Profile from './profile';

const Stack = createStackNavigator();
// const UsersManager = StackNavigator({
//   Home: {screen: HomeScreen},
//   Login: {screen: Login},
//   Register: {screen: Register},
//   Profile: {screen: Profile},
// });

const UsersManager = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({navigation}) => ({
          title: 'Login',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{margin: 10, backgroundColor: 'orange', padding: 10}}>
              <Text style={{color: '#ffffff'}}>Home</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Welcome!'}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={({navigation}) => ({
          title: 'Register',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{margin: 10, backgroundColor: 'orange', padding: 10}}>
              <Text style={{color: '#ffffff'}}>Home</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
export default UsersManager;
