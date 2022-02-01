var dateFormEl = document.querySelector("#city-form");


var formSubmitHandler = function(event) {
    event.preventDefault();
    var date = document.querySelector("#search-date").value;
    console.log(date);
    if (date) {
      //console.log(queryCurrentURL);
      getHistoricalEvents(date);
      inputFormEl.value="";
    }else{
      alert("Please enter a Valid Date")
    }
  }

 var getHistoricalEvents = function (date) {
    var historyURL = "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/" + date;
    fetch(historyURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data)
        });
    
    });
}
 getHistoricalEvents();