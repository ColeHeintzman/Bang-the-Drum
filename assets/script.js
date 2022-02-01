var dateFormEl = document.querySelector("#input-form");
var getSome = document.querySelector("#get-some");
var dateInput = document.querySelector("#searched-date");
var historyContainer = document.querySelector("#location-date-weather")
// var example = function (date) {
//   console.log(date)
//   getHistoricalEvents(date)
// }

var formSubmitHandler = function (event) {
  event.preventDefault();
  var dateVal = dateInput.value;
  console.log(dateVal);
  if (dateVal) {
    //console.log(queryCurrentURL);
    //example(dateVal);
    getHistoricalEvents(dateVal);
    dateInput.value = "";
  } else {
    alert("Please enter a Valid Date")
  }
}

var createHistory = function (textYear) {
  for (var i = 0; i < 5; i++) {
    var h4 = document.createElement("h4");
    var p = document.createElement("p");
    h4.textContent = textYear.events[i].text
    p.textContent = textYear.events[i].year
    historyContainer.appendChild(h4)
    historyContainer.appendChild(p)


  }

}

var getHistoricalEvents = function (date) {
  var historyURL = "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/" + date;
  console.log(historyURL)
  fetch(historyURL).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
      createHistory(data);
      data.events[0].text
    });

  });
}
//getHistoricalEvents();
getSome.addEventListener("click", formSubmitHandler);