const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  // 이미지 불러오는 거는 image 객체 쓰면 됨.
  const image = new Image();
  image.src = `images/image${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  //   이미지 뿌리기
  body.prepend(image);
}

// 랜덤 난수 생성
// ceil은 올림 floor는 버림(나머지를 버림)
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
