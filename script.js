// const lupa = document.querySelector(".zoom-img-cursor");
// const board = document.querySelector(".zoom-img-block");
// const zoomImg = document.querySelector(".zoom-img-overlay");

// function setMousePosition(e) {
//   const { clientX, clientY } = e;
//   lupa.style.cssText = `left: ${clientX}px;top: ${clientY}px`;
//   zoomImg.style.cssText = `background-position: ${clientX}, ${clientY}`;
//   console.log(clientX, clientY);
//   if (clientY > 400 || clientX > 400) {
//     lupa.style.cssText = `display: none`;
//   }
// }

// board.addEventListener("mousemove", setMousePosition);
// board.removeEventListener('mousemove', setMousePosition);

let zoomer = (function () {
  document
    .querySelector("#img-zoomer-box")
    .addEventListener("mousemove", function (e) {
      let original = document.querySelector("#img-1");
      let magnified = document.querySelector("#img-2");
      style = magnified.style;

      x = e.pageX - this.offsetLeft; //получаем точку входа мыши, вычисляя позицию страницы за вычетом смещения элемента
      y = e.pageY - this.offsetTop;

      imgWidth = original.offsetWidth;
      imgHeight = original.offsetHeight; //получаем исходный размер изображения и вычисляем процент, где находится наша мышь
      xPercent = (x / imgWidth) * 100;
      yPercent = (y / imgHeight) * 100;

      //lets user scroll past right edge of image
      if (x > 0.01 * imgWidth) {
        xPercent += 0.15 * xPercent;
      }

      //lets user scroll past bottom edge of image
      if (y >= 0.01 * imgHeight) {
        yPercent += 0.15 * yPercent;
      }

      style.backgroundPositionX = xPercent - 9 + "%"; //Устанавливаю горизонтальный фон увеличенного изображения
      style.backgroundPositionY = yPercent - 9 + "%"; //Устанавливаю вертикальный фон увеличенного изображения

      style.left = x - 180 + "px"; // Перемещение увеличительного стекла движением мыши
      style.top = y - 180 + "px";
    });
})();
