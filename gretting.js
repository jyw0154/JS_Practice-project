const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
//쿼리셀렉터, 애니셀렉터,
// local storage : 유저 컴퓨터에 저장하는 방법.
// 작은 자바스크립트 정보들을 ex)시계 = 오전/오후(true/false)로 바꾸는 것 같은

const USER_LS = "currentUser";
const SHOWING_ON = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  // 디폴트를 방지하는 이벤트를 실행.
  //  input.placeholder = ""
  //   input.value = "";
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName();
  } else {
    // hse is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
