import { View, Text } from 'react-native';
export default function Card({ item }) {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.id}</Text>
    </View>
  );
}
