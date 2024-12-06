import React from 'react';
import { View, Text, Button, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from './styles';

const WelcomePage = () => {
    const navigation = useNavigation(); 

    const handleGetStarted = () => {
        navigation.navigate('Login');  // Navigate to the Login page
    };

    return (
        <View style={styles.content}>
            <View style={styles.content}>
                <Image 
                    source={{ uri: 'https://img.icons8.com/ios/452/graduation-cap.png' }} 
                    style={styles.graduationCap} 
                />
                <Text style={styles.title}>Welcome to Uni Scholar</Text>
                <Text style={styles.description}>
                    Uni Scholar is the platform where students can ask questions, get answers, and share knowledge. Join us now!
                </Text>

                <Button 
                    title="Get Started" 
                    onPress={handleGetStarted} 
                    style={styles.getStartedButton}
                />
            </View>
        </View>
    );
};


export default WelcomePage;
