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

class firebaseHelperFunctions {
  constructor(props) {}

  getGeoPoint = (latitude, longitude) => {
    return new firestore.GeoPoint(latitude, longitude);
  };

  getAuth = () => {
    return auth();
  };

  // ---------------------------- Authentication ----------------------------//
  signUpWith = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      return {
        isSuccess: true,
        response: response,
        message: "User Created Successfully!",
      };
    } catch (error) {
      return { isSuccess: false, response: null, message: error.message };
    }
  };

  loginWithEmailPass = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      return {
        isSuccess: true,
        response: response.user,
        message: "User logged in Successfully!",
      };
    } catch (error) {
      return { isSuccess: false, response: null, message: error.message };
    }
  };

  forgotPassword = async (email) => {
    try {
      let response = await auth().sendPasswordResetEmail(email);
      return { isSuccess: true, response: response, message: "" };
    } catch (error) {
      return { isSuccess: false, response: null, message: error.message };
    }
  };

  returnErrorMessage = (error) => {
    let errorMessage =
      "There is an unknown error with status code " + error.code;
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      errorMessage = "The user canceled the sign-in flow";
    } else if (error.code === statusCodes.IN_PROGRESS) {
      errorMessage = "The sign-in flow is still in progress";
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      errorMessage = "Play services are not available";
    }

    return errorMessage;
  };

  // ---------------------------- Get Fcm Token ---------------------------- //

  requestPermissionForPushNotifications = async () => {
    try {
      let response = await messaging().requestPermission();
      console.log("Notification - requestPermission ===>> ", response);
      return { isSuccess: true, response: null, messaging: response };
    } catch (error) {
      console.log("Notification - requestPermission (Error) ===>> ", error);
      return { isSuccess: false, response: null, message: error.message };
    }
  };

  getFcmToken = async () => {
    try {
      let token = await messaging().getToken();
      return token;
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  // ---------------------------- User Records ---------------------------- //

  fetchUserData = async (userId) => {
    const snapshot = await firestore()
      .collection(COLLECTION_USERS)
      .doc(userId)
      .get();
    return snapshot.data();
  };

  uploadImage = async (imageUri, imageName) => {
    try {
      const image =
        Platform.OS === "android" ? imageUri : imageUri.replace("file:///", ""); //imagePath.uri;
      const imageRef = storage().ref(`ProfileImages/${imageName}.png`);
      await imageRef.putFile(image);
      let url = await imageRef.getDownloadURL();
      return {
        isSuccess: true,
        response: url,
        message: "Image uploaded successfully",
      };
    } catch (error) {
      return {
        isSuccess: false,
        response: null,
        message: error.message,
      };
    }
  };

  // ---------------------------- Collection CURD ---------------------------- //

  fetchDocument = async (collectionName, documentId, arrayFilters) => {
    let firestoreCollection = firestore().collection(collectionName);
    if (documentId) {
      firestoreCollection = firestoreCollection.doc(documentId);
    } else {
      arrayFilters.map((filter) => {
        let key = filter.key;
        let operator = filter.operator;
        let value = filter.value;
        firestoreCollection = firestoreCollection.where(key, operator, value);
      });
      firestoreCollection = firestoreCollection.orderBy(
        "created_date_unix",
        "desc"
      );
    }

    if (subscribeForSnapshot) {
      this._liveSnapshot(firestoreCollection, callback);
    } else {
      this._fetchDocument(firestoreCollection, callback);
    }
  };

  // fetchPaginatedDocument = async (
  //   collectionName,
  //   arrayFilters,
  //   limit,
  //   startAfter,
  //   callback
  // ) => {
  //   let firestoreCollection = firestore().collection(collectionName);

  //   arrayFilters.map((filter) => {
  //     let key = filter.key;
  //     let operator = filter.operator;
  //     let value = filter.value;
  //     firestoreCollection = firestoreCollection.where(key, operator, value);
  //   });

  //   firestoreCollection = firestoreCollection
  //     .orderBy("created_date_unix", "desc")
  //     .limit(limit);

  //   if (startAfter != null) {
  //     firestoreCollection = firestoreCollection.startAfter(startAfter);
  //   }

  //   this._fetchDocument(firestoreCollection, callback);
  // };

  // addOrUpdateDocument = (
  //   collectionName,
  //   documentId,
  //   documentData,
  //   callback
  // ) => {
  //   let fireStoreCollection = firestore().collection(collectionName);
  //   if (documentId?.length > 0) {
  //     fireStoreCollection = fireStoreCollection
  //       .doc(documentId)
  //       .update(documentData);
  //   } else {
  //     fireStoreCollection = fireStoreCollection.add(documentData);
  //   }

  //   fireStoreCollection
  //     .then((response) => {
  //       console.log("addOrUpdateDocument ===>>", response);
  //       callback({
  //         isSuccess: true,
  //         response: response,
  //         message: "Document updated/added successfully",
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("addOrUpdateDocument (ERROR) ===>>", error);
  //       callback({ isSuccess: false, response: null, message: error });
  //     });
  // };

  // _fetchDocument = (firestoreCollection, callback) => {
  //   firestoreCollection
  //     .get()
  //     .then((snapshot) => {
  //       if (!snapshot?._data) {
  //         const lastVisible = snapshot?._docs[snapshot?._docs.length - 1];
  //         const snapshotData = snapshot?._docs.map((item) => {
  //           let data = item._data;
  //           data.docId = item._ref.id;
  //           return data;
  //         });
  //         if (snapshot?._docs && snapshot?._docs.length > 0) {
  //           callback({
  //             isSuccess: true,
  //             response: snapshotData,
  //             lastVisible,
  //             message: "Document fetched successfully",
  //           });
  //         } else {
  //           callback({
  //             isSuccess: false,
  //             response: null,
  //             message: "Document Not found",
  //           });
  //         }
  //       } else {
  //         if (snapshot?._data) {
  //           let documentData = snapshot?._data;
  //           documentData.docId = snapshot?._ref.id;
  //           callback({
  //             isSuccess: true,
  //             response: documentData,
  //             message: "Document fetched successfully",
  //           });
  //         } else {
  //           callback({
  //             isSuccess: false,
  //             response: null,
  //             message: "Document Not found",
  //           });
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       callback({ isSuccess: false, response: null, message: error });
  //     });
  // };

  // _liveSnapshot = (firestoreCollection, callback) => {
  //   let snapshot_ref = firestoreCollection.onSnapshot((snapshot) => {
  //     const snapshotData = snapshot?._docs.map((item) => {
  //       let data = item._data;
  //       data.docId = item._ref.id;
  //       return data;
  //     });
  //     if (snapshot?._docs && snapshot?._docs.length > 0) {
  //       callback({
  //         isSuccess: true,
  //         response: snapshotData,
  //         reference: snapshot_ref,
  //         message: "Data fetched successfully",
  //       });
  //     } else {
  //       callback({
  //         isSuccess: false,
  //         response: null,
  //         reference: snapshot_ref,
  //         message: "Data Not found",
  //       });
  //     }
  //   });
  // };

  sendNotifications = async ({ title, body, fcm_tokens }) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `key=${MESSAGING_SERVER_KEY}`);
      myHeaders.append("Content-Type", "application/json");

      var data = {
        registration_ids: fcm_tokens,
        notification: {
          body: body,
          title: title,
          sound: "default",
        },
        android: {
          sound: "default",
          notification: null,
        },
        data: {
          body: body,
          title: title,
        },
      };

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(data),
      };

      let response = await fetch(
        "https://fcm.googleapis.com/fcm/send",
        requestOptions
      );
      response = response.json();
      return { isSuccess: true, res: response };
    } catch (error) {
      return {
        isSuccess: false,
        res: error,
      };
    }
  };
}

const FirebaseHelper = new firebaseHelperFunctions();

export default FirebaseHelper;
