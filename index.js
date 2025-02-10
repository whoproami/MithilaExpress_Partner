/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-url-polyfill/auto';
import storage from 'local-storage-fallback'

  if (!('localStorage' in window)) {
    window.localStorage = storage;
  }

AppRegistry.registerComponent(appName, () => App);
