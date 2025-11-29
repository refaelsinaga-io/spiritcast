import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Home from '../screens/Main/Home';
import Event from '../screens/Main/Event';
import Media from '../screens/Main/Media';
import Comunity from '../screens/Main/Comunity';
import Profile from '../screens/Main/Profile';

const Tab = createBottomTabNavigator();

export default function MainTab() {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Media') {
                        iconName = focused ? 'calendar' : 'play-circle';
                    } else if (route.name === 'Event') {
                        iconName = focused ? 'newspaper' : 'calendar-outline';
                    } else if (route.name === 'Comunity') {
                        iconName = focused ? 'comunity' : 'people-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FF0050',
                tabBarInactiveTintColor: '#999',
                tabBarStyle: {
                    paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
                    paddingTop: 5,
                    height: 60 + (insets.bottom > 0 ? insets.bottom : 10),
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: '#e0e0e0',
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Media" component={Media} />
            <Tab.Screen name="Event" component={Event} />
            <Tab.Screen name="Comunity" component={Comunity} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
