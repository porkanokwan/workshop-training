console.log("promises");
// function delay() {
//     function count(num = 1) {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(num);
//                 resolve();
//             }, 2000);
//         })
//     };

//     count(1)
//     .then(() => {
//         return count(2);
//     })
//     .then(() => {
//         return count(3);
//     })
//     .then()
//     .catch((err) => {
//         console.log(err);
//     })
// }

// delay();

function delay1() {
    // code here
    setTimeout(() => {
        // or code here
        console.log('1');
        // or code here
    }, 500)
}

function delay2() {
    // code here
    setTimeout(() => {
        // or code here
        console.log('2');
        // or code here
    }, 200)
}

function delay3() {
    // code here
    setTimeout(() => {
        // or code here
        console.log('3');
        // or code here
    }, 1000)
}

function count(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            delay();
            resolve();
        }, 2000);
    })
};

count(delay1)
.then(() => count(delay2))
.then(() => count(delay3))
.catch(err => console.log(err))
