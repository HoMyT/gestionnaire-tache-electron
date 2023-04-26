
const switchBtn = document.querySelector('#darkThemeSwitch');
const elements = document.querySelectorAll("*");

switchBtn.addEventListener('change', () => {

    if (switchBtn.checked) {

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#333";
      elements[i].style.color = "white";
    }

    } else {
    for (let i = 0; i < elements.length; i++) {

      elements[i].style.backgroundColor = "white";
      elements[i].style.color = "black";
    }
    }
});
