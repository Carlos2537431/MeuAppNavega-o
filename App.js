import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './src/Screens/DetailScreen';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import	LoginScreen from './src/Screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{headerStyle: styles.headerStyle}} />
                <Stack.Screen name="Home" component={HomeScreen}options={{headerShown:false}} />
                <Stack.Screen name="Details" component={DetailScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
    const styles = StyleSheet.create
    ({
        headerStyle: {
            backgroundColor: '#6A5ACD', // Roxo elegante
}
});
