const loadGithubUsers = () => {
  fetch("https://api.github.com/users?per_page=10")
    .then((res) => res.json())
    .then((result) => {
      displayUser(result);
    });
};

const displayUser = (data) => {
  const parent = document.getElementById("user-cotnainer");
  console.log(data);

  data.forEach((user) => {
    fetch(user.followers_url)
      .then((res) => res.json())
      .then((data) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
          <img class="card-img" src=${user.avatar_url} alt="">
          <h4>${user.login}</h4>
          <div>FOllowers:
          <img class="card-imgf" src=${data[0].avatar_url} alt="">
          <img class="card-imgf" src=${data[1].avatar_url} alt="">
          </div>
          <div>
              <link>${user.repos_url}</link>
          </div


          `;
        parent.appendChild(div);
      });
  });
};
