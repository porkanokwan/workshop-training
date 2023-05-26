const div = document.createElement("div");
div.classList.add = "wrapper";
document.body.appendChild(div);
const ul = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;
div.innerHTML = ul;
console.log(div);

const img = document.createElement('img');
img.src = 'https://picsum.photos/500';
img.width = 250;
img.alt = "Cutie pup";
img.classList.add("cute");
div.appendChild(img)

const ulElement = document.querySelector("ul");
console.log(ulElement);
const myHTML = `
<div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
</div>
`;
ulElement.insertAdjacentHTML("beforebegin", myHTML);

const myDiv = document.querySelector('.myDiv');
console.log(myDiv.children);
myDiv.children[1].classList.add("warning");
myDiv.firstElementChild.remove();

function generatePlayerCard(name, age, height){
    return `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>Their height is ${height} and  they are ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button">&times Delete</button>
    </div>
  `;
};

const card = document.createElement("div");
card.classList.add("cards");
let cardHTML = generatePlayerCard("wes", 12, 150);
cardHTML += generatePlayerCard("scott", 12, 150);
cardHTML += generatePlayerCard("kait", 12, 150);
cardHTML += generatePlayerCard("snickers", 12, 150);
card.innerHTML = cardHTML;
div.insertAdjacentElement("beforebegin", card);

const buttons = document.querySelectorAll('.delete');
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.parentElement.remove();
};
buttons.forEach(button => button.addEventListener("click", deleteCard));

console.log(`she\`s's so "cool"`);

const wes = document.querySelector(".wes");
wes.addEventListener("click", (e) => {
  // e.preventDefault();
  const shouldChangePage = confirm("Do you want to go?");
  console.log(shouldChangePage);
  if(!shouldChangePage) {
    // window.location = e.currentTarget.href;
    e.preventDefault();
  }
})

const signup = document.querySelector("[name=signup]");
console.log(signup);
signup.addEventListener("submit", e => {
  const name = e.currentTarget.name.value;
  if(name.includes("wes")) {
    alert("Can't access")
    e.preventDefault();
  }
  // console.dir(e.currentTarget);
  // console.log(e.currentTarget.email.value);
  // console.dir(e.currentTarget.agree);
//   console.dir(e.currentTarget[1].value);
})
function logEvent(e) {
  e.preventDefault();
  console.log(e.type);
}
signup.addEventListener("keyup", logEvent)
signup.addEventListener("keydown", logEvent)
signup.addEventListener("focus", e => {
  e.target.style.background  = "pink";
  console.log("focus")
}, true)
signup.addEventListener("blur", (e) => {
  e.target.style.background = '';
}, true)

const text = document.querySelector(".text");
function handleText(event) {
  console.log(event.key);
}
text.addEventListener("keyup", handleText)