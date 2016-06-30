//read file 
var fs = require('fs');
//use doctrine library to parse function docs
var doctrine = require("doctrine");
//use esprima library to 
var esprima = require("esprima");
//use estraverse library to traverse AST.
var estraverse = require("estraverse");
//we can use extraverse to traverse the ast, but we choose not to here.

//yet to become an nodejs package.
//
//refer to registry: ... 
var program = require('./handleProgram');
console.log(process.argv);
var startProgram = program(process.argv);

var utils = require('./utils');
var content = 'bla';
var utility = new utils();
utility.logger('log it...');
utility.export('test.txt',content);

startProgram.addCommand('demo',runSimpleExample);

if (process.argv[2]=='demo'){
    runSimpleExample();
    //start with simple example
    var simpleExample = "/**\n * This is a simple example \n * @param {string} exampleParam example description \n * @return {bool} \n*/"
    //console.log(String.raw`parsing ${simpleExample}`);
    console.log(simpleExample);

    var ast = doctrine.parse(simpleExample,{unwrap:true});
    console.log(ast);
    //we will wrap the doc parser in a function, such that it . Function is declared below.
}
else{

}

console.log(process.argv.length);
var targetFile = './test.js';
console.log("reading target");
var content = fs.readFileSync(targetFile);
esprimaWrapper(content);

function runSimpleExample() {
    
}
/**
 * @param {string} comment
 * @return {bool}
 */
function parseComment(comments){
    params = [];
    comment.forEach(function(comment){
        var data = doctrine.parse(comment,{unwrap:true});
        data.tags.forEach(function(tag){
            if(tag.title == 'param'){
                params.push(tag.name);
            }
        });
    });
    
}

//we need to feed the doc parser all the docs of the module, achieved by esprima's 
/**
 * 
 */
function esprimaWrapper(code){
    var ast = esprima.parse(code,{attachComment:true,loc:true})
    JSON.stringify(ast);
    console.log(ast);
}

/**
 * Accepts root node and a function
 * @param {node} rootNode
 * @param {function} func
 */
function traverse(node,func){

}