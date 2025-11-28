import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // console.log('Login pressed');
        // Temporary redirect to home for prototype
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header with Image */}
            <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://onvonic.com/assets/logo.png' }}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>now</Text>
                    </View>
                </View>

                <Text style={styles.title}>Login Now</Text>
                <Text style={styles.subtitle}>
                    Please enter the details below to continue.
                </Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="johnstevens@email.com"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="******************"
                        placeholderTextColor="#999"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={showPassword ? "eye-outline" : "eye-off-outline"}
                            size={20}
                            color="#666"
                        />
                    </TouchableOpacity>
                </View>

                {/* Forgot Password */}
                <TouchableOpacity style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>

                {/* Sign Up Link */}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account! </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.signupLink}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingHorizontal: 24,
        marginTop: 40,
        marginBottom: 40,
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
        marginBottom: 24,
    },
    logo: {
        width: 200,
        height: 200,
    },
    badge: {
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: '#FF0050',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    badgeText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
    },
    form: {
        paddingHorizontal: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        height: 56,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#000',
    },
    eyeIcon: {
        padding: 4,
    },
    forgotContainer: {
        alignItems: 'flex-end',
        marginBottom: 32,
    },
    forgotText: {
        fontSize: 14,
        color: '#FF0050',
        fontWeight: '500',
    },
    loginButton: {
        backgroundColor: '#FF0050',
        borderRadius: 28,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupText: {
        fontSize: 14,
        color: '#666',
    },
    signupLink: {
        fontSize: 14,
        color: '#FF0050',
        fontWeight: 'bold',
    },
});
