import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const DashboardScreen = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            props.navigation.navigate("List");
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 17, fontWeight: "bold" }}>
            EVENTS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "#57bdb6", fontSize: 17, fontWeight: "bold" }}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
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
  bg: {
    width: "100%",
    height: "280",
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

export default DashboardScreen;
