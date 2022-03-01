const showTime = () => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let session = "AM";

  hours >= 12 ? (session = "PM") : session;
  hours < 10 ? (hours = "0" + hours) : hours;
  minutes < 10 ? (minutes = "0" + minutes) : minutes;
  seconds < 10 ? (seconds = "0" + seconds) : seconds;

  let time = hours + ":" + minutes + ":" + seconds + " " + session;
  document.getElementById("ClockDisplay").innerText = time;
  document.getElementById("ClockDisplay").textContent = time;

  setTimeout(showTime, 1000); //async funtion
};

showTime();

const showCurrentDate = () => {
  let date = new Date();
  let dayOfTheWeek = date.toLocaleString("en-US", { weekday: "long" });
  let day = date.getDate();
  let month = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();

  let currentDate = dayOfTheWeek + " " + day + " " + month + " " + year;

  document.getElementById("DateDisplay").innerText = currentDate;
  document.getElementById("DateDisplay").textContent = currentDate;
};

showCurrentDate();
