import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import axios from "axios";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DetailsScreen = (props) => {
  const [event, setEvent] = useState([]);
  const [cats, setCats] = useState([]);
  const [authors, setAuthors] = useState([]);
  let pic = props.route.params.pic;
  useEffect(() => {
    getEventDetails();
  }, []);

  const getEventDetails = () => {
    axios
      .post("http://private-anon-60a3386cb7-aabf.apiary-mock.com/event-details")
      .then((res) => {
        console.log("after api call", res.data);
        if (res.data.header.error == 0) {
          let eventDet = res.data.body;
          setEvent(eventDet);
          setCats(event.categories);
          setAuthors(event.authors);
        } else {
          console.log("Could not get data");
        }
      });
  };
  console.log(pic);
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.bg}
        source={{
          uri: pic,
        }}
      >
        <ScrollView>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.heading}>{event.title}</Text>
              <View style={styles.time}>
                <MaterialCommunityIcons
                  name="clock-time-four-outline"
                  style={{ paddingTop: 4, paddingRight: 2, color: "white" }}
                />
                <Text style={{ color: "white" }}>{event.time_formatted}</Text>
              </View>
              <View style={styles.time}>
                <MaterialCommunityIcons
                  name="calendar"
                  style={{ paddingTop: 4, paddingRight: 2, color: "white" }}
                />
                <Text style={{ color: "white" }}>{event.date_formatted}</Text>
              </View>
            </View>
            <View style={styles.details}>
              <View
                style={{
                  color: "#000000",
                  marginLeft: 2,
                  flex: 1,
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    borderColor: "#7e8694",
                    borderRadius: 4,
                    borderWidth: 1.5,
                    marginRight: 10,
                    fontSize: 9,
                    fontWeight: "bold",
                    padding: 5,
                  }}
                >
                  COMIC CORNER
                </Text>
                <Text
                  style={{
                    borderColor: "#7e8694",
                    borderRadius: 4,
                    borderWidth: 1.5,
                    fontSize: 9,
                    fontWeight: "bold",
                    padding: 5,
                  }}
                >
                  EDUCATIONAL
                </Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Audience</Text>
                <Text>{event.audience_body}</Text>
              </View>
              <View
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "#CED0CE",
                  marginLeft: 0,
                  marginTop: 16,
                }}
              />
              <View>
                <Text style={{ fontWeight: "bold", paddingTop: 10 }}>
                  Event Details
                </Text>
                <Text>{event.event_details_body}</Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  REGISTER INTEREST
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignSelf: "center",
                  paddingTop: 20,
                }}
              >
                <MaterialCommunityIcons
                  name="calendar"
                  style={{ paddingTop: 4, paddingRight: 2, color: "#57bdb6" }}
                />
                <Text
                  style={{
                    color: "#57bdb6",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  ADD TO CALENDAR
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "left",
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 22,
              }}
            >
              Authors
            </Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View>
                <Image
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 8,
                    marginLeft: 20,
                  }}
                  source={{
                    uri: "https://i.ibb.co/TKvT2bj/image-13-3.png",
                  }}
                />
                <Text
                  style={{
                    color: "#000",
                    fontSize: 10,
                    fontWeight: "bold",
                    textAlign: "left",
                    paddingBottom: 10,
                    paddingTop: 10,
                    paddingLeft: 22,
                  }}
                >
                  Aaliyah Amani
                </Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 8,
                    marginLeft: 20,
                  }}
                  source={{
                    uri: "https://i.ibb.co/L5gtSPL/image-13-1.png",
                  }}
                />
                <Text
                  style={{
                    color: "#000",
                    fontSize: 10,
                    fontWeight: "bold",
                    textAlign: "left",
                    paddingBottom: 10,
                    paddingTop: 10,
                    paddingLeft: 22,
                  }}
                >
                  Gaurav Sinha
                </Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 8,
                    marginLeft: 20,
                    marginRight: 10,
                  }}
                  source={{
                    uri: "https://i.ibb.co/YbPNm06/image-13-2.png",
                  }}
                />
                <Text
                  style={{
                    color: "#000",
                    fontSize: 10,
                    fontWeight: "bold",
                    textAlign: "left",
                    paddingBottom: 10,
                    paddingTop: 10,
                    paddingLeft: 22,
                  }}
                >
                  Mary B. Langley
                </Text>
              </View>
            </View>
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
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    // flex: 1,
    resizeMode: "stretch", // or 'stretch',
  },
  titleContainer: {
    padding: 20,
  },
  heading: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    paddingBottom: 5,
  },
  time: {
    flex: 1,
    flexDirection: "row",
  },
  details: {
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginLeft: "10%",
    marginHorizontal: "10%",
    width: "88%",
    height: "55%",
    padding: "5%",
  },
  btn: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#57bdb6",
    padding: 10,
    marginTop: 24,
    marginBottom: 0,
    marginRight: 30,
    height: 38,
    width: 250,
    borderRadius: 20,
    elevation: 30,
  },
  signUpBtn: {
    alignItems: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 24,
    marginBottom: 34,
    height: 48,
    width: 280,
    borderRadius: 10,
    borderColor: "#57bdb6",
    borderWidth: 3,
    marginLeft: 20,
  },
});

export default DetailsScreen;
