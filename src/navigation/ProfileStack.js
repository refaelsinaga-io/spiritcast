import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Main/Profile';
import FAQ from '../screens/Main/FAQ';
import HelpCenter from '../screens/Main/HelpCenter';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileMain" component={Profile} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
    </Stack.Navigator>
  );
}
