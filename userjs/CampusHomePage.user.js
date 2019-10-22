// ==UserScript==
// @name     CustomCampusHomePage
// @version  1
// @include  ^https://dh.force.com/digitalCampus/CampusHomePage$
// @grant    none
// @run-at document-end
// ==/UserScript==
(() => {
  // ここにサイト読み込み時，実行するJavaScriptを書く．
  const customCSS = `
  #wrapper {
    width: auto;
  }
  #mainContents {
    width: auto;
    float: none;
    display: grid;
    grid-template-columns: repeat(2, 4fr);
    grid-template-rows: repeat(2, 4fr);
    grid-row-gap: 15px;
    grid-column-gap: 15px;
  }
`;
  const custumStyle = document.createElement('style');
  custumStyle.textContent = customCSS;
  document.body.appendChild(custumStyle);
})();
