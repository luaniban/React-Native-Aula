import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
       <View style={styles.section1}>
          <View style={styles.content_cards}>
            <View style={styles.card}>

            </View>

             <View style={styles.card}>

            </View>

             <View style={styles.card}>

            </View>
          </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
  
    height: 100,
    backgroundColor: '#fdf6f6',
    boxShadow: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

    section1: {
    flex: 1,
    backgroundColor: '#edeef1',
    alignItems: 'center',

  },

     content_cards: {
    gap: 20,
    flex: 1,
    flexDirection: 'wrap',
    margin: 20,
    width: 350,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#c0c3ce',

  },

  card: {
    flex: 1,
    maxHeight: 100,
    borderRadius: 5,
    backgroundColor: '#fff'
  },

});
