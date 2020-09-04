/**
 * @Desc: 生成使用文字的字体
 * @Author: wu xingtgao
 * @Date: 2020/9/3
 */
var Fontmin = require('fontmin');
var rename = require('gulp-rename');

var fontmin = new Fontmin()
  .src('assets/fonts/FZYingXueJW.TTF') // 设置服务端源字体文件
  .use(rename('FZYingXueJWsmall.ttf'))
  .dest('build/fonts') // 设置生成字体的目录
  .use(Fontmin.glyph({
    text: '亲爱的跨越伙伴们、朋友们：中秋逢国庆，家和国运兴。值此佳节来临，举国欢庆之际，我代表跨越速运集团向各位致以节日的问候和美好的祝愿。一直以来，跨越速运用汗水浇灌收获，以实干砥砺前行，通过技术与业务完美融合，以科技赋能催生新的发展活力。历经13年磨砺，跨越速运已经成长为能够在困难时向国家主动贡献力量的企业。未来，跨越速运愿与各位共荣共赢，于危机中育新机，于变局中开新局，用匠心做好产品，用诚心服务客户，广开市场，再创辉煌，一起迎接跨越更好的未来！最后再次祝愿大家佳节快乐，阖家幸福！', // 设置需要的自己
  }))


fontmin.run(function (err, files) { // 生成字体
  if (err) {
    throw err;
  }
  console.log(files[0]); // 返回生成字体结果的Buffer文件
});
