import React from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <TextInput style={style.memoEditInput} multiline="true" value="抹茶プリン" />
        <CircleButton name="check" onPress={() => { this.props.navigation.navigate('Home') ;}} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;
