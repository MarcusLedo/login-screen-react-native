import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  StatusBar,
} from "react-native";
import { inputField as MyInputField } from "./components/inputField";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <MyInputField
        label="Email"
        bottomText="Please enter a valid email. e.g: user@example.com"
        placeHolder="Enter your email"
      ></MyInputField>

      <MyInputField
        label="Password"
        bottomText={`Please enter a valid password:
- Minimum 8 characters, at least one special symbol ('@', '$', '&'), one uppercase letter`}
        placeHolder="Password"
      ></MyInputField>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },

  title: {
    fontSize: 25,
    padding: 2,
    marginLeft: 20,
    marginBottom: 20,
  },
});
