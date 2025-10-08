import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Monitor from '../../layout/Monitor';

import { getPost } from '../../contents/blog';

function BlogPost() {
  const { link } = useParams();
  const [post, setPost] = useState({
    title: '',
    date: '',
    tags: [],
  });

  useEffect(() => {
    const postObject = getPost(link);

    if (! postObject) {
      return;
    }

    setPost(postObject);
  }, [link])

  return (
    <Monitor>
      <h2>{post.title}</h2>
      <div className="serial-content-list-item-details">
      <div className="serial-content-list-item-date">
          {post.date}
        </div>
        <ul className="serial-content-list-item-tags">
          {post.tags.map(tag => (
            <li key={tag}><span className={"pill"}>{tag}</span></li>
          ))}
        </ul>
      </div>
    </Monitor>
  );
}

export default BlogPost;
