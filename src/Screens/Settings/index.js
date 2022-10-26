import React from 'react';
import {Linking, ScrollView, Share, View, Alert} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {
  AboutApp,
  ContactUs,
  PrivacyPolicy,
  RateApp,
  ShareApp,
  TermsAndConditions,
} from '../../Assets/Images';
import {ProfileImage, SettingsItem} from '../../Components';
import Utilities from '../../Utility/UtilityMethods';
import makeStyles from './styles';
import Routes from '../../Navigation/Routes';

const Settings = ({navigation}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const onShareApp = async () => {
    try {
      let url = Utilities.getAppUrl();
      await Share.share({
        title: 'App link',
        message:
          'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
        url: url,
      });
    } catch (error) {
      Alert.alert('Alert!', error.message);
    }
  };
  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.header}>
          <ProfileImage width={Utilities.wp(20)} height={Utilities.wp(20)} />
          <View style={styles.userInfo}>
            <Text style={styles.fullName}>Hamza Javed</Text>
            <Text style={styles.username}>@itxhamza</Text>
          </View>
        </View>
        <SettingsItem heading title="General" marginBottom={20} />
        <SettingsItem
          title="About App"
          IconImage={AboutApp}
          onPress={() => navigation.navigate(Routes.ABOUT_APP)}
        />
        <SettingsItem title="Rate App" IconImage={RateApp} onPress={() => {}} />
        <SettingsItem
          title="Contact Us"
          IconImage={ContactUs}
          onPress={() => {
            Linking.openURL(
              'mailto:hello@edufeel.co.uk?subject=Report Problem',
            );
          }}
        />
        <SettingsItem
          title="Share App"
          IconImage={ShareApp}
          onPress={onShareApp}
        />
        <SettingsItem
          title="Privacy Policy"
          IconImage={PrivacyPolicy}
          onPress={() => navigation.navigate(Routes.PRIVACY_POLICY)}
        />
        <SettingsItem
          title="Terms & Conditions"
          IconImage={TermsAndConditions}
          onPress={() => navigation.navigate(Routes.TERMS_AND_CONDITIONS)}
          lastItem
        />
      </ScrollView>

      <Text style={styles.version}>Version: 0.3.2</Text>
    </View>
  );
};

export {Settings};
