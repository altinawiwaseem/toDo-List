let ul = document.querySelector("ul");
let submit = document
  .querySelector("form")
  .addEventListener("submit", addToList);
let yetToDo = document.querySelector(".yet-to-do ul");
let finished = document.querySelector(".finished ul");

function addToList(e) {
  e.preventDefault();
  let userInput = document.querySelector("#user-data").value;
  if (!userInput == "") {
    let addItem = document.createElement("li");
    let itemText = document.createTextNode(userInput);
    addItem.appendChild(itemText);
    ul.appendChild(addItem);
    document.querySelector("#user-data").value = "";
    let span = document.createElement("span");
    let doneBtn = document.createElement("button");
    let cancelBtn = document.createElement("button");
    doneBtn.innerHTML = "✔️";
    cancelBtn.innerHTML = "✖️";
    span.appendChild(doneBtn);
    span.appendChild(cancelBtn);
    addItem.appendChild(span);
    doneBtn.addEventListener("click", () => {
      addItem.classList.add("done");
      finished.appendChild(addItem);
    });

    cancelBtn.addEventListener("click", () => {
      addItem.classList.remove("done");
      yetToDo.appendChild(addItem);
    }); 
  } else {
    document.querySelector("#user-data").placeholder =
      "Add your List Items Here";
  }
}
