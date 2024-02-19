import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Skills from './components/skills';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageAndName}>
          <Image source={require('./assets/a.jpg')}
            style={{ width: 100, height: 100 }} />
          <View>
            <Text style={styles.color}>Guilherme Godoy</Text>
            <Text style={styles.subtittle}>Desenvolvedor Full Stack</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AboutMe />
        <Skills />
        <Projects />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#09090A'
  },
  header: {
    backgroundColor: '#121214',
    padding: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fb75fb',
  },
  imageAndName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  color: {
    color: '#f5f5f5',
    padding: 10,
    fontSize: 30,
  },
  subtittle: {
    color: '#f5f5f5',
    fontSize: 15,
    padding: 12,
    marginTop: -20
  },
});