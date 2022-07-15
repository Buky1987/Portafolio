(words = ["Desarrollador Front end", "Diseño de productos", "Diseño UI/UX"]),
  (wordWrapper = document.getElementById("mundo")),
  (wordWrapperContent = wordWrapper.innerHTML),
  (addingWord = false),
  (counter = 0);

setInterval(function () {
  if (wordWrapperContent.length > 1 && !addingWord) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if (addingWord) {
    if (wordWrapperContent.length < words[counter].length) {
      wordWrapper.innerHTML = words[counter].slice(
        0,
        wordWrapperContent.length + 1
      );
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if (counter < words.length) {
        counter++;
      }
      addingWord = false;
    }
  }

  if (counter == words.length) {
    counter = 0;
  }
}, 150);
