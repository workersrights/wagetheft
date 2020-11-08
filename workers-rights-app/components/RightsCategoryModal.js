import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import ModalCloseButton from "./ModalCloseButton.js";
import ImportedData from "../data/FetchRightsData";
import ButtonTemplate from "../components/ButtonTemplate";
import Modal from "react-native-modal";

/*
 * Functional Component Defintion: RightsCategoryModal
 *
 * This component outlines the look for the Modal presented
 * on the RightsScreen whenever a RightsCategoryTile is
 * tapped.
 *
 */

const RightsCategoryModal = (props) => {
	const selectedCategory = ImportedData.getRightsCategories().filter(
		(category) => category.id === props.categoryId
	)[0];

	return (
		<Modal
			isVisible={props.isVisible}
			onBackButtonPress={props.onCloseModal}
			onBackdropPress={props.onCloseModal}
		>
			<View style={styles.modal}>
				<View style={styles.modalContent}>
					<ModalCloseButton onCloseModal={props.onCloseModal} />
					<Text style={styles.title}>{selectedCategory.title}</Text>
					<Image
						source={selectedCategory.image}
						resizeMode="contain"
						style={styles.image}
					/>
					<Text style={styles.title}>{selectedCategory.subtitle}</Text>
					<Text style={styles.description}>{selectedCategory.description}</Text>

					<ButtonTemplate onPress={props.onAdvance} title="Read more →" />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modal: {
		width: "80%",
		height: "80%",
		maxHeight: 450,
		backgroundColor: Colors.lightOrange,
		borderRadius: 8,
		shadowOpacity: 0.25,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		elevation: 3,
		alignSelf: "center",
	},
	modalContent: {
		flex: 1,
		padding: 10,
		paddingTop: 30,
		alignItems: "center",
	},
	title: {
		paddingHorizontal: 10,
		fontWeight: "bold",
		fontSize: 16,
		textAlign: "center",
	},
	description: {
		padding: 10,
		textAlign: "center",
	},
	image: {
		width: "30%",
		height: "30%",
	},
});

export default RightsCategoryModal;
