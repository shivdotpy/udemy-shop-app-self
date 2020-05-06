import { createStackNavigator } from 'react-navigation-stack';
import OrdersScreen from '../screens/OrdersScreen';

export const orderStack = createStackNavigator({
	orders: { screen: OrdersScreen }
});

