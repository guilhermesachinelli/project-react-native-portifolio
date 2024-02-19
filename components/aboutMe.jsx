import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function AboutMe() {
    return (
        <View style={styles.aboutme}>
            <Text style={styles.title}>Sobre mim</Text>
            <Text style={styles.text}>Desenvolvendo interfaces e APIs com Javascript</Text>
            <Text style={styles.text}>🎓Cursando Analise e Desenvolvimento de sistemas no SENAI</Text>
            <Text style={styles.text}>🚀Aprofundando no React Native</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    aboutme: {
        margin: 20,
        padding: 20,
        alignItems: 'center',
        display: 'flex',
        flexdirection: 'column',
        borderRadius: 10,
        backgroundColor: '#121214',
    },
    title: {
        color: '#f5f5f5',
        marginBottom: 12,
        fontSize: 30,
        padding: 10,
        textAlign: 'center',
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#fb75fb',
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