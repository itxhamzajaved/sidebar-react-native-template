import React from "react";
import { View } from "react-native";
import { Text, TextInput, useTheme } from "react-native-paper";
import { Button, Space } from "../../Components";
import CommonStyles from "../../Styles/CommonStyles";
import Utilities from "../../Utility/UtilityMethods";
import makeStyles from "./styles";
import { useLoading } from "../../Contexts/LoadingProvider";
import Routes from "../../Navigation/Routes";
import DateAndTime from "../../Utility/DateAndTime";
import moment from "moment";

const Login = ({ navigation }) => {
  const theme = useTheme();
  // let {startLoading, stopLoading} = useLoading();
  const [loading, setLoading] = React.useState(false);
  const styles = makeStyles(theme);
  const [emailState, setEmailState] = React.useState({
    value: "testing@gmail.com",
  });
  const [passwordState, setPasswordState] = React.useState({ value: "123456" });

  let fieldsAreValid = () => {
    let returnedValue = true;
    setEmailState({ value: emailState.value });
    setPasswordState({ value: passwordState.value });
    if (emailState.value?.length === 0) {
      setEmailState({
        ...emailState,
        error: true,
        errorMessage: "Email is required",
      });
      returnedValue = false;
    }
    if (!Utilities.isEmailValid(emailState.value)) {
      setEmailState({
        ...emailState,
        error: true,
        errorMessage: "Invalid Email",
      });
      returnedValue = false;
    }
    if (passwordState.value?.length === 0) {
      setPasswordState({
        ...passwordState,
        error: true,
        errorMessage: "Password is required",
      });
      returnedValue = false;
    }

    return returnedValue;
  };

  let onLoginUser = () => {
    if (fieldsAreValid()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Utilities.resetAndNavigate(Routes.HOME);
      }, 2000);
    }
  };

  return (
    <View style={styles.root}>
      <Text numberOfLines={1} variant="displayLarge">
        Display Large
      </Text>
      <Space hp={2} />
      <View style={[CommonStyles.fullPercentageWidth]}>
        <TextInput
          label="Email"
          mode="flat"
          value={emailState.value}
          error={emailState.error}
          onChangeText={(value) => setEmailState({ value })}
          style={[CommonStyles.fullPercentageWidth]}
        />
        {emailState.error && (
          <Text style={styles.errorMessage}>{emailState.errorMessage}</Text>
        )}
        <Space hp={2} />
        <TextInput
          label="Password"
          mode="flat"
          secureTextEntry
          value={passwordState.value}
          error={passwordState.error}
          onChangeText={(value) => setPasswordState({ value })}
          style={[CommonStyles.fullPercentageWidth]}
        />
        {passwordState.error && (
          <Text style={styles.errorMessage}>{passwordState.errorMessage}</Text>
        )}
      </View>
      <Space hp={5} />

      <Button
        text="Login"
        loading={loading}
        mode="contained"
        width="100%"
        onPress={onLoginUser}
      />
    </View>
  );
};

export { Login };
