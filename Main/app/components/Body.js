import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import themes from "../../assets/Themes/themes";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const Body = () => {
  return (
    <View style={styles.body}>
      <View style={styles.imageSquare}>
        <ImageBackground
          source={Profiles.landay.image}
          style={styles.image}
          imageStyle={styles.imageStyle}
        >
          <Text style={styles.TopText}>{Profiles.landay.name}</Text>
          <View style={styles.bottomRow}>
            <Text style={styles.BottomText}>{Profiles.landay.caption}</Text>
            <View style={styles.circle}>
              <Image style={styles.likeIcon} source={Icons.likeOff.light} />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.audioBox}>
        <Text style={styles.audioText}>My hottest take</Text>
        <View style={styles.audioRow}>
          <Image style={styles.playerIcon} source={Icons.player.light} />
          <Image style={styles.audioWave} source={Icons.audioWave.light} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    padding: 20,
    ...themes.light.shadows,
    backgroundColor: themes.light.bg,
    borderRadius: 15,
    flex: 2.6,
    alignSelf: "center",
    maxWidth: windowWidth * 0.9,
    marginBottom: 30,
  },
  audioText: {
    alignContent: "center",
    paddingLeft: 20,
    fontSize: 35,
    fontFamily: "Sydney",
    marginBottom: 10,
    color: themes.light.text,
  },
  playerIcon: {
    flex: 1.3,
    aspectRatio: 1,
    marginHorizontal: 10,
  },
  audioRow: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    marginBottom: 30,
  },
  audioBox: {
    backgroundColor: themes.light.bgSecondary,
    ...themes.light.shadows,
    borderRadius: 15,
    flex: 1.2,
    width: 470,
    justifyContent: "space-evenly",
    marginBottom: 70,
    maxWidth: windowWidth * 0.9,
    elevation: 5,
  },
  audioWave: {
    flex: 6,
    height: 50,
    marginRight: 10,
  },
  body: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "30%",
  },
  imageStyle: {
    borderRadius: 15,
  },
  imageSquare: {
    alignItems: "flex-start",
    paddingTop: "10%",
    padding: "5%",
    flex: 2.6,
  },
  TopText: {
    color: "white",
    fontSize: 40,
    fontFamily: "Sydney",
  },
  BottomText: {
    color: "white",
    marginTop: "85%",
    fontSize: 23,
    fontFamily: "Sydney",
  },
  circle: {
    backgroundColor: themes.light.bgSecondary,
    borderRadius: 40,
    width: 40,
    height: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "83%",
  },
  likeIcon: {
    width: 25,
    height: 25,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Body;
