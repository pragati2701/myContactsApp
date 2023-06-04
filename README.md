#Contacts App

This React Native-built mobile app lets you view and search your device's contacts.
 A list of contacts, complete with names and phone numbers, is displayed by the programme.
  By entering a search term in the search box, the app will limit the list of contacts to 
  show just those matches. Additionally, you can click on a contact to view their information 
  in a popup window that you can close.


  ## Components

The app consists of the following components:

- `App`: The main component that sets up the app layout and handles the logic for loading and displaying contacts, as well as handling search and contact click events.
- `Appbar`: A component from the `react-native-paper` library used to display the app header.
- `List`: A component from the `react-native-paper` library used to display the contact list items.
- `Portal` and `Dialog`: Components from the `react-native-paper` library used to create a popup dialog to show contact details.
- `TextInput`, `TouchableOpacity`, `Text`, and `FlatList`: React Native components used for handling user input, displaying text, and rendering the contact list.



## Libraries and Plugins Used

The following libraries and plugins were used in this project:

- React Native: A framework for building native apps using React.
- React Navigation: A routing and navigation library for React Native apps.
- React Native Paper: A material design UI library for React Native.
- Expo Contacts: A plugin that provides access to the device's contact information.
- React Native Safe Area Context: A library for handling safe area insets in React Native apps.



## Running your React Native application

### Running on expo go
 There are many ways to run it , I ran it using expo go , for this you nedd to perform the following:-

- Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer.
- Now run the App ny giving the command "npx expo start" in terminal where your App exists.
- On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of
 the default iOS Camera app.


### Running on iOS Simulator

- Ensure you have Xcode installed on your machine.
- Run the app using the following command:
    
    npm run ios
- The app will launch in the iOS Simulator.


### Running on Android Emulator

- Ensure you have Android Studio installed on your machine.
- Create and launch an Android Virtual Device (AVD) using the AVD Manager in Android Studio.
- Run the app using the following command:

  npm run android

- The app will launch in the Android Emulator.
