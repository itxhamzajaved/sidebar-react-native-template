import { StyleSheet } from "react-native";
import Utilities from "../../Utility/UtilityMethods";

const makeStyles = ({ colors, FontSize }) =>
  StyleSheet.create({
    root: {
      flex: 1,
      width: Utilities.wp(90),
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default makeStyles;
