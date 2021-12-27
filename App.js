import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [color, setColor] = useState("red");
  const [buttonText, setButtonText] = useState("Change to blue");

  return (
    <View style={styles.container} testID="body">
      <TouchableOpacity
        onPress={() => {
          if (color === "red") {
            setColor("blue");
            setButtonText("Change to red");
          } else {
            setColor("red");
            setButtonText("Change to blue");
          }
        }}
        style={[styles.button, { backgroundColor: color }]}
        accessibilityLabel="Change button color to blue"
      >
        <Text style={styles.btnText}>{buttonText}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    color: "#fff",
  },
});
