import React from 'react';

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title"><a href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a></h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span>
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;
