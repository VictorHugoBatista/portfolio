import Markdown from 'react-markdown';

import SerialContentDetails from './layout/serial-content-details';

import useGetPost from './hooks/get-post';
import useGetPostContent from './hooks/get-post-content';

function SerialCotentPost({ postLink }) {
  const post = useGetPost(postLink);
  const content = useGetPostContent(postLink);

  return (
    <article>
      <h2>{post.title}</h2>
      <SerialContentDetails post={post} />

      <div className="serial-content-content">
        <div className="content-loading-wrapper">
          <div className="content-loading">
            <span className="content-loading-bar"></span>
            <span className="content-loading-bar"></span>
            <span className="content-loading-bar"></span>
          </div>
        </div>
        <Markdown>{content}</Markdown>
      </div>
    </article>
  );
};

export default SerialCotentPost;
