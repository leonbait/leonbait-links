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

  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    const webUrl = LINKS[key];

    if (!webUrl || webUrl === "#") {
      element.href = "#";
      element.classList.add("is-disabled");

      element.addEventListener("click", (event) => {
        event.preventDefault();
      });

      return;
    }

    element.classList.remove("is-disabled");

  
    if (isAndroid) {
      element.addEventListener("click", (event) => {
        event.preventDefault();

        if (key === "youtube") {
         
          window.location.href =
            "intent://www.youtube.com/@leonbait#Intent;scheme=https;package=com.google.android.youtube;end";

      
          setTimeout(() => {
            window.location.href = webUrl;
          }, 1500);

          return;
        }

        if (key === "twitch") {
          window.location.href = "twitch://channel/leonbait";

          setTimeout(() => {
            window.location.href = webUrl;
          }, 1500);

          return;
        }

        window.location.href = webUrl;
      });

      return;
    }

    if (isIOS) {
      element.addEventListener("click", (event) => {
        event.preventDefault();

        if (key === "youtube") {
          window.location.href = "youtube://www.youtube.com/@leonbait";

          setTimeout(() => {
            window.location.href = webUrl;
          }, 1500);

          return;
        }

        window.location.href = webUrl;
      });

      return;
    }

    element.href = webUrl;
  });
});