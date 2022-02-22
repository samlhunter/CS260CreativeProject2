function onClick(e) {
  e.preventDefault();
  let url = "https://cat-fact.herokuapp.com/facts";
  console.log(url);
  fetch(url)
    .then(function(response) {
      if (response.status != 200) {
        return {
          text: "Error calling API service: " + response.statusText
        }
      }
      console.log("Got response json");
      return response.json();
    }).then(function(json) {
      console.log("Updating results");
      console.log(json);
      updateResults(json[0]["text"]);
    });
}

function updateResults(info) {
  console.log("updating results in function");
  console.log(info);
  document.getElementById('results').innerText = info;
}

document.getElementById('submit').addEventListener('click', onClick);
