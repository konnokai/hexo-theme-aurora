const pack = require('../../../package.json')

class SiteGenerator {
  data = {}

  constructor(configs) {
    configs.theme_config.version = pack.version
    // 要設定成 null 避免洩漏資訊，不然預設會把整個 _config.yml 給塞進去 site/json 裡面 ==
    configs.admin = null
    configs.server = null
    this.data = configs
  }

  addSiteConfig(data) {
    const configs = this.data
    data.push({
      path: 'api/site.json',
      data: JSON.stringify(configs)
    })
    return data
  }
}

module.exports = SiteGenerator
