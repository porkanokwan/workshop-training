console.log("callback");
// function delay() {
//     setTimeout(() => {
//         console.log(1),
//         setTimeout(() => {
//             console.log(2);
//         },
//         setTimeout(() => {
//             console.log(3);
//         }, 2000)
//         )
//     }
//     , 2000);
// };

// delay();
// print console ออกมาเป็๋น 1, 2, 3 ตามลำดับ
// แก้ delay function ได้ตามสบายแต่ให้ console อยุ่ใน set timeout เสมอ
// ห้ามแก้เวลาใน set timeout

function delay1() {
    // code here
    setTimeout(() => {
        // or code here
        console.log('1');
        delay2();
        // or code here
    }, 500)
}

function delay2() {
    // code here
    setTimeout(() => {
        // or code here
        console.log('2');
        delay3();
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

delay1()