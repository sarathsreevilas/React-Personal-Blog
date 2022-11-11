import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        exercitationem sed, vel praesentium ut aperiam et maxime architecto
        commodi libero, quibusdam sint, cum possimus sapiente! Quaerat quidem
        quam quis dolorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        exercitationem sed, vel praesentium ut aperiam et maxime architecto
        commodi libero, quibusdam sint, cum possimus sapiente! Quaerat quidem
        quam quis dolorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        exercitationem sed, vel praesentium ut aperiam et maxime architecto
        commodi libero, quibusdam sint, cum possimus sapiente! Quaerat quidem
        quam quis dolorem
      </p>
    </div>
  );
}
