import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { inputField as MyInputField } from "./components/inputField";
import { myBtn as Btn } from "./components/myBtn";

const emailIcon = require("../assets/images/emailIconWhite.png");
const userIcon = require("../assets/images/personFFF.png");
const googleIcon = require("../assets/images/googleWhite.png");

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Kioku</Text>

      {/* input field view */}
      <View>
        <MyInputField
          label="Email"
          bottomText="Please enter a valid email. e.g: example@email.com"
          placeHolder="Enter your email"
        ></MyInputField>

        <MyInputField
          label="Password"
          bottomText={`Please enter a valid password:
- Minimum 8 characters, at least one special symbol ('@', '$', '&'), one uppercase letter`}
          placeHolder="Password"
        ></MyInputField>
      </View>

      {/* buttons view */}
      <View>
        <Btn color="black" text="Login with E-mail" icon={emailIcon}></Btn>
        <Btn color="#075eec" text="Login with Facebook" icon={userIcon}></Btn>
        <Btn color="#c1121f" text="Login with Google" icon={googleIcon}></Btn>
      </View>

      {/* footer */}
      <TouchableOpacity style={{ marginTop: "auto", marginBottom: 38 }}>
        <Text style={styles.footerText}>
          Don't Have an account?{" "}
          <Text style={{ color: "#075eec" }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
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

  footerText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#222",
    textAlign: "center",
  },
});
