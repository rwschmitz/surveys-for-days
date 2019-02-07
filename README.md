# Surveys for Days

## Purpose

The purpose of this app is:

- Demonstrate capabilities to develop a mobile application in React Native.

### Tools

- Google Firebase
- React Native
- React Navigation
- Styled Components

### Libraries / Packages

- [React Native Simple Radio Button](https://github.com/moschan/react-native-simple-radio-button)

### React Native Setup

- `npm install -g expo-cli`
- `expo init [yourProjectHere]`
- `cd [yourProjectHere]`
- `yarn start`
- Start coding!

### iOS Development Environment

- `expo eject` from Expo.
- `expo start` to setup the development server.
- Build the project in xCode and the app should open on your target device (e.g., your iPhone).

## Notes

---

### Apple Store

- App icon can not be transparent nor contain an alpha channel
  - [Github Issue #1086](https://github.com/expo/expo/issues/1086)
  - [Quick way to remove transparency / alpha channel](https://stackoverflow.com/questions/46585809/error-itms-90717-invalid-app-store-icon)
- Deploy application through [App Store Connect](https://appstoreconnect.apple.com)
- Application can also be upload via the Application Loader
  - [Stackoverflow 29741404](https://stackoverflow.com/questions/29741404/no-suitable-records-were-found-verify-your-bundle-identifier-is-correct)
- A quick way to deploy to Testflight for internal testing is to uncheck the box for bitwise compilation.

---

### Google Firebase

- Ensure when setting up rules, the rules are setup up for Realtime Database instead of Google Firestore, assuming you want a Realtime Database.
  - Different rules are written for different database types.
  - [Github Issue #12](https://github.com/firebase/friendlychat-ios/issues/12)

- For anonymous authentication, ensure anonymous authentication is actually enabled.
  - Go to the Google Firebase console.
  - Go to the authentication section, navigtating there from the left side menu.
  - In the authentication section, go to the "Sign-in method" tab.
  - Enable anonymous authentication.

- Always have the most up to date GoogleService-Info.plist

---

### React Native Firebase

- Ensure appropriate Pods are installed.
  - `pod 'Firebase/Core', '~> 5.15.0'`
  - `pod 'Firebase/Auth', '~> 5.15.0'`
- After installing the necessary pods, **within xCode**, you need to be opening the `.xcworkspace` file instead of the `.xcproj` file.
- Ensure an update to date GoogleService-Info.plist is installed at the correct location.
  - Location: ./ios/
- If the error `Filename.h file not found` occurs, it's possible your xCode project isn't looking at your `node_modules` folder.
  - [Github Issue #979, comment by leonelpena](https://github.com/invertase/react-native-firebase/issues/979#issuecomment-383919674)
  - [React Native, manually linking libraries](https://facebook.github.io/react-native/docs/linking-libraries-ios#step-1-1)
  - The library you're looking for is likely located at `../node_modules/react-native-firebase/ios/RNFirebase`

---

### Expo && ExpoKit

- As of 1/31/2019, npm only works with the following releases of Node.js:  4, 6, 7, 8, and 9.
- When using `expo eject`, you will be developing with ExpoKit now.
  - [ExpoKit Documentation](https://docs.expo.io/versions/latest/expokit/expokit/)
- To build a detached project:
  1. In xCode, select `Generic iOS device`
  2. In your terminal, at the root of the project, run `expo publish`
  3. in xCode, go to Product -> Archive
- When the following bug occurs: `Empty ios/user/Supporting/shell-app-manifest.json file generates error while archiving`
  - [Github Issue #1993](https://github.com/expo/expo/issues/1993)
- During devleopment, if the app has a timeout when using `expo start`, try running the app through the tunnel instead of LAN
  - Use the command `expo start --tunnel`

---

#### Code Philosophy

- Start with large pages and break down redundant bits of code into re-usable components

##### Contact

- Email:    Rudolph.W.Schmitz@gmail.com
- Twitter:  [@RudolphSchmitz](https://twitter.com/RudolphSchmitz)
