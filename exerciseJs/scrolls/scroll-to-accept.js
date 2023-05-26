// เขียนแบบนี้อาจจะ error ว่า terms เป็น null ใช้ event ไม่ได้ ปัญหามี 2 สาเหตุ 
// 1.เขียน selecter ผิด 2.ปัญหาที่ querySelector ที่พบคือเป็นเรื่องปกติที่จะมี JavaScript บางตัวที่ทำงานเฉพาะในบางหน้าเท่านั้น
// const terms = document.querySelector(".terms-and-conditions");
// console.log(terms)
// terms.addEventListener("scroll", e => {
//     console.log(e)
// })

// แก้โดย
// function scrollToAccept() {
//     const terms = document.querySelector(".terms-and-conditions");
//     // check value of terms
//     if(!terms) {
//       return; //quit this there isn't that item on tha page
//     }
//     console.log(terms)
//     terms.addEventListener("scroll", e => {
//         console.log(e); // type:"scroll", currentTarget:null
//         console.log(e.currentTarget); // currentTarget: div.terms-and-conditions
//         console.log(e.target); // target: div.terms-and-conditions
//         console.log(e.currentTarget.scrollTop); // return ระยะทางว่าเลื่อนจาก top ลงมาเท่าไหร่แล้ว ยิ่งลงมาล่างจะยิ่งใกล้ความสูงของ scroll แต่จะไม่ได้ใกล้เป๊ะๆ เพราะว่า padding, margin ของแต่ละอันต่างกัน
//         console.log(e.currentTarget.scrollHeight); // บอกความสูงของ scroll 
//     })
// }
// scrollToAccept();

// Intersection Observer สามารถใช้ดูว่า มีบางสิ่งที่สามารถดูได้บนหน้านั้นหรือไม่
const terms = document.querySelector(".terms-and-conditions");
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
    console.log(payload);
    // console.log(payload[0].isIntersecting);
    console.log(payload[0].intersectionRatio);
    if(payload[0].intersectionRatio === 1) {
        button.disabled = false;
         // stop observing the button
        // ob.unobserve(terms.lastElementChild);
    }else {
        button.disabled = true
    }
}
// create Intersection Observer 
const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1
}); // callback นี้จะ run ทุกครั้งเพื่อเช็คถ้ามีอะไร run บนหน้า web
// ob.observe(watch);
ob.observe(terms.lastElementChild);