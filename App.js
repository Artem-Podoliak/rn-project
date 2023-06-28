import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen.jsx";

export default function App() {
  return <RegistrationScreen></RegistrationScreen>;
}
