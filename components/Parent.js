import { View, Text } from "react-native";
import Child from "./Child";

export default function Parent({ name }) {
  return (
    <View>
      <Text>Ini Parent</Text>
      <Child name={name} />
    </View>
  );
}
