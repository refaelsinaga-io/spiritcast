import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function FAQ({ navigation }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqData = [
        {
            question: "What is the ScoreSync ?",
            answer: "The ScoreSync provides real-time updates on scores, statistics, and news for your favorite sports teams. Stay informed with instant notifications and in-depth analysis."
        },
        {
            question: "How do I download the ScoreSync ?",
            answer: "You can download the ScoreSync from the App Store for iOS devices or Google Play Store for Android devices. Simply search for 'ScoreSync' and click install."
        },
        {
            question: "Is the Live Score App free to use?",
            answer: "Yes, the basic version of the app is completely free to use. We also offer premium features with additional benefits for a small subscription fee."
        },
        {
            question: "How do I set up notifications for my favorite teams?",
            answer: "Go to Settings > Notifications, then select your favorite teams. You can customize when you want to receive notifications for goals, game starts, and final scores."
        },
        {
            question: "Can I customize the sports and teams I follow?",
            answer: "Absolutely! You can personalize your experience by selecting your favorite sports and teams in the app settings. This ensures you only see the content that matters to you."
        },
        {
            question: "How often are the scores updated?",
            answer: "Scores are updated in real-time during live games. Our system refreshes every few seconds to ensure you have the most current information."
        },
        {
            question: "What sports are covered in the Live Score App?",
            answer: "We cover a wide range of sports including football, basketball, baseball, hockey, soccer, tennis, and many more. Check the app for the complete list of supported sports."
        },
        {
            question: "Can I watch live games on the Live Score App?",
            answer: "The app provides live scores and updates, but does not stream live games. However, we provide links to official broadcasters where you can watch the games."
        }
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>FAQ</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Title Section */}
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Frequently Asked Questions (FAQ)</Text>
                    <Text style={styles.subtitle}>
                        An FAQ or Frequently Asked Questions is a section for helps users find information quickly without needing to contact customer support
                    </Text>
                </View>

                {/* FAQ List */}
                <View style={styles.faqList}>
                    {faqData.map((item, index) => (
                        <View key={index} style={styles.faqItem}>
                            <TouchableOpacity
                                style={styles.faqQuestion}
                                onPress={() => toggleExpand(index)}
                            >
                                <Text style={styles.questionText}>{item.question}</Text>
                                <Ionicons
                                    name={expandedIndex === index ? "chevron-up" : "chevron-down"}
                                    size={20}
                                    color="#666"
                                />
                            </TouchableOpacity>
                            {expandedIndex === index && (
                                <View style={styles.faqAnswer}>
                                    <Text style={styles.answerText}>{item.answer}</Text>
                                </View>
                            )}
                        </View>
                    ))}
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
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    content: {
        flex: 1,
    },
    titleSection: {
        paddingHorizontal: 20,
        paddingVertical: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    faqList: {
        paddingHorizontal: 20,
        paddingBottom: 24,
    },
    faqItem: {
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    faqQuestion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    },
    questionText: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        color: '#000',
        marginRight: 12,
    },
    faqAnswer: {
        paddingBottom: 16,
    },
    answerText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
});
