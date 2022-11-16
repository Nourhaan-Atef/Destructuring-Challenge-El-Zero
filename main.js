/*
  Destructuring
  - Challenge
*/

let btnOne = document.getElementById("one");
let btnTwo = document.getElementById("two");
let btnThree = document.getElementById("three");

let container = document.createElement("div");
let PersonName = document.createElement("div");
let PersonAge = document.createElement("div");
let PersonAvaiablity = document.createElement("div");
let PersonSkill = document.createElement("div");

container.setAttribute("class", "container");
PersonName.setAttribute("class", "ans");
PersonAge.setAttribute("class", "ans");
PersonAvaiablity.setAttribute("class", "ans");
PersonSkill.setAttribute("class", "ans");

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [first, secand, third] = myFriends;

btnOne.addEventListener("click", () => {
  let obj = first;
  main(obj);
});

btnTwo.addEventListener("click", () => {
  let obj = secand;
  main(obj);
});

btnThree.addEventListener("click", () => {
  let obj = third;
  main(obj);
});

function main(obj) {
  let {
    title: name,
    age,
    available,
    skills: [, last],
  } = obj;
  PersonName.innerHTML = `My Name is <span>${name}</span>`;
  PersonAge.innerHTML = `My age is <span>${age}</span>`;
  PersonAvaiablity.innerHTML = `I am <span> ${
    available == true ? "Available" : "Not availabel"
  }</span> `;
  PersonSkill.innerHTML = `My Last Skill is <span>${last}</span> `;
  container.appendChild(PersonName);
  container.appendChild(PersonAge);
  container.appendChild(PersonAvaiablity);
  container.appendChild(PersonSkill);
  document.body.appendChild(container);
}
