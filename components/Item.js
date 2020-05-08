import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';

const Item = (props) => {
	return (
		<TouchableOpacity style={styles.screen} onPress={props.onClick}>
			<ImageBackground source={{ uri: props.item.image }} style={styles.image}>
				<View style={styles.header}>
					<Text numberOfLines={1} style={styles.headerText}>
						{props.item.name}
					</Text>
				</View>
			</ImageBackground>
			<View style={styles.footerContainer}>
				<View style={styles.footerItem}>
					<Text style={styles.footerItemText}>View</Text>
				</View>
				<View style={styles.footerItem}>
					<Text style={styles.footerItemText}> ₹ {props.item.price}</Text>
				</View>
				<View style={styles.footerItem}>
					<Text style={styles.footerItemText}>+ Cart</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	screen: {
		height: 300,
		marginTop: 20,
		elevation: 1
	},
	image: {
		flex: 1,
		resizeMode: 'center',
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	header: {
		backgroundColor: 'rgba(0,0,0,0.6)',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
	headerText: {
		color: 'white',
		fontSize: 16
	},
	footerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 40,
		backgroundColor: Colors.primary,
		paddingHorizontal: 10
	},
	footerItemText: {
		color: Colors.whiteSecondary,
		fontSize: 16,
		fontWeight: 'bold'
	}
});

export default Item;
