/**
 * @Desc: fs_utils
 * @Author: wu xingtgao
 * @Date: 2020/9/3
 */
const fs = require('fs');
const {readFile} = require('../../utils/fsPromise');
const glob = require('glob');
const parse_utils = require('../../utils/parse')

/**
 * 读取单个文件路径 TODO 弃用，改用{readFile} = fsPromise
 * @param path
 * @param callback
 */
const readFromFile = (path , callback) => {
  fs.readFile(path , (err , data) => {
    if (err) {
      console.log('报错了' , err);
    } else {
      console.log(data.toString());
      callback && callback(data);
    }
  });
};


/**
 * 遍历匹配文件
 * @param pattern
 * @param options
 * @param callback
 * @returns {Promise<unknown>}
 */
const readFromPatterns = ({pattern , options = {} , callback}) => {
  return new Promise((resolve , reject) => {
    glob(pattern , options , function (err , files) {
      if (err) {
        console.log('err' , err);
        reject(err);
      } else {
        resolve(files);
        return files;
      }
    });
  });

};
/**
 * 获取单个文件的字符串
 * @param path
 * @param lang
 * @returns {Promise<string>}
 */
const getFileString = async({path,lang='cn'})=>{
  let result = (await readFile(path)).toString()
  if(lang === 'cn'){
    result = parse_utils.getFontChinese(result)
  }
  if(lang === 'en'){
    result = parse_utils.getFontEn(result)
  }
  return result
}
/**
 * 获取多个文件的字符串
 * @param pattern 正则匹配
 * @param lang 语言简码
 * @param callback
 * @return {Promise<string>}
 */
const getFilesString = async ({pattern ,lang='cn', callback}) => {
  let files = await readFromPatterns({pattern});
  let result = '';
  for (let i = 0; i < files.length; i++) {
    result += (await readFile(files[i])).toString();
  }
  if(lang === 'cn'){
    result = parse_utils.getFontChinese(result)
  }
  if(lang === 'en'){
    result = parse_utils.getFontEn(result)
  }
  return result;
};

module.exports = {
  readFromFile ,
  getFileString,
  getFilesString
};
