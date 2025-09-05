import { StyleSheet, Text, View, TextInput } from "react-native";
import { Component } from "react";

type inputFieldProps = {
  label: string;
  bottomText: string;
  placeHolder: string;
};

class inputField extends Component<inputFieldProps> {
  render() {
    return (
      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>{this.props.label}</Text>
          <TextInput
            style={styles.inputControl}
            placeholder={this.props.placeHolder}
          />
          <Text style={styles.bottomText}>{this.props.bottomText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 2,
  },

  input: {
    marginBottom: 24,
  },

  inputLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    marginLeft: 20,
  },

  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#3a86ff",
  },

  bottomText: {
    fontSize: 10,
    color: "#6c757d",
    marginLeft: 20,
  },
});

export { inputField };
