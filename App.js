import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNav from './Navigation/BottomTabNav'; 
import DrawerNav from './Navigation/DrawerNav';
export default function App() {
  return (
    <View style={styles.container}>
     
     <DrawerNav/>
     <BottomTabNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
