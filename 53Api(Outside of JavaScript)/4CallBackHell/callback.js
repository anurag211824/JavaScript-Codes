function task1(callback) {
    setTimeout(() => {
        console.log("Task One completed");
        callback();
    },);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task Two completed");
        callback();
    },);
}


task1(function () {
    task2(function () {
        console.log("Both tasks completed");
    });
});
