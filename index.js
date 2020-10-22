const esprima = require("esprima");
const estraverse = require("estraverse");
const escodegen = require("escodegen");

let code = `const company = "advance"`;
//parser生成AST
const ast = esprima.parseScript(code);
console.log(ast);
//traverse对AST树遍历,进行增删改查
estraverse.traverse(ast, {
  enter: function (node) {
    node.name = "team";
    node.value = "atome";
  },
});
//更新后的AST转化成代码
const transformCode = escodegen.generate(ast);
console.log(ast);
console.log(transformCode);
