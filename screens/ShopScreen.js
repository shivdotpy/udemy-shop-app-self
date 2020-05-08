import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { ITEMS } from '../data/shop_data';
import Item from '../components/Item';
import { Colors } from '../constants/Colors';

const ShopScreen = (props) => {
	const onClickHandler = (id) => {
		props.navigation.navigate('product', {id: id})
	};
	return (
		<FlatList
			data={ITEMS}
			renderItem={({ item }) => <Item item={item} onClick={() => onClickHandler(item.id)} />}
			keyExtractor={(item) => item.id.toString()}
		/>
	);
};

ShopScreen.navigationOptions = {
	title: 'Amazing Shop',
	headerStyle: {
		backgroundColor: Colors.primary
	},
	headerTitleStyle: {
		fontWeight: 'bold',
		color: Colors.whiteSecondary
	}
};

export default ShopScreen;
