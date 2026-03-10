import React, { useState } from "react";
import { TextInput, StyleSheet, View, FlatList } from "react-native";
import { Button, Chip } from "react-native-paper";

const ChipComponent = () => {

  const [text, setText] = useState("");
  const [chips, setChips] = useState([]);
 const addChip = () => {

  if (text.trim() === "") return;

  if (chips.length >= 5) {
    alert("You can add only 5 items");
    return;
  }


  if (chips.includes(text)) {
    alert("Item already added");
    return;
  }

  setChips([...chips, text]);
  setText("");
};
  const deleteChip = (id) => {
    setChips(chips.filter(item => item.id !== id));
  };
 if(chips.length > 5){
    alert("You can only add up to 5 chips.");
    return;
 }
  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      <Button mode="contained" onPress={addChip}>
        Add
      </Button>

      <FlatList
        data={chips}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipContainer}
        renderItem={({ item }) => (
          <Chip
            style={styles.chip}
            textStyle={styles.chipText}
            onClose={() => deleteChip(item.id)}
          >
            {item.label}
          </Chip>
        )}
      />

    </View>
  );
};

export default ChipComponent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8
  },
chip:{
    backgroundColor: "skyblue",
},
  chipContainer: {
    flexDirection: "row",
    gap: 10
  },
  chipText: {
    color: "white",
    fontWeight: "bold"
  }
});
