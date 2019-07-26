import React from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableHighlight,
} from 'react-native';
import firebase from 'firebase';

class SignUpScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    // SignUp
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log('success', user);
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          placeholder="Email address"
          autoCapitalize="none"
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={this.state.password}
          autoCapitalize="none"
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#C70f66"
          onPress={() => { this.handleSubmit.bind(this); }}
        >
          <Text>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
});

export default SignUpScreen;
