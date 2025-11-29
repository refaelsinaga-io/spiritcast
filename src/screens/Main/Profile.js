import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.profileConName}>Refael Sinaga</Text>
                    <Text style={styles.profileConId}>SALEM-001</Text>
                    <Text style={styles.profileConEmail}>refaelsinaga.io@gmail.com</Text>
                </View>
                <View>
                    <Image source={{ uri: 'https://lh3.googleusercontent.com/ogw/AF2bZyj2fNf8z4zFdN_JxNXl7NTdiUYDb4Dz6QlrVD77CoX8TA=s64-c-mo' }} style={styles.profileConAvatar} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 16, }}>
                
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    profileConAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    profileConName: {
        fontSize: 18,
        fontWeight: 'bold', 
    },
    profileConId: {
        fontSize: 14,
        color: '#666',
    },
    profileConEmail: {
        fontSize: 14,
        color: '#666',
    },
});
