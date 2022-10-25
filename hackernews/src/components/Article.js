import React from "react";

const Article = ({ title, url, points, author, created_at, num_comments }) => {
  return (
    <div className="search-result-container">
      <article className="search-article">
        <div className="article-top">
          <span>{title}</span>
          <span>{url}</span>
        </div>
        <div className="article-bottom">
          <span>
            <span href=""> {points} points </span>
            <span>|</span>
          </span>
          <span>
            <span href=""> {author}</span>
            <span>|</span>
          </span>
          <span>
            <span href=""> {created_at} years ago</span>
            <span>|</span>
          </span>
          <span>
            <span href=""> {num_comments} comments</span>
            <span>|</span>
          </span>
        </div>
      </article>
    </div>
  );
};

export default Article;
