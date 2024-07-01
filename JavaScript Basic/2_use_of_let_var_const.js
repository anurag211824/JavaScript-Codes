function exampleFunction() {
    // var is function-scoped
    if (true) {
        var functionScoped = "I am function scoped";
        console.log(functionScoped); // Output: I am function scoped
    }
    console.log(functionScoped); // Output: I am function scoped

    // let is block-scoped
    if (true) {
        let blockScoped = "I am block scoped";
        console.log(blockScoped); // Output: I am block scoped
    }
    // console.log(blockScoped); // Error: blockScoped is not defined

    // const is block-scoped and cannot be reassigned
    if (true) {
        const blockScopedConstant = "I am a block scoped constant";
        console.log(blockScopedConstant); // Output: I am a block scoped constant

        // Trying to reassign a const variable will result in an error
        // blockScopedConstant = "New value"; // Error: Assignment to constant variable.
    }
    //console.log(blockScopedConstant); 
    // Error: blockScopedConstant is not defined
}

exampleFunction();
