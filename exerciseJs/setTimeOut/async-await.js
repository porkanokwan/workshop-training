console.log("async");
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

async function running() {
    await count(delay1);
    await count(delay2);
    await count(delay3);
};

running();