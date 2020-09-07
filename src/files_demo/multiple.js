/**
 * @Desc: main.js
 * @Author: wu xingtgao
 * @Date: 2020/9/3
 */
const path = require('path');
const fs_utils = require('../modules/filterText');

/* 读取文件 获取所有中文字体demo */
fs_utils.getFilesString({
  pattern: path.join(__dirname , '../assets/files/*.wxml'),
  lang:'cn'
}).then((data)=>{
  console.log('wxml',data)
})

fs_utils.getFilesString({
  pattern: path.join(__dirname , '../utils/*.js'),
  lang:'cn'
}).then((data)=>{
  console.log('js',data)
})

// fs_utils.getFilesString({
//   pattern: path.join(__dirname , '../assets/files/*.jsx'),
//   lang:'cn'
// }).then((data)=>{
//   console.log('jsx',data)
// })
