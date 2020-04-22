import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  TouchableNativeFeedback,
} from "react-native";


// Card to display the events in the EventCategoryScreen
// Similar to EventsHomeCard but contains more information (time and location)
// and differrent styling
const EventCategoryCard = (props) => {
  let TouchablePlatformSpecific =
    Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;

  return (
    <TouchablePlatformSpecific
      onPress={() => {
        props.pressAction(props.id);
      }}
    >
        {/* Event Image */}
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: props.image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Event Details */}
        <View style={styles.textContainer}>

            {/* Title */}
          <Text style={styles.eventName}>{props.title}</Text>
         {/* Date, Time, and Location */}
          <View >
            {/* First Row of information (date and time) */}
            <View style={styles.firstRow}>
                {/* Date Conatiner*/}
                <View style={styles.infoContainer}>
                    <View style={styles.iconContainer}>
                    <Image
                        style={styles.image}
                        source={require("../images/calendar.png")}
                    />
                    </View>
                    <Text style={styles.text}>{props.date}</Text>
                </View>

                {/* Time Container*/}
                <View style={styles.infoContainer}>
                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.image}
                            source={require("../images/clock.png")}
                        />
                    </View>
                    <Text style={styles.text}>{props.time}</Text>
                </View>
            </View>

            {/* Second Row of information (location) */}
            <View>
                {/* Location container */}
                <View style={styles.infoContainer}>
                        <View style={styles.iconContainer}>
                        <Image
                            style={styles.image}
                            source={require("../images/place.png")}
                        />
                        </View>
                        <Text style={styles.text}>{props.location}</Text>
                    </View>
                </View>
            </View>

        </View>
      </View>
    </TouchablePlatformSpecific>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.87,
    height: 270,
    borderRadius: 2,
    backgroundColor: "#ffffff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 10
  },

  imageContainer: {
    width: "100%",
    height: 150,
    marginBottom: 16,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    shadowRadius: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 7,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    marginLeft: 30,
    paddingVertical: 10
  },

  eventName: {
    fontSize: 18,
    fontFamily: "nunito-semibold",
    marginBottom: 5,
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    fontFamily: "nunito-light",
  },

  iconContainer: {
    width: 15,
    height: 15,
    marginRight: 8,
  },

  firstRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginRight: '15%',
      paddingVertical: 5
      },

  
});

export default EventCategoryCard;
