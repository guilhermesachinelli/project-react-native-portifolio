import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from './app.module.css';
export default function App() {
  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <View className={styles.imageAndName}>
          <Image source={require('./assets/fotointro.jpg')}
            style={{ width: 100, height: 100 }}
            className={styles.logo} />
          <View>
            <Text className={styles.color}>Guilherme Godoy</Text>
            <Text className={styles.subtittle}>Desenvolvedor Full Stack</Text>
          </View>
        </View>
      </View>
      <View className={styles.aboutme}>
        <Text className={styles.title}>Sobre mim</Text>
        <Text className={styles.text}>Desenvolvendo interfaces e APIs com Javascript</Text>
        <Text className={styles.text}>🎓Cursando Analise e Desenvolvimento de sistemas no SENAI</Text>
        <Text className={styles.text}>🚀Aprofundando no React Native</Text>
      </View>
      <View className={styles.skills}>
          <Text className={styles.skill}>Skills</Text>
          <Text className={styles.text}>🚀HTML , CSS JS</Text>
          <Image source={require('./assets/fullstack.8e2f8efc.svg')} style={{ width: 300, height: 100 }} />
          <Text className={styles.text}>🚀React</Text>
          <Image source={require('./assets/react.cf087536.svg')} />
          <Text className={styles.text}>🚀React Native</Text>
          <Image source={require('./assets/native.226908f0.svg')} />
          <Text className={styles.text}>🚀Node.js</Text>
          <Image source={require('./assets/node.d4c95362.svg')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
