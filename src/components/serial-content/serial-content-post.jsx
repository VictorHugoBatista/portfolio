import Markdown from 'react-markdown';

import SerialContentDetails from './layout/serial-content-details';

import useGetPost from './hooks/get-post';
import useGetPostContent from './hooks/get-post-content';

function SerialCotentPost({ postLink }) {
  const post = useGetPost(postLink);
  const {content, isContentLoading} = useGetPostContent(postLink);

  return (
    <article>
      <h2>{post.title}</h2>
      <SerialContentDetails post={post} />

      <div className="serial-content-content">
        {isContentLoading ?
        <div className="content-loading-wrapper">
          <div className="content-loading">
            <span className="content-loading-bar bar-1"></span>
            <span className="content-loading-bar bar-2"></span>
            <span className="content-loading-bar bar-3"></span>
          </div>
        </div>
        : <Markdown>{content}</Markdown>}
      </div>
    </article>
  );
};

export default SerialCotentPost;
