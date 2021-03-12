import initToggle from "./src/modules/toggle.js";
import FetchAPI from "./src/utils/service.js";

const FETCH_URL = "https://jsonplaceholder.typicode.com";
const fetchAPI = new FetchAPI(FETCH_URL);
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

console.log(postTest);
console.log(albumTest);
