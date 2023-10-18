## Lab Assignment 1: Spinning Up React Native App


##### 1. System requirements:
-  All Windows 11 devices
-  Windows 10 devices with Windows version: 10.0.16299.0

##### 2.	Installation instructions: 
You’ll need to install Node.js and Java SE Development Kit
- open command prompt and run as administrator. 
- Paste the following line into the cmd line: 
- choco install -y nodejs-lts microsoft-openjdk11
- You should see that chocolatey installed 2/2 packages.

##### 3.	Configuration steps: 
###### Install Android Studio: https://developer.android.com/studio/index.html
- Once downloaded, open the installation wizard. Make sure the boxes next to the following are checked:
-- Android Virtual Device
- Click next to install.
- Once complete, run Android Studio from the installer. You can skip the settings import. In the Welcome screen follow the on-screen instructions.

###### Install Android SDK:
- In Android Studio, select “more Actions”, then select “SDK Manager”
- Under “Language & Frameworks” > Android SDK > SDK Platforms > Select “Show Package Details”
- Find “Android 13.0 (“Tiramisu”) and select the following:
-- Android SDK Platform 33
-- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
-- Go to SDK Tools > Show Package Details > Find “Android SDK Build-Tools”  > Select 33.0.0
-- Click OK to install and APPLY

###### Configure Android Home environment variable:
- Open Windows Control Panel
- Click on User Accounts > User Accounts
- Click Change my environment variables
- Click New… 
- Variable Name: ANDROID_HOME
- Variable value: C:\Users\Stephanie\AppData\Local\Android\Sdk
- Click OK
- Verify it was installed by opening Powershell
- Enter “Get-ChildItem -Path Env:\”
- You should see ANDROID_HOME has been added

###### Add platform-tools to Path:
- Open the Windows Control Panel.
- Click on User Accounts, then click User Accounts again
- Click on Change my environment variables
- Select the Path variable.
- Click Edit.
- Click New and add the path to platform-tools to the list.

##### 4.	Project creation: 
- Open VS Code
- Run terminal 
- Paste into terminal: 
- npm uninstall -g react-native-cli @react-native community/cli
- Paste into terminal:
- npx react-native@latest init TodoList
- You will see the following if correctly done:
Welcome to React Native!
✔ Downloading template
✔ Copying template
✔ Processing template
✔ Installing dependencies

##### 5.	Running the project: 
- In VS Code, open folder that you just created (ToDoList)
- Run terminal 
- Paste into terminal:  npm start
- Select your device (‘a’ for run on android)

##### 6.	Troubleshooting: 
-	Most common troublshoot help can be found here:
https://reactnative.dev/docs/troubleshooting

##### 7.	Resources: 
-	Android Studio:
 https://developer.android.com/studio/index.html

-	React Native – Setting up the development environment:
https://reactnative.dev/docs/environment-setup?guide=native

-	Visual Studio Code download:
https://code.visualstudio.com
