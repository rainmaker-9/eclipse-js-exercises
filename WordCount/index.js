const FrmWordCounter = document.querySelector("#FrmWordCounter");
const sentence = document.getElementById("sentence");
const word = document.querySelector("#word");
const wordCount = document.querySelector("#wordCount");

if (FrmWordCounter) {
  FrmWordCounter.addEventListener("submit", (e) => {
    e.preventDefault();
    if (sentence.value.trim() != "" && word.value.trim() != "") {
      let wordCollection = sentence.value.split(" ");
      let count = 0;
      // wordCollection.forEach((item) => {
      //   if (item === word.value) count++;
      // });
      for (let i = 0; i < wordCollection.length; i++) {
        if (wordCollection[i] === word.value) count++;
      }
      wordCount.textContent = `Number of occurences of "${word.value}" in above sentence = ${count}`;
    }
  });
}
