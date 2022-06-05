// create unOrder list && submit button
let ul = document.querySelector("ul");
let submit = document
  .querySelector("form")
  .addEventListener("submit", addToList);

  // select remind me and done category  
let yetToDo = document.querySelector(".yet-to-do ul");
let finished = document.querySelector(".finished ul");

function addToList(e) {
  e.preventDefault();
  let userInput = document.querySelector("#user-data").value;
  if (!userInput == "") {
      // create the list items
    let addItem = document.createElement("li");
    let itemText = document.createTextNode(userInput);
    addItem.appendChild(itemText);
    ul.appendChild(addItem);
    document.querySelector("#user-data").value = "";
    let span = document.createElement("span");
    let doneBtn = document.createElement("button");
    let remindMe = document.createElement("button");
    let cancelBtn = document.createElement("button");
    doneBtn.innerHTML = "✔️";
    remindMe.innerHTML = "⏰";
    cancelBtn.innerHTML = "🗑️";
    span.appendChild(doneBtn);
    span.appendChild(remindMe);
    span.appendChild(cancelBtn);
    addItem.appendChild(span);
    
    
    doneBtn.addEventListener("click", () => {
      addItem.classList.add("done");
      finished.appendChild(addItem);
      remindMe.innerHTML = "⏰";
      doneBtn.innerHTML = "";
    });
    remindMe.addEventListener("click", () => {
      addItem.classList.remove("done");
      yetToDo.appendChild(addItem);
      remindMe.innerHTML = "";
      doneBtn.innerHTML = "✔️";
    });

    cancelBtn.addEventListener("click", () => addItem.remove());
  } else {
    document.querySelector("#user-data").placeholder =
      "Add your List Items Here";
  }
}
