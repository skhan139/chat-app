import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, LogBox } from 'react-native';
 LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

 // import the screens
 import Start from './components/Start';
 import Chat from './components/Chat';

 // import Firestore
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

 // import react Navigation
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuiUy8wmOIBoAus1KmcwDzPCw9XRYFN64",
  authDomain: "chatapp-e262f.firebaseapp.com",
  projectId: "chatapp-e262f",
  storageBucket: "chatapp-e262f.appspot.com",
  messagingSenderId: "555249111471",
  appId: "1:555249111471:web:01c182c3cdeb2c8b915f5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app)

  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Start"
     >
       <Stack.Screen
         name="Start"
         component={Start}
        />
        <Stack.Screen
          name="Chat"
        >
            {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;