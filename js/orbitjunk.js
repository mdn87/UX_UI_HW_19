let canvas = document.getElementById("orbitCanvas");
let ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

let tail;

let orb = document.getElementById("orb");

let last = Date.now();

class Tail {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tx = 1;
    this.ty = 1;
    this.lastx = x;
    this.lasty = x;
  }

  move(tx, ty) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(tx, ty);
    ctx.stroke();
    this.x = tx;
    this.y = ty;
    this.tx = tx;
    this.ty = ty;
  }
}

let startAnimation = () => {
  let newOffset = getOffset(orb);
  //tail.move(newOffset.left, newOffset.top);
  window.requestAnimationFrame(startAnimation);
};

window.onload = function () {
  let offset = getOffset(orb);
  //tail = new Tail(offset.left, offset.top);
  window.requestAnimationFrame(startAnimation);
};

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX + 25,
    top: rect.top + window.scrollY + 25,
  };
}
