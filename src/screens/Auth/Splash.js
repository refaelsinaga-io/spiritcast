import { View, Image, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function Splash({ navigation }) {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace('Login');
		}, 3000);
	}, []);

  return (
		<View style={styles.container}>
			<Image
				source={{ uri: 'https://onvonic.com/assets/logo.png' }}
				style={styles.logo}
				resizeMode="contain"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ff00213d',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 160,
		height: 160,
	},
});
