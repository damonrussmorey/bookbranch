# Facebook Authentication (iOS)
This document will go over howto install Facebook 
Authentication SDK into Bookbranch. 

After following the instructions in `README.md`, 
install the `react-native-fbsdk` package:
```
npm install github:facebook/react-native-fbsdk#5fe8e726966faf83d3388af85dd9740f4015e5d6
```
Once installed, run the following to link this
library to our React Native project:
```
react-native link react-native-fbsdk
```
Next, Download and unzip the Facebook SDK outside 
the repo (I store it in my Documents directory).
You can Find the SDK at `https://origincache.facebook.com/developers/resources/?id=facebook-ios-sdk-current.zip`

Open xcode and drag the following files from the 
facebook SDK folder into the framework folder
(don't copy the framework files as that would
increase the size of our repo):
- `Bolts.framework`
- `FBSDKCoreKit.framework`
- `FBSDKLoginKit.framework`
- `FBSDKShareKit.framework`

Finally, under Build Settings add the following 
path to Framework Search Paths:
```
$(HOME)/Documents/FacebookSDK # Or wherever you store your framework files
```

You should be able to build the app at this point. 