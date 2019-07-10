import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
          <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>黒澤ダイヤ</Text>
          <Text style={styles.memoDate}>2019/01/01</Text>
        </View>

          <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>小原鞠莉</Text>
          <Text style={styles.memoDate}>2019/06/13</Text>
        </View>

          <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>津島善子</Text>
          <Text style={styles.memoDate}>2019/07/13</Text>
        </View>

          <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>高海千歌</Text>
          <Text style={styles.memoDate}>2019/08/03</Text>
        </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    memoTitle: {
      fontSize: 18,
      marginBottom: 4,
    },
    memoDate: {
      fontSize: 12,
      color: '#a2a2a2',
    },
    memoList: {
      backgroundColor: '#eee',
      width: '100%',
      flex: 1,
    },
    memoListItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      backgroundColor: '#fff',
    },
  });

export default MemoList;
