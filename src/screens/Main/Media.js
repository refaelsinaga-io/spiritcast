import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../../styles/globalStyles';

export default function Media() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={globalStyles.headerTab}>
                <Text style={globalStyles.headerTabText}>Media Screen</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
});
