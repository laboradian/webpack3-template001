/* global */
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import 'babel-polyfill'

//import _ from 'lodash'

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

console.log('%c 🌈 Laboradian.com 🌈 ', 'background: #2383BF; color: #fff; font-size:1.4em;');
