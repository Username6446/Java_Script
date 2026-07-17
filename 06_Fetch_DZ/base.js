const searchInput = document.getElementById("searchInput");
const userInfo = document.getElementById("userInfo");
const errorMsg = document.getElementById("errorMsg");
const avatarImg = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const loginEl = document.getElementById("login");
const urlEl = document.getElementById("url");
const blogEl = document.getElementById("blog");
const cityEl = document.getElementById("city");
const emailEl = document.getElementById("email");
const followersEl = document.getElementById("followers");
const followingEl = document.getElementById("following");

searchInput.addEventListener("change", async (event) => {
    const username = event.target.value.trim();
    
    if (!username) return;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            userInfo.style.display = "none";
            errorMsg.style.display = "block";
            return;
        }

        const user = await response.json(); 

        errorMsg.style.display = "none";
        userInfo.style.display = "flex";

        avatarImg.src = user.avatar_url;
        nameEl.textContent = user.name;
        loginEl.textContent = user.login;
        
        urlEl.href = user.html_url;
        urlEl.textContent = user.html_url;
        
        blogEl.href = user.blog;
        blogEl.textContent = user.blog;
        
        cityEl.textContent = user.location;
        emailEl.textContent = user.email;
        followersEl.textContent = user.followers;
        followingEl.textContent = user.following;

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
});