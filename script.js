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
  document.querySelector("#img-zoomer-box").addEventListener(
    "mousemove",
    function (e) {
      let original = document.querySelector("#img-1"),
        magnified = document.querySelector("#img-2"),
        style = magnified.style,
        x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        imgWidth = original.offsetWidth,
        imgHeight = original.offsetHeight,
        xperc = (x / imgWidth) * 100,
        yperc = (y / imgHeight) * 100;

      //lets user scroll past right edge of image
      if (x > 0.01 * imgWidth) {
        xperc += 0.15 * xperc;
      }

      //lets user scroll past bottom edge of image
      if (y >= 0.01 * imgHeight) {
        yperc += 0.15 * yperc;
      }

      style.backgroundPositionX = xperc - 9 + "%";
      style.backgroundPositionY = yperc - 9 + "%";

      style.left = x - 180 + "px";
      style.top = y - 180 + "px";
    },
    false
  );
})();
