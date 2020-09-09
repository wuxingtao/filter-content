#!/usr/bin/env node

const {program} = require('commander');
const fs_utils = require('../src/modules/filterText');
const fontMin = require('../src/modules/fontMin');

program.version(require('../package.json').version)
  .description('filterText cli program')
  .option('-f, --files <files>','filter file')
  .option('-fp, --font-path <output>','font path from')
  .option('-o, --output <output>','output build font path')
  // .arguments('<files> [env]')
  .action(function (files , env) {
    console.log(program.files)
    if(!program.files){
      return
    }
    fs_utils.getFilesString({
      pattern: program.files.toString() ,
      lang: 'cn'
    }).then(data => {
      console.log('files string' , data);
      fontMin({
        text:data,
        src:program.fontPath,
        dest:program.output
      });
    });
  })
  .parse(process.argv);
