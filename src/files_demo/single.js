/**
 * @Desc: main.js
 * @Author: wu xingtgao
 * @Date: 2020/9/3
 */
const path = require('path');
const fs_utils = require('../filterText');
const parse_utils = require('../utils/parse');

/* 读取文件 获取所有中文字体demo */
fs_utils.readFromFile(path.join(__dirname , '../assets/files/main.wxml') , (data) => {
  const result = parse_utils.getFontChinese(data.toString());
  console.log(result);
});

fs_utils.getFileString({
  path: path.join(__dirname , '../assets/files/main.wxml') ,
  lang: 'cn'
}).then((data)=>{
  console.log('single file',data)
})
;
