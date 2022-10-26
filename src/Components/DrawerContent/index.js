import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import makeStyles from "./styles";

const DrawerContent = ({ navigation, ...props }) => {
  let theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.root}>
      {props.state.routes.map((item, index) => {
        console.log(props.state.index, index);
        return (
          <TouchableOpacity
            style={[
              styles.drawerItem,
              props.state.index === index && styles.selectedDrawerItem,
            ]}
            onPress={() => navigation.navigate(item.name)}
          >
            <SimpleLineIcons
              name={item.params.icon}
              color={theme?.colors?.text}
              size={20}
            />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DrawerContent;
