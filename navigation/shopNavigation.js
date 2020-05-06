import { createStackNavigator } from 'react-navigation-stack';
import ShopScreen from '../screens/ShopScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';

export const shopStack = createStackNavigator({
	shop: { screen: ShopScreen },
	product: { screen: ProductScreen },
	cart: { screen: CartScreen }
});
