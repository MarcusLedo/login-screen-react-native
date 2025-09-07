import { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type btnFields = {
  color: string;
  text: string;
  icon: number;
};

class myBtn extends Component<btnFields> {
  render() {
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <View
            style={[
              styles.btn,
              {
                backgroundColor: this.props.color,
                borderColor: this.props.color,
              },
            ]}
          >
            <Image source={this.props.icon} style={styles.btnIcon} />
            <Text style={styles.btnText}>{this.props.text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    margin: 14,
    marginBottom: 1,
  },

  btn: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  btnText: {
    fontSize: 16,
    fontWeight: 600,
    color: "#fff",
  },

  btnIcon: {
    width: 18,
    height: 18,
    marginLeft: 8,
    marginRight: 8,
  },
});

export { myBtn };
