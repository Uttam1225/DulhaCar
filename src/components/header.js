import {Text, View, StyleSheet} from "react-native";

export default function Header() {
    return(
        <View style={styles.container}>
            <Text style={styles.lightheader}>Grab your</Text>
            <Text style={styles.boldheader}>luxury car!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal: 25,
    },
    lightheader: {
        fontSize: 35, 
    },
    boldheader: {
        fontSize: 40,
        fontWeight: "bold",
    }
})