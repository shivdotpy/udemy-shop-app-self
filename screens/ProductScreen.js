import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { ITEMS } from '../data/shop_data';
import ProductFeatureTile from '../components/ProductFeatureTile';
import { Colors } from '../constants/Colors';

const ProductScreen = (props) => {
	const productId = props.navigation.getParam('id');

	const product = ITEMS.find((item) => {
		return item.id === productId;
	});

	return (
		<ScrollView style={styles.screen}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: product.image }} style={styles.image} />
			</View>
			<View style={styles.titleHeader}>
				<Text numberOfLines={2} style={styles.titleHeaderText}>
					{product.name}
				</Text>
			</View>
			<View style={styles.priceContainer}>
				<Text style={styles.priceText}>
					₹ {product.price} <Text style={styles.discountText}>(20% OFF)</Text>
				</Text>
				<Text style={styles.taxText}>Inclusive of all taxes</Text>
			</View>
			<View style={styles.featureContainer}>
				<Text style={styles.featureHeading}>Features:</Text>
				{product.detail.map((detailItem, index) => {
					return <ProductFeatureTile title={detailItem} key={index} />;
				})}
			</View>
			<View style={styles.btnContainer}>
			<TouchableOpacity style={styles.btn}>
				<Text style={styles.btnText}>Add to Cart</Text>
			</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

ProductScreen.navigationOptions = {
	title: 'Product Detail',
	headerStyle: {
		backgroundColor: Colors.primary
	},
	headerTitleStyle: {
		fontWeight: 'bold',
		color: Colors.whiteSecondary
	}
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	imageContainer: {
		height: 450
	},
	image: {
		flex: 1,
		height: null,
		width: '100%',
		resizeMode: 'stretch'
	},
	titleHeader: {
		padding: 10
	},
	titleHeaderText: {
		fontSize: 18,
		fontWeight: '600'
	},
	priceContainer: {
		paddingHorizontal: 10
	},
	priceText: {
		fontSize: 16,
		fontWeight: '700'
	},
	discountText: {
		color: 'red'
	},
	taxText: {
		color: 'green',
		fontSize: 15
	},
	featureContainer: {
		padding: 10
	},
	featureHeading: {
		fontSize: 20
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 5
	},
	btn: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		maxWidth: '50%',
		backgroundColor: Colors.primary,
		padding: 10,
		borderRadius: 3
	},
	btnText: {
		color: Colors.whiteSecondary,
		fontSize: 17,
		fontWeight: "700"
	}
});

export default ProductScreen;
