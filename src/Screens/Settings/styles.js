import { StyleSheet } from "react-native";
import Utilities from "../../Utility/UtilityMethods";

const makeStyles = ({ colors, FontSize }) =>
  StyleSheet.create({
    root: {
      flex: 1,
      position: "relative",
    },
    header: {
      alignItems: "center",
      flexDirection: "row",
      width: Utilities.wp(90),
      paddingVertical: Utilities.hp(3),
      alignSelf: "center",
    },
    userInfo: {
      flexDirection: "column",
      marginLeft: Utilities.wp(3),
    },
    fullName: {
      fontSize: FontSize.largeHeading,
    },
    username: {
      fontSize: FontSize.caption,
      color: colors.darkWithOpacity(0.6),
      marginTop: Utilities.wp(1),
    },
    heading: {
      fontSize: FontSize.largeTitle,
      width: Utilities.wp(90),
      alignSelf: "center",
      flexWrap: "nowrap",
    },

    version: {
      position: "absolute",
      backgroundColor: colors.background,
      bottom: 0,
      paddingBottom: Utilities.hasNotch() ? 40 : 10,
      paddingTop: 10,
      textAlign: "center",
      width: Utilities.wp(100),
      fontSize: FontSize.text_field,
    },
  });

export default makeStyles;
