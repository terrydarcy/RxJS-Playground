//https://www.youtube.com/watch?v=2LCo926NFLI&ab_channel=Fireship
const { fromEvent } = rxjs;
const { scan, throttleTime, map } = rxjs.operators;

function print(toPrint) {
  document.getElementById().innerHTML += toPrint;
}

// document.addEventListener('click', () => console.log('Clicked!'));

// fromEvent(document, 'click').subscribe(() => console.log('Clicked with subscriber!'));

// let count = 0;
// document.addEventListener('click', () => console.log(`Clicked ${++count} times`));

// fromEvent(document, "click")
//   .pipe(scan((count) => count + 1, 0))
//   .subscribe((count) => console.log(`Clicked ${count} times`));

// Flow Operators-----------------------------------------------------

// let count = 0;
// let rate = 1000;
// let lastClick = Date.now() - rate;
// document.addEventListener("click", () => {
//   if (Date.now() - lastClick >= rate) {
//     console.log(`Clicked ${++count} times`);
//     lastClick = Date.now();
//   }
// });

// fromEvent(document, 'click')
//   .pipe(
//     throttleTime(1000),
//     scan(count => count + 1, 0)
//   )
//   .subscribe(count => console.log(`Clicked ${count} times`));

// let count = 0;
// const rate = 1000;
// let lastClick = Date.now() - rate;
// document.addEventListener("click", (event) => {
//   if (Date.now() - lastClick >= rate) {
//     count += event.clientX;
//     console.log(count);
//     lastClick = Date.now();
//   }
// });
 
fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map(event => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe(count => console.log(count));