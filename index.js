// Recieves a function.
function callback(){
    return 'Hello World'
}

function receivesAFunction(callback){
    callback();
}

// Returns a named function.
function returnsANamedFunction(){
    return callback
}

// Returns an anonymouse function.
function returnsAnAnonymousFunction(){
    return function () {
        console.log("Hello World")
    }
}