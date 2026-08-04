import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          width: '90%',
        }}
        >
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>My App</Text>
        
        </View>
      </View>
       <View style={styles.section1}>
          <View style={styles.content_cards}>
            <View style={styles.card}>
              <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Titulo</Text>
                <Text style={{ fontSize: 14 }}>This is the content for Card 1</Text>
              </View>
            </View>

             <View style={styles.card}>
              <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Titulo</Text>
                <Text style={{ fontSize: 14 }}>This is the content for Card 1</Text>
              </View>
            </View>
              <View style={styles.card}>
              <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Titulo</Text>
                <Text style={{ fontSize: 14 }}>This is the content for Card 1</Text>
              </View>
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
    width: "70%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#c0c3ce',

  },

  card: {
    flex: 1,
     flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 10,
    maxHeight: 100,
    borderRadius: 5,
    backgroundColor: '#fff'
  },

});
