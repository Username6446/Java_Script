const gitHubUsers = "https://api.github.com/users";
const avatarImg = document.getElementById("avatar");

async function showGitHubUsers() {
    const response = await fetch(gitHubUsers);
    const json = await response.json();
    console.log(json);
    console.log(response.status);
    console.log(json[0].login);
    console.log(json[0].avatar_url);

    avatarImg.src = json[0].avatar_url;

}



// async function showGitHubUserAvatar() {

//     const response = await fetch(gitHubUsers);
//     const user = await response.json();
//     console.log(user[0].avatar_url);
// }
showGitHubUsers();