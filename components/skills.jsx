import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
export default function Skills() {
    return (
        <View style={styles.skills}>
            <Text style={styles.skill}>Skills</Text>
            <Text style={styles.text}>🚀HTML , CSS JS</Text>
            <Image source={require('../assets/full.jpg')} style={{ width: 300, height: 100 }} />
            <Text style={styles.text}>🚀React</Text>
            <Image source={require('../assets/react.jpg')} style={{ width: 300, height: 100 }} />
            <Text style={styles.text}>🚀React Native</Text>
            <Image source={require('../assets/native.jpg')} style={{ width: 300, height: 100 }} />
            <Text style={styles.text}>🚀Node.js</Text>
            <Image source={require('../assets/node.jpg')} style={{ width: 300, height: 100 }} />
        </View>
    );
}
const styles = StyleSheet.create({
    skills: {
        alignItems: 'center',
        padding: 20
      },
    skill: {
        color: '#4A9ED6',
        marginBottom: '12px',
        fontSize: 20,
        padding: '0 10px',
        textAlign: 'center',
        width: '89%',
        borderBottomWidth: 10,
        borderBottomColor: '#4A9ED6',
      },
      text: {
        color: '#f5f5f5',
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        wordwrap: 'break-word',
        margin: 20
      }
});