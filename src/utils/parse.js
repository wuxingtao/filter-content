/**
 * @Desc: parse 解析数据
 * @Author: wu xingtgao
 * @Date: 2020/9/4
 */

const regList = require('./regExec')

/**
 * 根据html字符串解析汉字字符串(去重)
 * @param str
 * @returns {string}
 */
const getFontChinese = (str)=>{
  return ([...new Set(str.match(regList.chineseReg))]).toString()
}

module.exports = {
  getFontChinese
}
