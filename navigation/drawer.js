import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { orderStack } from './orderNavigation';
import { shopStack } from './shopNavigation';
import { productStack } from './productNavigation';

const rootDrawerNavigator = createDrawerNavigator({
	shop: shopStack,
	products: productStack,
	orders: orderStack
});

export default createAppContainer(rootDrawerNavigator);
