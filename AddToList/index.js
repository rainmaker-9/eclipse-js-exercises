const FrmAddToList = document.getElementById("FrmAddToList");
const username = document.getElementById("name");
const namelist = document.getElementById("namelist");
const result = document.getElementById("result");
const names = [];

if (FrmAddToList) {
  FrmAddToList.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username.value.trim() != "") {
      if (names.findIndex((item) => item === username.value) === -1) {
        names.push(username.value);
        loadList();
        result.textContent = "Looks good!";
        result.classList.remove("danger");
        result.classList.add("success");
        FrmAddToList.reset();
      } else {
        result.textContent = "Already exists!";
        result.classList.remove("success");
        result.classList.add("danger");
      }
    }
  });
}

function loadList() {
  namelist.innerHTML = "";
  if (names.length > 0) {
    names.forEach((name) => {
      let listItem = document.createElement("li");
      listItem.textContent = name;
      namelist.appendChild(listItem);
    });
  }
}
