import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Home from '../screens/Main/Home';
import Event from '../screens/Main/Event';
import Blog from '../screens/Main/Blog';
import Profile from '../screens/Main/Profile';

const Tab = createBottomTabNavigator();

export default function MainTab() {
	return (
		<Tab.Navigator
		screenOptions={({ route }) => ({
			headerShown: false,
			tabBarIcon: ({ focused, color, size }) => {
			let iconName;

			if (route.name === 'Home') {
				iconName = focused ? 'home' : 'home-outline';
			} else if (route.name === 'Event') {
				iconName = focused ? 'calendar' : 'calendar-outline';
			} else if (route.name === 'Blog') {
				iconName = focused ? 'newspaper' : 'newspaper-outline';
			} else if (route.name === 'Profile') {
				iconName = focused ? 'person' : 'person-outline';
			}

			return <Ionicons name={iconName} size={size} color={color} />;
			},
			tabBarActiveTintColor: '#FF0050',
			tabBarInactiveTintColor: '#999',
			tabBarStyle: {
			paddingBottom: Platform.OS === 'ios' ? 20 : 10,
			paddingTop: 5,
			height: Platform.OS === 'ios' ? 85 : 65,
			backgroundColor: '#fff',
			borderTopWidth: 1,
			borderTopColor: '#e0e0e0',
			},
		})}
		>
		<Tab.Screen name="Home" component={Home} />
		<Tab.Screen name="Event" component={Event} />
		<Tab.Screen name="Blog" component={Blog} />
		<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
}
