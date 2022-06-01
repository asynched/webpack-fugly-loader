const Compiler = require('./compiler')

module.exports = function (contents) {
  const compiler = Compiler.fromDefaults()
  return compiler.compile(contents)
}
