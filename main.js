import initToggle from "./src/modules/toggle.js";
import FetchAPI from "./src/utils/service.js";

const fetchAPI = new FetchAPI("https://jsonplaceholder.typicode.com");
const post = document.querySelector(".post");
const album = document.querySelector(".album");

const init = () => {
  initToggle();
  // initPost();
};

init();

const postTest = await fetchAPI.getPOST();
const albumTest = await fetchAPI.getAlbum();

post.innerHTML = postTest.map((post) => post.title).join("");
album.innerHTML = albumTest.map((album) => album.title).join("");

console.log(albumTest);
