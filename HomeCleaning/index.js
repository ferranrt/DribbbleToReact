import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src/Containers';

AppRegistry.registerComponent(appName, () => App);
