/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SignIn from './app/screens/SignIn';
import Otp from './app/screens/Otp';
import ForgetPass from './app/screens/ForgetPass';
import ResetPass from './app/screens/ResetPass';
import SignUp from './app/screens/SignUp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SignIn);
