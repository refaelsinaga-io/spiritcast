import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
    const handleMenuPress = (menu) => {
        console.log(`${menu} pressed`);

        // Navigate to specific screens
        if (menu === 'FAQ') {
            navigation.navigate('FAQ');
        } else if (menu === 'Help Center') {
            navigation.navigate('HelpCenter');
        }
        // TODO: implement navigation for other menu items
    };

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

            <ScrollView style={styles.menuContainer}>
                {/* Account Settings */}
                <View style={styles.menuSection}>
                    <Text style={styles.sectionTitle}>Account Settings</Text>

                    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Personal Information')}>
                        <View style={styles.menuLeft}>
                            <Ionicons name="person-outline" size={20} color="#000" />
                            <Text style={styles.menuText}>Personal Information</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Password & Security')}>
                        <View style={styles.menuLeft}>
                            <Ionicons name="lock-closed-outline" size={20} color="#000" />
                            <Text style={styles.menuText}>Password & Security</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Notifications Preferences')}>
                        <View style={styles.menuLeft}>
                            <Ionicons name="notifications-outline" size={20} color="#000" />
                            <Text style={styles.menuText}>Notifications Preferences</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>
                </View>

                {/* Community Settings */}
                <View style={styles.menuSection}>
                    <Text style={styles.sectionTitle}>Community Settings</Text>

                    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Friends & Social')}>
                        <View style={styles.menuLeft}>
                            <Ionicons name="people-outline" size={20} color="#000" />
                            <Text style={styles.menuText}>Friends & Social</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Following List')}>
                        <View style={styles.menuLeft}>
                            <Ionicons name="list-outline" size={20} color="#000" />
                            <Text style={styles.menuText}>Following List</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>
                </View>

                {/* Other */}
                <View style={styles.menuSection}>
                    <Text style={styles.sectionTitle}>Other</Text>

                    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('FAQ')}>
                        <View style={styles.menuLeft}>
                            <Ionicons name="help-circle-outline" size={20} color="#000" />
                            <Text style={styles.menuText}>FAQ</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Help Center')}>
                        <View style={styles.menuLeft}>
                            <Ionicons name="information-circle-outline" size={20} color="#000" />
                            <Text style={styles.menuText}>Help Center</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
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
    menuContainer: {
        flex: 1,
    },
    menuSection: {
        marginTop: 24,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 13,
        color: '#999',
        marginBottom: 12,
        fontWeight: '600',
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    menuText: {
        fontSize: 15,
        color: '#000',
    },
});
