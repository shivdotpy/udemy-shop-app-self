import { createStackNavigator } from 'react-navigation-stack';
import ProductsScreen from '../screens/ProductsScreen';
import AddProductScreen from '../screens/AddProductScreen';

export const productStack = createStackNavigator({
	products: { screen:  ProductsScreen},
	addProduct: {screen: AddProductScreen}
});

