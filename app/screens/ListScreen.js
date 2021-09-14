import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ListScreen = (props) => {
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getEventsApi();
  }, []);

  const getEventsApi = () => {
    axios
      .post("http://private-anon-60a3386cb7-aabf.apiary-mock.com/events")
      .then((res) => {
        console.log("after api call", res.data.header.error);
        if (res.data.header.error == 0) {
          let events = res.data.body.items;
          setResponse(events);
        } else {
          console.log("Could not get data");
        }
      });
  };
  console.log(response);

  const Item = ({ data }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.navigation.navigate("Details", { pic: data.featured_image });
      }}
    >
      <Image
        style={styles.eventImage}
        source={{
          uri: data.image,
        }}
      />
      <View style={styles.info}>
        <View style={styles.emailContainer}>
          <Text style={styles.date}>{data.date_formatted}</Text>
        </View>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.emailContainer}>
          {data.categories.map((cat, index) => (
            <Text style={styles.cats} key={index}>
              {cat.title}{" "}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.bookmarkContainer}>
        {data.is_favorite ? (
          <MaterialCommunityIcons
            name="bookmark-minus"
            size={30}
            style={styles.bookmark}
          />
        ) : (
          <MaterialCommunityIcons
            name="bookmark-minus-outline"
            size={30}
            style={styles.bookmark}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#ffffff" />
      <FlatList
        ListFooterComponent={
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          >
            <Text
              style={{ color: "#57bdb6", fontSize: 17, fontWeight: "bold" }}
            >
              LOGOUT
            </Text>
          </TouchableOpacity>
        }
        ListHeaderComponent={
          <View
            style={{
              backgroundColor: "#fff",
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 0,
            }}
          >
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setQuery(text);
              }}
              placeholder="Search"
            />
          </View>
        }
        data={response.filter((i) => {
          if (query == "") return i;
          else if (i.title.toLowerCase().includes(query.toLowerCase()))
            return i;
        })}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: "#CED0CE",
              marginLeft: 16,
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  eventImage: {
    width: 90,
    height: 70,
    borderRadius: 5,
    borderColor: "#b4bfd1",
    borderWidth: 2,
    flex: 0.3,
  },
  input: {
    height: 45,
    width: "95%",
    margin: 12,
    paddingLeft: 6,
    borderRadius: 15,
    borderColor: "#bccfcd",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 0,
    color: "black",
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginTop: 5,
  },
  bookmark: {
    marginLeft: "70%",
  },
  bookmarkContainer: {
    flex: 0.1,
    paddingRight: 20,
    paddingBottom: 50,
  },
  info: {
    marginLeft: 15,
    flex: 0.6,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  emailContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "#7e8694",
    marginLeft: 2,
  },
  cats: {
    fontSize: 11,
    color: "#000000",
    marginLeft: 2,
  },
  signUpBtn: {
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    marginTop: 24,
    marginBottom: 34,
    height: 48,
    width: 280,
    borderRadius: 10,
    borderColor: "#57bdb6",
    borderWidth: 3,
  },
});

export default ListScreen;
