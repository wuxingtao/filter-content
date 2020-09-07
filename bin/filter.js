#!/usr/bin/env node
require('module-alias/register');
const {program} = require('commander');
const fs_utils = require('../src/modules/filterText');
const fontMini = require('@src/modules/fontMini');

program.version(require('../package.json').version)
  .description('filterText cli program')
  .option('-f, --files <files>','filter file')
  .option('-fp, --font-path <output>','font path from')
  .option('-o, --output <output>','output build font path')
  // .arguments('<files> [env]')
  .action(function (files , env) {
    console.log(program.files)
    fs_utils.getFilesString({
      pattern: program.files.toString() ,
      lang: 'cn'
    }).then(data => {
      console.log('files string' , data);
      fontMini({
        text:data,
        src:program.fontPath,
        dest:program.output
      });
    });
  })
  .parse(process.argv);
