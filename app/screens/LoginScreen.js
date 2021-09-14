import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

const LoginScreen = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(true);

  let user = {
    email: email,
    password: password,
  };

  const login = () => {
    console.log("in Login", user);
    axios
      .post("http://192.168.18.209:5000/api/users/login", user)
      .then((res) => {
        console.log("after api call", res);
        setLoggedIn(true);
        props.navigation.navigate("Dashboard");
      })
      .catch((error) => {
        setLoggedIn(false);
      });
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.bg}
        source={require("../assets/transparent.png")}
      >
        <View style={styles.container}>
          <Text style={styles.heading}></Text>
          <MaterialIcons
            name="event"
            size={70}
            style={{ color: "#57bdb6", paddingBottom: 20 }}
          ></MaterialIcons>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            placeholder="Password"
          />
          <TouchableOpacity style={styles.signInButton} onPress={login}>
            <Text style={{ color: "white", fontSize: 17, paddingTop: 2 }}>
              LOG IN
            </Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 30, fontSize: 14 }}>
            {" "}
            Don't have an account?
          </Text>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text
              style={{ color: "#57bdb6", fontSize: 17, fontWeight: "bold" }}
            >
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 1,
    marginTop: 30,
    marginBottom: 10,
  },
  logo: {
    color: "#57bdb6",
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    height: 45,
    width: 300,
    margin: 12,
    paddingLeft: 6,
    borderRadius: 8,
    borderColor: "#bccfcd",
    borderWidth: 1,
  },
  signInButton: {
    alignItems: "center",
    backgroundColor: "#57bdb6",
    padding: 10,
    marginTop: 24,
    marginBottom: 0,
    height: 48,
    width: 280,
    borderRadius: 8,
    elevation: 30,
  },
  signUpBtn: {
    alignItems: "center",
    padding: 10,
    marginTop: 24,
    marginBottom: 34,
    height: 48,
    width: 280,
    borderRadius: 10,
    borderColor: "#57bdb6",
    borderWidth: 3,
  },
  bg: {
    width: "100%",
    height: "100%",
    // flex: 1,
    resizeMode: "stretch", // or 'stretch',
    justifyContent: "center",
  },
  pwBtn: {
    alignItems: "center",
    padding: 10,
    height: 48,
    width: 280,
  },
});

export default LoginScreen;
