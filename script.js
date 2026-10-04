
const LINKS = {
  twitch: "https://www.twitch.tv/leonbait",
  youtube: "https://www.youtube.com/@leonbait",
  instagram: "https://www.instagram.com/byleonbait",
  facebook: "https://www.facebook.com/",
  tiktok: "https://www.tiktok.com/@leonbait",
  x: "https://x.com/",
  discord: "https://discord.gg/eVayB8UmK2"
};

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    const url = LINKS[key];

    if (url && url !== "#") {
      element.href = url;
      element.classList.remove("is-disabled");
    } else {
      element.href = "#";
      element.classList.add("is-disabled");
      element.addEventListener("click", (event) => {
        event.preventDefault();
      });
    }
  });
});
