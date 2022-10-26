//================================ React Native Imported Files ======================================//
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import messaging from "@react-native-firebase/messaging";
import storage from "@react-native-firebase/storage";
import { Platform } from "react-native";
import {
  COLLECTION_USERS,
  CURRENT_USER_UID,
  MESSAGING_SERVER_KEY,
} from "./Constants";

class apiServiceFunctions {
  constructor(props) {}

  // Home Page Api Functions
}

const ApiServices = new apiServiceFunctions();

export default ApiServices;
