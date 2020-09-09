/**
 * @Desc: 生成使用文字的字体
 * @Author: wu xingtgao
 * @Date: 2020/9/3
 */
const Fontmin = require('fontmin');
const rename = require('gulp-rename');

module.exports = function({text, src='src/assets/fonts/FZYingXueJW.TTF',dest='build/fonts'}){
  var fontmin = new Fontmin()
    .src(src) // 设置服务端源字体文件
    .use(rename('FZYingXueJW_test.ttf'))
    .dest(dest) // 设置生成字体的目录
    .use(Fontmin.glyph({
      text:text
    }))


  fontmin.run(function (err, files) { // 生成字体
    if (err) {
      throw err;
    }
    console.log(files[0]); // 返回生成字体结果的Buffer文件
  });

}

