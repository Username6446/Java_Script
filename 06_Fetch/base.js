const gitHubUsers = 'https://api.github.com/users';
const apiPrivat = 'https://api.privatbank.ua/#p24/exchange';


const avatarImg = document.getElementById('avatar-id');

async function showGitHubUsers(url) {
    const response = await fetch(url);
    const json = await response.json();     
            console.log(json);     
            console.log(response.status);     
            console.log(json[0].login);     
            console.log(json[0].avatar_url);   
            avatarImg.src = json[0].avatar_url;  
}

async function showGitHubUserAvatar(login){
     const response = await fetch(gitHubUsers + '/' + login);
     const user = await response.json(); 
     avatarImg.src = user.avatar_url;
    }

//showGitHubUsers(apiPrivat);
showGitHubUsers(gitHubUsers);
// showGitHubUserAvatar('IliushynOlena');
// showGitHubUserAvatar('vladtymo');
// showGitHubUserAvatar('sunwini');
// showGitHubUserAvatar('andriigh');