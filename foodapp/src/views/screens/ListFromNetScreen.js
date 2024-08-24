import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import COLORS from "../../consts/colors";

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [someError, setSomeErrors] = useState("");
  const [food, setFood] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function fetchFood() {
    await fetch("http://10.0.2.2:8080/rest/foodservice/readfood") //Function returns a value, which is a parameter
      .then((parameter) => parameter.json()) //to the next part (parameter). And parameter.json() returns a value, which is a parameter
      .then((anotherParameter) => setFood(anotherParameter)); //to the next (anotherParameter), which is set to movies
  }

  /* To add delete function in the display
  const deleteItem = async (id) => {
    const response = await fetch(
      "http://10.0.2.2:8080/rest/foodservice/deletefood/" + id,
      {
        method: "DELETE",
      }
    );
    fetchFood();
  };
  */
  //This is called every time the view is rendered
  //The new calls of fetchData (and others) must be stopped somehow, because in
  //those methods are statevariables set, which cause a new re-render.
  useEffect(() => {
    if (isLoading == true) {
      setLoading(false);

      fetchFood();
    }
  });

  //If the 'fetch' is not ready yet, an activityindicator is shown
  if (isLoading == true) {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }
  //If errors
  else if (hasError) {
    return (
      <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
        <Text>{hasError}</Text>
        <Text>{"" + someError}</Text>
      </View>
    );
  }
  //Otherwise the list is shown
  else {
    return (
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            fontSize: 20,
            color: "black",
            fontWeight: "bold",
            marginLeft: 120,
          }}
        >
          list Of Food Items..
        </Text>
        <FlatList
          data={food}
          renderItem={({ item }) => (
            /* to delte item with touch
            <TouchableOpacity
              activeOpacity={0.5}
              onLongPress={() => deleteItem(item.id)}
            >*/
            <View style={styles.listItem}>
              {/* <Text>{item.id}) {item.title}, {item.releaseYear}</Text> */}
              <Text style={{ fontSize: 20, color: COLORS.white }}>
                {item.id}) {item.fname}, € {item.fnumber}
              </Text>
            </View>
            /* closing of touchable opacity
            </TouchableOpacity>
            */
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 4,
    borderColor: "pink",
    backgroundColor: "grey",
    color: COLORS.white,
  },
});

export default App;
