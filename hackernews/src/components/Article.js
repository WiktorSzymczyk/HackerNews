import React from "react";

const Article = ({ hits, text }) => {
  const filtered = hits.filter((x) => {
    console.log(x);
    return (
      x.title?.includes(text) ||
      x.author?.includes(text) ||
      x.url?.includes(text)
    );
  });

  const article = filtered.map(
    ({ title, url, points, author, created_at, num_comments }, index) => {
      return (
        <article className="search-article" key={index}>
          <div className="article-top">
            <span className="article-title">{title}</span>
            <a className="article-url" href={url}>
              {url}
            </a>
          </div>
          <div className="article-bottom">
            <span href=""> {points} points </span>
            <span>|</span>
            <span href=""> {author}</span>
            <span>|</span>
            <span href=""> {created_at} years ago</span>
            <span>|</span>
            <span href=""> {num_comments} comments</span>
            {/* <span>
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
            </span> */}
          </div>
        </article>
      );
    }
  );

  return <div className="search-result-container">{article}</div>;
};

export default Article;
