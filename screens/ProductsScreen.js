import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductsScreen = (props) => {
	useEffect(() => {
		props.navigation.openDrawer();
	}, []);
	return (
		<View>
			<Text>Products Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ProductsScreen;
