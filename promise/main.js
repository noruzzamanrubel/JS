console.log('welecome to promise');
// const promise1 = new Promise((resolve, reject) => {
//     completedPromise = false;
//     if (completedPromise) {
//         resolve('Promise 1 is completed');
//     } else {
//         reject('Promise 1 is not completed');
//     }
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve('Promise 2 is completed');
// });


// promise1
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     }
//     );

// promise2
//     .then(res => {
//         console.log(res);
//     }
//     );

const TaskOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task One is completed');
        }, 1000);
    });
}
const TaskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task Two is completed');
        }, 2000);
    }
    );
}
const TaskThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Task Three is not completed');
        }, 3000);
    }

    );
}
const TaskFour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task Four is completed');
        }, 4000);
    }

    );
}


// TaskOne()
//     .then(res => console.log(res))
//     .then(TaskTwo)
//     .then(res => console.log(res))
//     .then(TaskThree)
//     .then(res => console.log(res))
//     .then(TaskFour)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


const run = async () => {
    try {
        const taskOne = await TaskOne();
        console.log(taskOne);
        const taskTwo = await TaskTwo();
        console.log(taskTwo);
        const taskThree = await TaskThree();
        console.log(taskThree);
        const taskFour = await TaskFour();
        console.log(taskFour);
    } catch (err) {
        console.log(err);
    }
}

run();

console.log('end to promise');