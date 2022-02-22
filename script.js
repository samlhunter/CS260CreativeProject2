function onClick(e) {
  e.preventDefault();
  // get number submitted
  let numFacts = document.getElementById('number').value;

  let url = "https://cat-fact.herokuapp.com/facts";
  console.log(url);
  fetch(url)
    .then(function(response) {
      if (response.status != 200) {
        return {
          text: "Error calling API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      updateResults(json.text);
    });
}

function updateResults(info) {
  document.getElementsByClassName('results').textContent = info;
}

document.getElementById('submit').addEventListener('click', onClick);
