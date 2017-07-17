const fs = require('fs')
const path = require('path')
const eggBin = require('egg-bin').DevCommand
const debug = require('debug')('dev')

// 读取.devrc文件中的 demo_server_port 字段作为服务器的启动端口
// 如果未配置则使用9000
const devrcPath = path.resolve(__dirname, '../.devrc')
let environment = []
if (fs.existsSync(devrcPath)) {
  environment = fs.readFileSync(devrcPath, 'utf8').split('\n')
} else {
  environment = [
    'dev_server_port=9000',
  ]
  fs.writeFileSync(devrcPath, environment.join('\n'))
}

let port
environment.forEach(item => {
  let line = item.split('=')
  if (line[0].trim() === 'dev_server_port') {
    port = line[1].trim()
  }
})
port = port || 9000
const baseDir = path.resolve(__dirname, '../')
const bin = new eggBin([baseDir, `--p=${port}`]).start()
