import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import axios from "axios";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeScreen = (props) => {
  const [name, setName] = React.useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.blank}></Text>
        <MaterialIcons
          name="phone"
          size={70}
          styles={styles.logo}
        ></MaterialIcons>
        <Text style={styles.heading}>Welcome</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name"
        />
        <TouchableOpacity
          style={styles.greetingBtn}
          onPress={() => Alert.alert("Hello " + name)}
        >
          <Text style={{ color: "white", fontSize: 17, paddingTop: 2 }}>
            Greetings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => props.navigation.navigate("List")}
        >
          <Text style={{ color: "#000000", fontSize: 17 }}>Phone Book</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    //justifyContent: "center",
  },
  blank: {
    fontSize: 10,
    marginTop: "10%",
    marginBottom: 40,
  },
  heading: {
    fontSize: 36,
    marginTop: "10%",
    marginBottom: 40,
  },
  logo: {
    marginTop: 100,
    marginBottom: 0,
  },
  input: {
    height: 45,
    width: 300,
    margin: 12,
    paddingLeft: 6,
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 1,
  },
  greetingBtn: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10,
    marginTop: 24,
    marginBottom: 20,
    height: 48,
    width: 280,
    borderRadius: 8,
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 14 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    elevation: 30,
  },
  signUpBtn: {
    alignItems: "center",
    //backgroundColor: "#ffffff",
    padding: 10,
    marginTop: 24,
    marginBottom: 34,
    height: 48,
    width: 280,
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 2,
  },
  bg: {
    width: "100%",
    height: "100%",
    // flex: 1,
    resizeMode: "stretch", // or 'stretch',
    justifyContent: "center",

    // resizeMode: "cover",
    //justifyContent: "center"
  },
  // bg: {
  //   position:'absolute',
  //   bottom:0
  //   // flex: 1,
  //   // justifyContent: "center"
  // },
  pwBtn: {
    alignItems: "center",
    padding: 10,
    height: 48,
    width: 280,
  },
});

export default HomeScreen;
