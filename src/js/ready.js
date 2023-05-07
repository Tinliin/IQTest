const hidden = document.getElementById("hidden");
window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    hidden.className = "visible";
  } else {
    hidden.className = "hidden";
  }
});

function timer(minutes) {
  let seconds = minutes * 60;

  const timer = setInterval(function () {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    document.getElementById("count_down").innerHTML =
      min + ":" + sec + " минут";

    if (seconds <= 0) {
      clearInterval(timer);
      document.getElementById("count_down").innerHTML = "Время вышло!";
    } else {
      seconds--;
    }
  }, 1000);
}

timer(10);

const callBtn = document.querySelector(".call_button");
const url = "https://swapi.dev/api/people/1/";
callBtn.addEventListener("click", function () {
  fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Ошибка HTTP: " + response.status);
      }
    })
    .then(function (data) {
      const results = document.getElementById("results");
      for (const key in data) {
const prop = document.createElement("p");
prop.className = "property";
prop.innerText = key + ":  " + data[key];
            results.append(prop);
      };
    })
    .catch(function (error) {
      console.log("Произошла ошибка:", error);
    });
});
