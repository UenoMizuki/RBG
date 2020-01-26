import {Item} from './item';
import * as Phaser from "phaser";
var elem = document.getElementById('output');
var aBook = new Item('はじめてのTypeScript',2980);
aBook.say(elem);