const LINKS = {
  twitch: "https://www.twitch.tv/leonbait",
  youtube: "https://www.youtube.com/@leonbait",
  instagram: "https://www.instagram.com/byleonbait",
  facebook: "https://www.facebook.com/",
  tiktok: "https://www.tiktok.com/@leonbait",
  x: "https://x.com/",
  discord: "https://discord.gg/eVayB8UmK2"
};


const APP_LINKS = {
  youtube: "youtube://www.youtube.com/@leonbait",
  instagram: "instagram://user?username=byleonbait",
  facebook: "fb://profile/",
  tiktok: "snssdk1233://user/profile/leonbait",
  x: "twitter://user?screen_name=leonbait",
  discord: "discord://-/invite/eVayB8UmK2",
  twitch: "twitch://channel/leonbait"
};

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    const webUrl = LINKS[key];
    const appUrl = APP_LINKS[key];

    if (!webUrl || webUrl === "#") {
      element.href = "#";
      element.classList.add("is-disabled");

      element.addEventListener("click", (event) => {
        event.preventDefault();
      });

      return;
    }

    element.classList.remove("is-disabled");

   
    if (!isMobile || !appUrl) {
      element.href = webUrl;
      return;
    }

   
    element.href = appUrl;

    element.addEventListener("click", () => {
      
      setTimeout(() => {
        window.location.href = webUrl;
      }, 1200);
    });
  });
});