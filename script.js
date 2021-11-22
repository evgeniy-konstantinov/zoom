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
let IS_ON = false;

document.querySelector('#img-2').addEventListener('mousedown', (e) => {
  e.preventDefault();
  IS_ON = true;
  console.log(IS_ON);
});

document.querySelector('#img-2').addEventListener('mouseup', () => {
  IS_ON = false;
  console.log(IS_ON);
});

let zoomer = function () {
  document
    .querySelector('#img-zoomer-box')
    .addEventListener('mousemove', function (e) {
      if (IS_ON) {
        let original = document.querySelector('#img-1');
        let magnified = document.querySelector('#img-2');
        style = magnified.style;

        //получаем точку входа мыши, вычисляя позицию страницы за вычетом смещения элемента
        x = e.pageX - this.offsetLeft;
        y = e.pageY - this.offsetTop;

        //получаем исходный размер изображения и вычисляем процент, где находится наша мышь
        imgWidth = original.offsetWidth;
        imgHeight = original.offsetHeight;
        xPercent = (x / imgWidth) * 100;
        yPercent = (y / imgHeight) * 100;

        //позволяет пользователю прокручивать за правый край изображения
        if (x > 0.01 * imgWidth) {
          xPercent += 0.15 * xPercent;
        }

        //позволяет пользователю прокручивать за нижний край изображения
        if (y >= 0.01 * imgHeight) {
          yPercent += 0.15 * yPercent;
        }

        style.backgroundPositionX = xPercent - 9 + '%'; //Устанавливаю горизонтальный фон увеличенного изображения
        style.backgroundPositionY = yPercent - 9 + '%'; //Устанавливаю вертикальный фон увеличенного изображения

        // Перемещение увеличительного стекла движением мыши

        style.left = x - 180 + 'px';
        style.top = y - 180 + 'px';
      }
    });
};
zoomer();
