const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const days = date.getUTCDate();
  // 업데이트 되는 모습을 보여주기위해 getseconds() 추가
  const seconds = date.getSeconds();
  // 시계를 매초마다 업데이트 하는 것을 위해 setInterval() 추가
  //   // setInterval(함수이름, 시간 간격)
  //   clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}h${
  //     minutes < 10 ? `0${minutes}` : minutes
  //   } m${seconds < 10 ? `0${seconds}` : seconds}`;
  clockTitle.innerText = `${days < 10 ? `0${days}` : days} 일 ${
    hours < 10 ? `0${hours}` : hours
  } 시 ${minutes < 10 ? `0${minutes}` : minutes} 분 ${
    seconds < 10 ? `0${seconds}` : seconds
  } 초`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
