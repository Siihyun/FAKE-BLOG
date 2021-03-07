class FetchAPI {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getPOST = async () => {
    try {
      const response = await fetch(this.baseURL + "/posts");
      const posts = await response.json();

      if (response.ok) return posts;
      else throw new Error(posts);
    } catch (err) {
      console.log(err);
      alert("post 갱신에 실패하였습니다. 다시 시도해 주세요.");
      return "failed";
    }
  };

  getCOMMENT = async () => {
    try {
      const response = await fetch(this.baseURL + "/comments");
      const comments = await response.json();

      if (response.ok) return comments;
      else throw new Error(comments);
    } catch (err) {
      console.log(err);
      alert("댓글 갱신에 실패하였습니다.");
      return "unknown";
    }
  };

  getAlbum = async () => {
    try {
      const response = await fetch(this.baseURL + "/albums");
      const albums = await response.json();

      if (response.ok) return albums;
      else throw new Error(albums);
    } catch (err) {
      alert("앨범 갱신에 실패하였습니다. 잠시후 다시 시도해 주세요");
    }
  };

  getPhoto = async () => {
    try {
      const response = await fetch(this.baseURL + "/photos");
      const data = await response.json();
      if (response.ok) return data;
      else throw new Error(data);
    } catch (err) {
      alert("사진 갱신에 실패하였습니다");
    }
  };
}

export default FetchAPI;
