/**
 * @Desc: 生成使用文字的字体
 * @Author: wu xingtgao
 * @Date: 2020/9/3
 */
var Fontmin = require('fontmin');
var rename = require('gulp-rename');

var fontmin = new Fontmin()
  .src('src/assets/fonts/FZYingXueJW.TTF') // 设置服务端源字体文件
  .use(rename('FZYingXueJWsmall.ttf'))
  .dest('build/fonts') // 设置生成字体的目录
  .use(Fontmin.glyph({
    text: '中,秋,活,动,对,内,跨,越,速,运,亲,爱,的,家,人,们,金,送,爽,丹,桂,飘,香,又,是,一,年,圆,月,时,祝,快,乐,今,不,容,易,也,平,凡,危,机,转,在,疫,情,影,响,下,众,多,企,业,堪,重,负,而,却,逆,流,上,我,经,受,了,带,来,考,验,承,担,个,民,族,物,该,有,社,会,责,任,与,当,同,部,防,工,作,各,位,支,持,做,相,到,都,健,康,成,立,十,三,周,百,合,品,牌,联,名,为,庆,生,这,服,务,认,可,付,出,岁,牵,手,东,航,实,现,客,改,货,包,并,行,第,架,入,列,空,力,再,乘,新,基,建,风,助,供,应,链,复,苏,亮,央,视,向,大,证,明,坚,韧,强,壮,天,每,员,携,拼,搏,创,造,将,由,添,光,溢,彩,步,走,稳,心,然,信,未,遇,何,只,要,进,依,能,最,后,阖,欢,外,伙,伴,朋,友,逢,国,和,兴,值,此,佳,节,临,举,之,际,代,表,集,团,致,以,日,问,候,美,好,愿,直,用,汗,水,浇,灌,收,获,干,砥,砺,前,通,过,技,术,完,融,科,赋,催,发,展,历,磨,已,长,够,困,难,主,贡,献,量,共,荣,赢,于,育,变,局,开,匠,产,诚,户,广,市,场,辉,煌,起,迎,接,更,次,幸,福', // 设置需要的自己
  }))


fontmin.run(function (err, files) { // 生成字体
  if (err) {
    throw err;
  }
  console.log(files[0]); // 返回生成字体结果的Buffer文件
});