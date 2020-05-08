import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Colors} from '../constants/Colors'

const ProductFeatureTile = (props) => {
	return (
		<View key={props.key} style={styles.tileContainer}>
			<Text style={styles.tileText}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	tileContainer: {
		padding: 7,
		borderWidth: 0.5,
		borderRadius: 5,
		marginTop: 10
	},
	tileText: {
		fontSize: 15
	}
});

export default ProductFeatureTile;
