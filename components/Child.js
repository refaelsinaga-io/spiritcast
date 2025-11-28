import { View, Text } from "react-native";

export default function Child({ name }) {
  return (
    <View>
      <Text>Halo, {name}</Text>
    </View>
  );
}
