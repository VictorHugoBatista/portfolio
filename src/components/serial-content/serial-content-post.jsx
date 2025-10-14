import { useEffect, useState } from 'react';

import Markdown from 'react-markdown';

import SerialContentDetails from './layout/serial-content-details';

import useGetPost from './hooks/get-post';

function SerialCotentPost({ postLink }) {
  const post = useGetPost(postLink);

  const [content, setContent] = useState('teste');

  useEffect(() => {
    const loadContent = async () => {
      const response = await fetch(`/content/markdown/${postLink}.md`);
      response.text().then(content => setContent(content));
    };
    loadContent();
  }, [postLink, setContent]);

  return (
    <article>
      <h2>{post.title}</h2>
      <SerialContentDetails post={post} />

      <div className="serial-content-content">
        <Markdown>{content}</Markdown>
      </div>
    </article>
  );
};

export default SerialCotentPost;
