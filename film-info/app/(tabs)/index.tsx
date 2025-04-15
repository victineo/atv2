import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const movieDetails = {
    title: "Carros",
    description:
        "Relâmpago McQueen é um carro de corrida ambicioso que acaba preso em uma pequena cidade no meio do nada. Lá, ele aprende que há coisas mais importantes na vida do que troféus e fama.",
    rating: "⭐ 4.7 / 5",
    genre: "Animação, Aventura, Comédia, Esporte",
    duration: "1h 57min",
    image: "https://upload.wikimedia.org/wikipedia/pt/0/02/Cars_poster.jpg",
    cast: [
        { id: "1", name: "Owen Wilson", role: "Relâmpago McQueen (voz)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBkgtKzn7jnN9-0GhNHcZP1ovk3lIiLHsSY3FOJDdR13Qxhv4FvbAYrYKxMX65XcgdUbL5S4hea8uyCXa9XRgOw" },
        { id: "2", name: "Paul Newman", role: "Doc Hudson (voz)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Paul_Newman_-_1958.jpg/800px-Paul_Newman_-_1958.jpg" },
        { id: "3", name: "Larry the Cable Guy", role: "Mate (voz)", image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSQBS5LHBPrj00hU_QpczpYWRkvnxLuzL8YMYXS2kOwKkWT9Z5w39TOjoAdVICUbVVrxTRHFY05qiT2QS8"},
        { id: "4", name: "Bonnie Hunt", role: "Sally Carrera (voz)", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOLZZeWo9_4JIEGbxRyAwGbvNeqqTRdz602ODn0q3JzYZun-s21kSYBdGPmxzaQEtDfdo-8FUQh44JZy8a8gr-Yw" },
        { id: "5", name: "Tony Shalhoub", role: "Luigi (voz)", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYFVUB8mLkiSuAHWQTCx9xTsUJxgYeqIspbK9ETcmi3_kX4hIJImZVj1CWse2_JhoWbhUWUDmy5KMVQAWzYSS89w"}
    ],
};

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: movieDetails.image }} style={styles.bannerImage} />

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{movieDetails.title}</Text>
                <Text style={styles.description}>{movieDetails.description}</Text>
            </View>

            <View style={styles.detailsContainer}>
                <Text>Gênero: {movieDetails.genre}</Text>
                <Text>Duração: {movieDetails.duration}</Text>
                <Text>Avaliação: {movieDetails.rating}</Text>
            </View>

            <Text style={styles.sectionTitle}>Elenco Principal</Text>
            <FlatList
                data={movieDetails.cast}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.castItem}>
                        <Image source={{ uri: item.image }} style={styles.castImage} />
                        <View>
                            <Text style={styles.castName}>{item.name}</Text>
                            <Text style={styles.castRole}>{item.role}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    bannerImage: {
        width: "100%",
        height: 200,
        borderRadius: 8,
    },
    infoContainer: {
        backgroundColor: "#f9f9f9",
        padding: 10,
        borderRadius: 8,
        marginTop: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
        marginTop: 4,
    },
    detailsContainer: {
        backgroundColor: "#f1f1f1",
        padding: 10,
        borderRadius: 12,
        marginTop: 8,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 12,
    },
    castItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 8,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    castImage: {
        width: 50,
        height: 50,
        borderRadius: 999,
        marginRight: 8,
    },
    castName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    castRole: {
        fontSize: 14,
        color: "gray",
    }
});
