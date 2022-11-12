import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Smug</b>
          </span>
          <span className="singlePostDate">1 Hour ago...</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          nulla facere fugiat odio dolor? Deleniti quasi blanditiis dolores
          consequuntur earum, harum optio soluta inventore architecto? Facere
          deleniti quae earum quos? Id nobis consequuntur perspiciatis atque
          deserunt veniam reprehenderit sequi, amet odit necessitatibus, eveniet
          esse dolore minima cumque at excepturi, voluptatem aliquid eum
          officiis quam debitis. Nam iste quam possimus. Officiis! Fuga, fugit
          minus laudantium nostrum corporis doloremque culpa veritatis
          accusantium? Nobis soluta ratione iste possimus sequi dolorum error ab
          doloribus, placeat sed, rerum eius iure. Vel ducimus dolor optio cum.
          Vel, hic dolor quidem consequatur expedita repellendus assumenda
          laudantium? Libero veniam enim accusamus non repellat placeat
          eligendi, labore aperiam blanditiis exercitationem magnam vero
          laboriosam fugiat fugit, a nihil perferendis error. Ratione quam
          mollitia neque suscipit similique doloribus, beatae, at, quod ipsum
          eaque pariatur nobis incidunt laudantium. Explicabo sapiente nihil
          harum numquam sequi voluptatem mollitia accusamus nam, molestiae est
          repellendus id! Distinctio assumenda eaque expedita similique, nihil
          molestias optio mollitia, aliquid voluptates animi impedit non quam
          veniam odio. Illo perferendis unde molestiae velit, ipsam deserunt?
          Vel ipsa asperiores itaque dignissimos similique? Ipsum porro
          necessitatibus possimus dolore quo iusto quod odit explicabo sunt,
          molestias, expedita laudantium nobis voluptatum corrupti assumenda nam
          culpa. Atque autem debitis facilis unde eligendi facere doloremque!
          Repellendus, dolore.
        </p>
      </div>
    </div>
  );
}
