import { StyleSheet } from "react-native";
import Utilities from "../../Utility/UtilityMethods";

const makeStyles = ({ colors, FontSize }) =>
  StyleSheet.create({
    root: {
      flexDirection: "column",
    },
    title: {
      fontWeight: "bold",
      marginLeft: 10,
    },
    drawerItem: {
      marginVertical: 2,
      paddingVertical: 10,
      backgroundColor: colors?.background,
      flexDirection: "row",
      alignItems: "center",
      width: "93%",
      alignSelf: "center",
      paddingHorizontal: 10,
      borderRadius: 8,
    },
    selectedDrawerItem: {
      backgroundColor: colors?.darkWithOpacity(0.2),
    },
  });

export default makeStyles;
