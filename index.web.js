import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import {App} from './src/App.js';

AppRegistry.registerComponent('KoloSmaku', () => App);
AppRegistry.runApplication('KoloSmaku', {
  rootTag: document.getElementById('react-root')
});
