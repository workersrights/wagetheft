import React from "react";
import {
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
} from "react-native";
import Colors from "../constants/Colors";

/*
 * Functional Component Defintion: RightsCategoryTile
 *
 * This component outlines the look of the RightsCategoryTile
 * that is presented on the RightsScreen.
 *
 */

const RightsCategoryTile = (props) => {
	return (
		<TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
			<View style={styles.container}>
				<Image style={styles.imageStyle} source={props.image} />
				<View style={styles.textContainer}>
					<Text>{props.title}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

var tileWidth = Dimensions.get("window").width * 0.38;
const styles = StyleSheet.create({
	gridItem: {
		width: tileWidth,
		height: tileWidth,
		margin: 10,
		backgroundColor: Colors.lightOrange,
		borderRadius: 15,
		shadowOpacity: 0.25,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		elevation: 3,
	},
	container: {
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	imageStyle: {
		position: "absolute",
		top: "20%",
		width: 80,
		height: 80,
	},
	textContainer: {
		position: "absolute",
		bottom: "10%",
	},
});

export default RightsCategoryTile;
