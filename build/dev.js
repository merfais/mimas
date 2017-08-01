const fs = require('fs')
const path = require('path')
const eggBin = require('egg-bin').DevCommand
const debug = require('debug')('dev')
const {
  port,
} = require(path.resolve(__dirname, './loadrc.js'))

const baseDir = path.resolve(__dirname, '../')
const bin = new eggBin([baseDir, `--p=${port}`]).start()
