import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {Dimensions, PixelRatio, Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {navigationRef} from '../App';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

let iosAppUrl = 'https://ios.swift.com/';
let androidAppUrl = 'https://android.java.com/';

/**
 * Helper Functions
 *
 * @class UtilityMethods
 */
class UtilityMethods {
  hp = height => {
    const elemHeight = typeof height === 'number' ? height : parseFloat(height);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  };
  wp = width => {
    const elemWidth = typeof width === 'number' ? width : parseFloat(width);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  };

  /**
   * Helper Function for validating email addresses
   *
   * @param {*} email
   * @memberof UtilityMethods
   */
  isEmailValid = email => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
  };

  /**
   * Helper Function for validating Phone Numbers
   *
   * @param {*} phoneNumber
   * @memberof UtilityMethods
   */
  isPhoneNumberValid = phoneNumber => {
    var format = /[ `!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(phoneNumber) || phoneNumber.length > 15) {
      return false;
    } else if (phoneNumber.length < 8) {
      return false;
    }
    return true;
  };

  /**
   * Helper Function for capitalize First Letter of Text
   *
   * @param {*} string
   * @memberof UtilityMethods
   */
  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  /**
   * Helper function for validating url
   *
   * @param {*} str
   * @memberof UtilityMethods
   */
  isValidUrl = str => {
    let pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator
    return !!pattern.test(str);
  };

  /**
   * Helper Function for generating a random string
   *
   * @param {*} length
   * @return {*}
   * @memberof UtilityMethods
   */
  getRandomString(length) {
    let randomChars = ``;
    ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
    let result = '';
    for (let i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length),
      );
    }
    return result;
  }

  /**
   * Helper Function for checking notch in ios device
   *
   * @memberof UtilityMethods
   */
  hasNotch = () => {
    let d = Dimensions.get('window');
    const {height, width} = d;
    return (
      // This has to be iOS duh
      Platform.OS === 'ios' &&
      // Accounting for the height in either orientation
      (height >= 812 || width >= 812)
    );
  };

  /**
   * Helper Function for ios device is Iphone X
   *
   * @memberof UtilityMethods
   */
  isIphoneX = () => {
    const dimension = Dimensions.get('window');
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTV &&
      (dimension.height === 780 ||
        dimension.width === 780 ||
        dimension.height === 812 ||
        dimension.width === 812 ||
        dimension.height === 844 ||
        dimension.width === 844 ||
        dimension.height === 896 ||
        dimension.width === 896 ||
        dimension.height === 926 ||
        dimension.width === 926)
    );
  };

  /**
   * Helper function for Selecting Image using camera or gallery
   *
   * @param {*} selectType
   * @param {*} multiple
   * @param {*} callback
   * @memberof UtilityMethods
   */
  selectImage = (selectType, multiple, callback) => {
    if (selectType === 'camera') {
      ImagePicker.openCamera({
        cropping: true,
        mediaType: 'photo',
      }).then(image => {
        callback(image);
      });
    } else {
      ImagePicker.openPicker({
        multiple: multiple,
        mediaType: 'photo',
        cropping: true,
      }).then(images => {
        callback(images);
      });
    }
  };

  /**
   * Helper Function for storing String Data in the async storage
   *
   * @param {*} key
   * @param {*} value
   * @memberof UtilityMethods
   */
  storeStringData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {}
  };

  /**
   * Helper Function for retrieving a String Data from the async storage
   *
   * @param {*} key
   * @memberof UtilityMethods
   */
  getStringData = async key => {
    try {
      let value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      return null;
    }
  };

  /**
   * Helper Function for storing a Json Data in the async storage
   *
   * @param {*} key
   * @param {*} value
   * @memberof UtilityMethods
   */
  storeJsonData = async (key, value) => {
    try {
      const jsonValue = value === null ? null : JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      return null;
    }
  };

  /**
   * Helper Function for retrieving a Json Data from the async storage
   *
   * @param {*} key
   * @memberof UtilityMethods
   */
  getJsonData = async key => {
    try {
      let jsonValue = await AsyncStorage.getItem(key);
      jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null;
      return jsonValue;
    } catch (e) {
      return null;
    }
  };

  /**
   * Helper Function for removing data from async storage
   *
   * @param {*} key
   * @memberof UtilityMethods
   */
  removeAsyncItem = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {}
  };

  /**
   * Helper Function for checking json value
   *
   * @param {*} str
   * @memberof UtilityMethods
   */
  isJson = str => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };

  getAppUrl = () => {
    return Platform.OS === 'ios' ? iosAppUrl : androidAppUrl;
  };

  resetAndNavigate = route => {
    navigationRef.dispatch(
      CommonActions.reset({
        routes: [
          {
            name: route,
          },
        ],
      }),
    );
  };

  resetAndNavigateUsingMultipleRoutes = routes => {
    navigationRef.dispatch(
      CommonActions.reset({
        routes,
      }),
    );
  };

  // onPressNotification = notification => {
  //   console.log('Notification Pressed', notification);
  // };

  // updateFCMToken = () => {
  //   console.log('Updating FCM Token');
  // };

  // addNotificationListener = () => {
  //   this.updateFCMToken();

  //   messaging().setBackgroundMessageHandler(async notification => {
  //     this.onPressNotification(notification);
  //   });

  //   messaging().onNotificationOpenedApp(notification => {
  //     this.onPressNotification(notification);
  //   });

  //   notifee.onBackgroundEvent(async ({type, detail}) => {
  //     if (type === EventType.PRESS) {
  //       const notification = detail.notification;
  //       this.onPressNotification(notification);
  //     }
  //   });

  //   notifee.onForegroundEvent(async ({type, detail}) => {
  //     if (type === EventType.PRESS) {
  //       const notification = detail.notification;
  //       this.onPressNotification(notification);
  //     }
  //   });

  //   messaging().onMessage(notification => {
  //     this.displayNotification(notification);
  //   });
  // };

  // displayNotification = async notification => {
  //   await notifee.requestPermission();
  //   const channelId = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //   });

  //   // Display a notification
  //   await notifee.displayNotification({
  //     title: notification.notification.title,
  //     body: notification.notification.body,
  //     android: {
  //       sound: 'default',
  //       channelId,

  //       smallIcon: 'ic_frame_4',
  //       pressAction: {
  //         id: 'default',
  //       },
  //     },
  //     ios: {
  //       sound: 'default',
  //       pressAction: {
  //         id: 'default',
  //       },
  //     },
  //   });
  // };
}

const Utilities = new UtilityMethods();

export default Utilities;
