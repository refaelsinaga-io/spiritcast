import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const handleLogout = () => {
        // Temporary dummy logout - just log for now
        console.log('Logout clicked - nanti implement logout logic disini');
        // TODO: implement actual logout with context/async storage
        // Nanti akan ubah isLoggedIn state di RootNavigation via context
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image
                        source={{ uri: 'https://lh3.googleusercontent.com/ogw/AF2bZyj2fNf8z4zFdN_JxNXl7NTdiUYDb4Dz6QlrVD77CoX8TA=s64-c-mo' }}
                        style={styles.avatar}
                    />
                    <View style={styles.greeting}>
                        <Text style={styles.helloText}>Hello</Text>
                        <Text style={styles.userName}>Refael Sinaga!</Text>
                    </View>
                </View>

                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="scan-outline" size={24} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} onPress={handleLogout}>
                        <Ionicons name="log-out-outline" size={24} color="#4CAF50" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Hero */}
                <View style={styles.heroSection}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800' }}
                        style={styles.heroImage}
                    />
                    <View style={styles.heroOverlay}>
                        <Text style={styles.heroLabel}>Ayat Hari Ini</Text>
                        <Text style={styles.heroVerse}>Yesaya 12:2 TB</Text>
                        <Text style={styles.heroText}>
                            Sungguh, Allah itu keselamatanku; aku percaya dengan tidak gementar, sebab TUHAN ALLAH itu kekuatanku dan mazmurku, Ia telah menjadi keselamatanku."
                        </Text>
                    </View>
                </View>

                {/* Blog */}
                <View style={styles.blogSection}>
                    <TouchableOpacity style={styles.blogCard}>
                        <View style={styles.blogContent}>
                            <View style={styles.blogHeader}>
                                <Ionicons name="volume-high-outline" size={16} color="#666" />
                                <Text style={styles.blogCategory}>Penuntun Alkitab</Text>
                            </View>
                            <Text style={styles.blogTitle}>Kembangkan ritme renungan</Text>
                            <View style={styles.blogMeta}>
                                <Ionicons name="play" size={12} color="#666" />
                                <Text style={styles.blogDuration}>2-5 mnt</Text>
                            </View>
                        </View>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' }}
                            style={styles.blogImage}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.blogCard}>
                        <View style={styles.blogContent}>
                            <View style={styles.blogHeader}>
                                <Ionicons name="book-outline" size={16} color="#666" />
                                <Text style={styles.blogCategory}>Penuntun Doa</Text>
                            </View>
                            <Text style={styles.blogTitle}>Mulailah percakapan bersama Tuhan.</Text>
                            <View style={styles.blogMeta}>
                                <Ionicons name="play" size={12} color="#666" />
                                <Text style={styles.blogDuration}>4-6 mnt</Text>
                            </View>
                        </View>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400' }}
                            style={styles.blogImage}
                        />
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    greeting: {
        justifyContent: 'center',
    },
    helloText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
    },
    // Hero Section
    heroSection: {
        marginHorizontal: 20,
        marginBottom: 24,
        borderRadius: 16,
        overflow: 'hidden',
        height: 380,
    },
    heroImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    heroOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 20,
        justifyContent: 'flex-end',
    },
    heroLabel: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 4,
    },
    heroVerse: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    heroText: {
        color: '#fff',
        fontSize: 15,
        lineHeight: 22,
    },
    // Blog Section
    blogSection: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    blogCard: {
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
    blogContent: {
        flex: 1,
        marginRight: 12,
    },
    blogHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    blogCategory: {
        fontSize: 13,
        color: '#666',
        marginLeft: 6,
    },
    blogTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
        lineHeight: 22,
    },
    blogMeta: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    blogDuration: {
        fontSize: 12,
        color: '#666',
        marginLeft: 4,
    },
    blogImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
});
