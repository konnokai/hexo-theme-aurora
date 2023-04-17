const { throwInfo } = require('./lib/helpers/utils')

require('./lib/filters')(hexo)
require('./lib/generators')(hexo)
require('./lib/injector')(hexo)

throwInfo(
  'Aurora Generator',
  `Start Generator`
)
