import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
  // static navigationOptions = ({navigation}) => ({
  //   title: 'Welcome',
  // });

  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>User Manager</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.btn1}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}
          style={styles.btn2}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    width: '95%',
  },
  btn2: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    width: '95%',
  },
  pageName: {
    margin: 10,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// AppRegistry.registerComponent('home', () => home);
