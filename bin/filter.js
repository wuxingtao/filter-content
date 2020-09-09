#!/usr/bin/env node

const {program} = require('commander');
const filter = require('../src/modules/filterText');

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
    filter.getFilesString({
      pattern: program.files.toString() ,
      lang: 'cn'
    }).then(data => {
      console.log('files string' , data);
      if(program.fontPath){
        filter.fontHelp({
          text:data,
          src:program.fontPath,
          dest:program.output
        });
      }
    });
  })
  .parse(process.argv);
