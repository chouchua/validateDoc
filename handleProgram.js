function handleProgram(){
    this.commands = {};
    this.args = [];
    
}

handleProgram.prototype.addCommand = function(name,fnc){
    this.commands[name] = fnc;
}

handleProgram.prototype.call = function(functionName){
    if (this.commands[functionName]!=null){
        console.log('calling ' + functionName);
    }
    else{

    }
}
module.exports = new handleProgram;