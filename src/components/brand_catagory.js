import { View, Text, StyleSheet, Image} from "react-native";
import {elevation} from "../common/styles"

export default function CategoryItem(imageUrl, index){
    console.log(imageUrl.imageUrl)
    return(
        <View style={[styles.container, styles.elevation, index === 0 ? {marginLeft: 35} : {marginLeft: 15}]}>
           <Image src={imageUrl.imageUrl} alt="fdf"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: "#D3D3D3",
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    elevation,
    image: {
        width: 30,
        height: 30,
    },
});