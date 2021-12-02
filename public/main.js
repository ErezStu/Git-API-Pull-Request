const pullRequestDisplay = document.querySelector(".pull-request");
const pullRequest = document.querySelector("#pull-form");
const pullInput = document.querySelector("#pull-input");

// Fetching data from the server
const fetchPullRequest = async (pull) => {
  const url = `/git/?${pull}`;

  const res = await fetch(url);

  const data = await res.json();

  if (data.title === undefined) {
    alert("Invalid pull number");
    return;
  }

  ShowPullRequest(data);
};

const ShowPullRequest = (data) => {
  pullRequestDisplay.innerHTML = `
  <h1>pull name: ${data.title}</h1>
  <h3>pull number: ${data.number}</h3>
  `;
};

pullRequest.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pullInput.value === "") {
    alert("Please enter pull number");
  } else {
    fetchPullRequest(pullInput.value);
  }
});

// the default pull is 1
fetchPullRequest("1");
