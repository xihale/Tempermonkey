// ==UserScript==
// @name         httpImgs-upgrade
// @namespace    xihale
// @license      MIT
// @version      0.0.1
// @description  auto upgrade http imgs
// @author       xihale
// @match        coolapk.com
// @icon         https://pp.myapp.com/ma_icon/0/icon_10401327_1611306222/128
// @grant        none
// @run-at       document-start

// ==/UserScript==

(function () {
  "use strict";

  // Create a new meta element
  const meta = document.createElement("meta");

  // Set the http-equiv and content attributes
  meta.setAttribute("http-equiv", "Content-Security-Policy");
  meta.setAttribute("content", "upgrade-insecure-requests");

  // Append the meta element to the head
  document.head.appendChild(meta);
})();
