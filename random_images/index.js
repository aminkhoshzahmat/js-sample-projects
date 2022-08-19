
const teams = document.getElementById("teams");
const totalMembers = 8;
const imgPath = "images/teams/";
const changeSpeed = 2000; // also change the transition in style.css

for (let i = 0; i < totalMembers; i++) {
  let imgElement = document.createElement("img");
  imgElement.id = `img-${i}`;
  imgElement.src = `${imgPath}${i}.jpg`;
  teams.appendChild(imgElement);
}

function changeOneTeamMember() {
  let randomTeam = Math.floor(Math.random() * totalMembers);
  let randomChange = Math.floor(Math.random() * totalMembers);

  teams.childNodes[randomTeam].classList.add("down");

  setTimeout(() => {
    teams.childNodes[randomTeam].src = `${imgPath}${randomChange}.jpg`;
    teams.childNodes[randomTeam].classList.remove("down");
  }, changeSpeed/2);
}

setInterval(changeOneTeamMember, changeSpeed);
