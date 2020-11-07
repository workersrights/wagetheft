import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Platform,
	TouchableNativeFeedback,
} from "react-native";
import Colors from "../constants/Colors";
import ImportedData from "../data/FetchRightsData";

const LearnMoreItem = (props) => {
	const selectedLearnMore = ImportedData.getLearnMores().find(
		(learnmore) => learnmore.id === props.id
	);
	if (!selectedLearnMore) {
		return null;
	}

	let TouchablePlatformSpecific =
		Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;

	return (
		<TouchablePlatformSpecific onPress={props.onPress}>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						source={require("../images/question.png")}
						style={{ width: "100%", height: "100%" }}
					/>
				</View>
				<Text numberOfLines={2} style={styles.subrightstxt}>
					{selectedLearnMore.title}
				</Text>
			</View>
		</TouchablePlatformSpecific>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		width: "99%",
		height: 60,
		marginHorizontal: "0.5%",
		marginVertical: 5,
		paddingLeft: 10,
		paddingRight: 5,
		borderRadius: 8,
		backgroundColor: Colors.lightOrange,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},

	imageContainer: {
		width: 40,
		height: 40,
		marginRight: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	subrightstxt: {
		fontSize: 14,
		flex: 1,
	},
});

export default LearnMoreItem;
