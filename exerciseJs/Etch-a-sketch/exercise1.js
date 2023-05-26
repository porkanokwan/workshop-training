const MOVE_AMOUNT = 10; // ที่ตั้งโดยใช้ Uppercase กับ _ เพราะ ตัวแปรนี้เป็น true constant จะไม่มีวันเปลี่ยนแปลง
const canva = document.querySelector("#etch-a-sketch");
const btnShake = document.querySelector(".shake");
// สั่งเพื่อเลือกใช้งาน context ใน canvas แบบ 2d (ctx จะเป็น context obj ที่เอาไว้วาดและสร้างกราฟฟิคต่างๆ) 
const ctx = canva.getContext("2d");
// ปลายเส้น 2 เส้นมาชนกันจะกำหนดให้เป็นแหลม(miter)/มน(round)/เหลี่ยม(bevel)
ctx.lineJoin = "round";
// กำหนดรูปแบบของเส้น เช่น round, square หรือ butt
ctx.lineCap = "round";
// กำหนดความหนาของเส้น
ctx.lineWidth = 10;

const {width, height} = canva;
// create random starting point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

let hue = 0;
function draw({ key }) {
    hue += 1;
    // กำหนดสีเส้น
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    // ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    //  สำหรับกำหนด path ว่าจะให้เริ่มวาด
    ctx.beginPath();
    //  หมายถึงเลื่อนดินสอไปยังตำแหน่งที่ต้องการ (จุดเริ่มต้น)
    ctx.moveTo(x, y);
    switch(key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case "ArrowRight":
            x += MOVE_AMOUNT;
            break;
        case "ArrowDown":
            y += MOVE_AMOUNT;
            break;
        case "ArrowLeft":
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
      }
    // หมายถึงว่าลากเส้นไปถึงตำแหน่งไหน (จุดสุดท้ายที่ยกมือ)
    ctx.lineTo(x, y);
    // จะวาดเส้นที่เรากำหนดตั้งแต่จุดเริ่มต้นจนถึงจุดสุดท้าย
    ctx.stroke();
    console.log(key);
}

// ทุกครั้งที่กดปุ่มลูกศรบนหน้าเว็บจะต้อง log ออกมา
function handleKey(e) {
    if (e.key.includes("Arrow")) {
        e.preventDefault();// ใส่เพราะปกติ action default ของปุ่มลูกศรคือการ scroll หน้า page แต่เราไม่ต้องการ
        draw({key: e.key})
      }
};
window.addEventListener("keydown", handleKey)

// clear or shake function
function clearCanvas() {
    canva.classList.add("shake");
    // วาดสี่เหลี่ยมให้เป็น transparent หรืออีกในหนึ่งก็คือการลบ content อื่นๆ (เหมือนเป็นยางลบ)
    ctx.clearRect(0, 0, width, height);
    canva.addEventListener("animationend", function() {
        console.log("done the shake!");
        canva.classList.remove("shake");
      },
    //   options เป็นตัวที่ช่วยลบ event listener นี้ให้อัตโนมัติหลังจากที่ animation ทำงานเสร็จแล้ว แต่ที่วาดไว้ข้างในยังอยู่
      { once: true }
    );
  }

btnShake.addEventListener('click', clearCanvas);

console.log(ctx.getImageData(255, 0, 119, 255)); // ClampedArray which is used when you have very, very, very large arrays. 4 parameter represent RGBA values