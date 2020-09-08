# filter-content

[![NPM version][npm-image]][npm-url] 
[![license status][license-image]][npm-url]
[![Coverage Status](https://coveralls.io/repos/github/wuxingtao/filter-content/badge.svg?branch=master)](https://coveralls.io/github/wuxingtao/filter-content?branch=master)


>filter string from files

>Lets you quickly get string from files
>* support build compress font with used string
>* support filter string with language （cn）
>* support cli

# install
`npm install -g filter-content`

## example
`filter -f "./src/assets/files/*jsx" -o "./build/test/" -fp "src/assets/fonts/FZYingXueJW.TTF"`

```
./files/*.jsx
/Users/kye/XINGTAO/project/assets/files/index.jsx
/Users/kye/XINGTAO/project/assets/files/main.jsx
files string 跨,越,速,运,月,日,千,古,风,流,人,物,故,宫,博,院,藏,苏,轼,主,题,书,画,特,展,在,文,华,殿,开,览,通,过,件,套,精,品,勾,勒,出,一,个,生,动,而,立,体,的,形,象,带,领,观,众,回,到,所,处,那,化,昌,盛,群,星,璀,璨,时,代,十,三,五,期,间,进,口,银,行,累,计,境,非,融,资,保,函,金,额,超,亿,元,据,介,绍,性,不,仅,为,国,内,企,业,增,信,却,逆,上,我,们,经,受,了,疫,情,来,重,考,验,承,担,民,族,该,有,社,会,责,任,与,当,同,部,防,工,作,各,位,家,支,持,下,也,做,相,都,健,康,今,年,半,对,全,球,济,冲,击,航,市,场,首,大,型,乙,烷,输,船,建,造,项,目,提,供,帮,助,海,外,认,可,度,高,点,概,括,起,就,是,句,话,既,要,视,源,环,更,态,系,统,其,理,由,自,然,命,共,地,圈,中,包,类,需,和,撑,满,从,服,务,功,能,看,两,用,关,如,果,只,势,必,导,致,退,使,失,去,存,八,九,报,告,党,央,列,护,绿,水,青,山,说,良,好,续,发,根,本,基,础,维,升,质,量,稳,定,筹,林,田,天,湖,草,治,整,互,依
<File "FZYingXueJW_test.ttf" <Buffer 00 01 00 00 00 0e 00 80 00 03 00 60 4f 53 2f 32 50 1a 9a 22 00 00 00 ec 00 00 00 60 63 6d 61 70 34 c8 ea ac 00 00 01 4c 00 00 09 4a 63 76 74 20 00 15 ... 181038 more bytes>>
```

## cli

```
Options:
  -V, --version              output the version number
  -f, --files <files>        filter file
  -fp, --font-path <output>  font path from
  -o, --output <output>      output build font path
  -h, --help                 display help for command
```



## License

MIT © [xingtao](https://github.com/wuxingtao)


[npm-image]: https://badge.fury.io/js/filter-content.svg
[npm-url]: https://www.npmjs.com/package/filter-content
[travis-image]: https://travis-ci.com/filter-content.svg?branch=master
[travis-url]: https://travis-ci.com/filter-content
[daviddm-image]: https://david-dm.org/filter-content.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/filter-content
[license-image]: https://img.shields.io/github/license/wuxingtao/filter-content
