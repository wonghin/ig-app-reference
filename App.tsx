import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Box, Center, NativeBaseProvider, ScrollView, Text } from 'native-base';
import { BottomNavigation, StackNavigation } from './src/routes/Routes';


export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar style="dark" />
        <StackNavigation />
      </NativeBaseProvider>
    </NavigationContainer >
  )
}