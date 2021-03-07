/* object.freeze 적용 할까? */

const MODE_POST = "POST";
const MODE_ALBUM = "ALBUM";

const toggleMode = () => {
  const post = document.querySelector(".post");
  const album = document.querySelector(".album");
  const currentMode = document.querySelector(".current-mode");

  currentMode.textContent =
    currentMode.textContent === MODE_ALBUM ? MODE_POST : MODE_ALBUM;

  post.classList.toggle("invisible");
  album.classList.toggle("invisible");
};

const initToggle = () => {
  const toggleButton = document.querySelector("#checkbox");
  toggleButton.addEventListener("click", toggleMode);
};

export default initToggle;
