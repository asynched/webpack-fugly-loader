const evalExpr = /\<\$\=(.+?)\$\>/g
const expr = /\<\$([\s\S]+?)\$\>/g
const empty = /echo\(``\);/g

class Compiler {
  /**
   * Compiles the template code.
   * @param { string } code Code to be compiled.
   */
  compile(code) {
    const compiled = code
      .replace(evalExpr, '`);\necho($1);\necho(`')
      .replace(expr, '`);\n$1\necho(`')

    const result = 'echo(`' + compiled + '`)'.replace(empty, '')

    const fn = new Function(
      'view',
      `let output = ''\nfunction echo(value) {\n\toutput += value\n}\n${result}\nreturn output;`
    )

    return (`export default ` + fn.toString() + ';').replace(/(\s){2,}/g, '')
  }

  static fromDefaults() {
    return new Compiler()
  }
}

module.exports = Compiler
