const btnCheck = document.getElementById("btnCheck");
const word = document.getElementById("word");
const checks = document.getElementsByClassName("checks");

if (btnCheck) {
  btnCheck.addEventListener("click", (e) => {
    for (let i = 0; i < checks.length; i++) {
      if (checks[i].value === word.value) {
        checks[i].checked = true;
      } else {
        checks[i].checked = false;
      }
    }
  });
}
