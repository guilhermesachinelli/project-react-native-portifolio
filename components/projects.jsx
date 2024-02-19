import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";
export default function Projects() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "Respondidos",
            description: "Esse projeto teve a inspiração no Perguntados, usamos React, nextJS, Axios e js para fazer o front e o back, e o banco de dados foi o Firebase",
            image: require("../assets/project1.jpg"),
        },
        {
            id: 2,
            name: "Elden Ring Wiki",
            description: "Neste Projeto usamos React, Axios e js para fazer o front e o back, e consumimos a API do Elden Ring Wiki para trazer as informações do jogo para o usuário.",
            image: require("../assets/eldenring.jpg"),
        },
    ]);
    return (
        <View style={styles.projects}>
            <Text style={styles.title}>Projetos</Text>
            {projects.map((project) => (
                <View key={project.id}>
                    <Text style={styles.text}>{project.name}</Text>
                    <Text style={styles.text}>{project.description}</Text>
                    <Image source={project.image} style={styles.image} />
            
                </View>
            ))}
        </View>
    );
}
const styles = StyleSheet.create({
    projects: {
        alignItems: "center",
        padding: 20,
        margin: 40,
    },
    title: {
        color: "#4A9ED6",
        marginBottom: 12,
        fontSize: 30,
        padding: "0 10px",
        textAlign: "center",
        width: "89%",
        borderBottomWidth: 10,
        borderBottomColor: "#4A9ED6",
    },
    text: {
        color: "#f5f5f5",
        padding: 10,
        fontSize: 18,
        textAlign: "center",
        wordwrap: "break-word",
        margin: 20,
    },

    image: {
        width: 300,
        height: 100,
        
    },
});