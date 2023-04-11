import React from "react";
import Fetch from "../Fetch";

function Blog() {

  const { posts } = Fetch()

  return (
    <div id="blog">
      <h2 className="headings">BLOG</h2>
      <div className="row">
        {posts[0] && posts[0].map((post) => {
          return (
            <div className="box" key={post.uid}>
              <h5 className="title">{post.title}</h5>
              <img className="image" src={post.food_image[0].url} alt="post" /><br></br>
              <p className="description">{post.description}</p><br></br>
              <div className="info">
                <h4 className="address_link"><a href={post.address_link.href}>{post.address_link.title}</a></h4><br></br>
                <h4 className="place">- {post.address}</h4>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default Blog;