document.addEventListener("DOMContentLoaded", () => {
  //Dom elements;
  const quoteElm = document.getElementById("quote");
  const autherElm = document.getElementById("author");
  const svgFrameElm = document.getElementById("svgFrame");
  //colors for the background;
  var colors = [
    "#eeb76b",
    "#FFC720",
    "#a4ebf3",
    "#c6ebc9",
    "#fbe0c4",
    "#9ecca4",
    "#b4aee8",
    "#f2b4b4",
    "#ffab73",
    "#b8b5ff",
  ];
  //Get random quotes;
  async function getQuote() {
    var generateColor = Math.floor(Math.random() * colors.length);
    // Fetch API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (data) {
      // Display Quotes;
      quoteElm.textContent = data.content;
      autherElm.textContent = `- ${data.author}`;
      svgFrameElm.innerHTML = `<rect x="10" y="38" width="514.577" height="195.012" fill="${colors[generateColor]}"></rect>`;
    } else {
      quoteElm.textContent = "An error occured";
      console.log(data);
    }
  }
  button.addEventListener("click", getQuote);
  getQuote();
});
