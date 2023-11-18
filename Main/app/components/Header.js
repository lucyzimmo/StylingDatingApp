import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import Icons from "../../assets/Icons";
import themes from "../../assets/Themes/themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = ({}) => {
  return (
    <View style={styles.header}>
      <Image source={Icons.menu.light} style={styles.headerIcons} />
      <Text style={styles.title}>Hinj</Text>
      <Image source={Icons.sun} style={styles.headerIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcons: {
    flex: 0.45,
    aspectRatio: 1,
  },
  title: {
    fontFamily: "Sydney-Bold",
    flex: 2,
    fontSize: windowWidth / 8,
    textAlign: "center",
    color: themes.light.text,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: "2%",
    justifyContent: "space-evenly",
    paddingTop: "12%",
  },
});

export default Header;
