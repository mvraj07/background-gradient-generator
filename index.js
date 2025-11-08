var buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
  handleButtonClick(event);
});
var copycontent = document.querySelector(".copycontent");
var copycontentElem = document
  .querySelector(".copycontent")
  .addEventListener("click", (event) => {
    navigator.clipboard.writeText(`${event.target.textContent}`);
  });

var handleButtonClick = (event) => {
  let hexarray = "123456789abcdef";
  var randomNumber = "";
  for (let a = 0; a < 6; a++) {
    randomNumber = randomNumber + hexarray[Math.floor(Math.random() * 15)];
    console.log(randomNumber);
  }

  if (event.target.name === "btn1") {
    let UnchangedColor = event.target.nextElementSibling.textContent;
    event.target.style.backgroundColor = `#${randomNumber}`;
    document.body.style.backgroundImage = `linear-gradient(135deg, #${randomNumber},${UnchangedColor})`;
    event.target.textContent = `#${randomNumber}`;
    copycontent.innerHTML = `${document.body.style.backgroundImage}`;
    navigator.clipboard.writeText(`${document.body.style.backgroundImage}`);
  } else if (event.target.name === "btn2") {
    let UnchangedColor = event.target.previousElementSibling.textContent;
    document.body.style.backgroundImage = `linear-gradient(135deg, ${UnchangedColor},#${randomNumber})`;
    event.target.textContent = `#${randomNumber}`;
    event.target.style.backgroundColor = `#${randomNumber}`;
    copycontent.innerHTML = `${document.body.style.backgroundImage}`;
    navigator.clipboard.writeText(`${document.body.style.backgroundImage}`);
  }
};
