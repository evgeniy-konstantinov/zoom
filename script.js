// const a = [8, 1, 1, 7, 4, 0];
// const b = [5, 8, 5, 4, 8];

// function testArray(a, b) {
//   // Тут нужно написать решение
//   let sumA = 0;
//   for (let i = 0; i < a.length; i++) {
//     sumA += a[i];
//   }
//   let sumB = 0;
//   for (let i = 0; i < b.length; i++) {
//     sumB += b[i];
//   }
//   return sumA + sumB;
// }
// console.log(testArray(a, b));

// const a = '1234';
// const b = '56789';
// let c = [...a, ...b];
// c.push('ivanov');
// c.reverse();
// c.join(', ');

// console.log(c);

// function testArray(a, b) {
//   // Тут нужно написать решение
//   let c = [...a, ...b];
//   c.unshift('Иванов');
//   c.reverse();
//   return c.join(', ');
// }
// let rs = testArray(a, b);
// console.log(rs);

// let a = '19 October 1909 10:27';
// let b = '28 March 1909 00:59';

// let c = new Date(a);
// console.log(c);
const lupa = document.querySelector('.zoom-img-cursor');
const board = document.querySelector('.zoom-img-block');
const zoomImg = document.querySelector('.zoom-img-overlay');

function setMousePosition(e) {
  const { clientX, clientY } = e;
  lupa.style.cssText = `left: ${clientX}px;top: ${clientY}px`;
  zoomImg.style.cssText = `background-position: ${clientX}, ${clientY}`;
  console.log(clientX, clientY);
  if (clientY > 400 || clientX > 400) {
    lupa.style.cssText = `display: none`;
  }
}

board.addEventListener('mousemove', setMousePosition);
// board.removeEventListener('mousemove', setMousePosition);
