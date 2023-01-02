import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Box, Center, NativeBaseProvider, ScrollView, Text } from 'native-base';
import { BottomNavigation, StackNavigation } from './src/routes/Routes';
// import WithReactNavigation from './src/screens/Test/example';


export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar style="dark" />
        {/* <WithReactNavigation /> */}
        <StackNavigation />
      </NativeBaseProvider>
    </NavigationContainer >
  )
}