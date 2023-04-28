import { ScrollView, View, Text } from "react-native";
import { styles } from "../styles/styles";
import CardComponent from "../components/Card";

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>CHARACTERS: RICK AND MORTY</Text>
      <ScrollView style={styles.scroll}>
        <CardComponent />
      </ScrollView>
    </View>
  );
};

export default Home;
