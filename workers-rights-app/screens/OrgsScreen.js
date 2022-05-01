import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const OrgsScreen = ({ route }) => {
  const [org, setOrg] = useState({});

  useEffect(() => {
    setOrg(route.params.org);
  }, [route]);

  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: org.image }} style={styles.img} />
      </View>
      <Text>{org.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    width: "100%",
    height: 200,
  },
});

export default OrgsScreen;
