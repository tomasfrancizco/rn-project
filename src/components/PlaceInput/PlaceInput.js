import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const placeInput = (props) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={props.placeName}
      onChangeText={props.placeNameChangedHandler}
      placeholder="An awesome place"
      style={styles.placeInput}
    />
    <Button
      title="Add"
      style={styles.placeButton}
      onPress={props.placeSubmitHandler}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%",
    marginTop: 10
  },
  placeButton: {
    width: "30%"
  }
})

export default placeInput;
