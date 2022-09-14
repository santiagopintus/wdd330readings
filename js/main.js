import { links } from "./directory.js";

const loadLinks = () => {
  const $linksList = document.getElementById("linksList");
  const $navLinksList = document.getElementById("navWeeksList");

  for (let link of links) {
    /* ADD TO MAIN LIST */
    if ($linksList) {
      let $li = document.createElement("LI");
      $li.innerHTML = `
      <a href="${link.url}">
      ${link.label}
      </a>
      `;
      $li.classList.add("week-item");
      $linksList.appendChild($li);
    }

    if ($navLinksList) {
      /* ADD TO NAV LIST */
      let $navLi = document.createElement("LI");
      $navLi.innerHTML = `
      <a href="${link.url}">
        ${link.navLabel}
      </a>
      `;
      $navLinksList.appendChild($navLi);
    }
  }
};

document.addEventListener("DOMContentLoaded", loadLinks);
