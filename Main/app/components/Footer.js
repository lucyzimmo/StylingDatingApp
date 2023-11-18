import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  PixelRatio,
} from "react-native";
import { Icons, Themes } from "../../assets/Themes";

// advanced JS syntax: destructure and rename variables
const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const Footer = () => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.discover}>
        <Image style={styles.discoverIcon} source={Icons.discover.light} />
        <Text style={styles.iconText}>Discover</Text>
      </View>
      <View style={styles.matches}>
        <Image style={styles.matchesIcon} source={Icons.heart.light} />
        <Text style={styles.iconText}>Matches</Text>
      </View>
      <View style={styles.dms}>
        <Image style={styles.dmsIcon} source={Icons.messages.light} />
        <Text style={styles.iconText}>DMs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    backgroundColor: Themes.light.navigation,
    width: windowWidth,
    height: windowHeight * 0.1,
    justifyContent: "space-around",
    paddingTop: windowHeight * 0.015,
  },
  discover: {
    flexDirection: "column",
    alignItems: "center",
    //marginHorizontal: 4,
  },
  matches: {
    flexDirection: "column",
    alignItems: "center",
  },
  dms: {
    flexDirection: "column",
    alignItems: "center",
  },
  discoverIcon: {
    width: windowWidth * 0.09,
    height: windowHeight * 0.044,
    aspectRatio: 1,
  },
  matchesIcon: {
    width: windowWidth * 0.09,
    height: windowHeight * 0.044,
    aspectRatio: 1,
  },
  dmsIcon: {
    width: windowWidth * 0.09,
    height: windowHeight * 0.044,
    aspectRatio: 1,
  },
  iconText: {
    color: "white",
    fontFamily: "Sydney",
    fontSize: 20,
  },
});

export default Footer;
