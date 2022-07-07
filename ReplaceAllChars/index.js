const FrmReplaceChar = document.getElementById("FrmReplaceChar");
const word = document.getElementById("word");
const replace_char = document.getElementById("replace_char");
const new_char = document.getElementById("new_char");

if (FrmReplaceChar) {
  FrmReplaceChar.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      word.value.replace(new RegExp(replace_char.value, "g"), new_char.value)
    );
  });
}
