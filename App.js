import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Image } from 'react-native';
import Header from "./src/components/header"
import Search from './src/components/search';
import CategoryItem from './src/components/brand_catagory';

export default function App() {

  const brandCataoryList = [
    {
      imageUrl: "../assets/car_logos/mercedes.png"
    },
    {
      imageUrl: "../assets/car_logos/audi.png"
    },
    {
      imageUrl: "../assets/car_logos/tesla.png"
    },
  ];

  return (
      
    <View style={styles.container}>
      <Header />
      <Search />
      <Image source={require("./src/assets/car_logos/mercedes.png")} /> 
      <FlatList 
        data={brandCataoryList}
        renderItem={({ item, index }) => {
          return ( 
            <CategoryItem 
              imageUrl={item.imageUrl} 
              index={index} 
            /> 
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.imageUrl}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
