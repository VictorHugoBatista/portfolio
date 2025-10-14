import { useParams } from 'react-router-dom';

import SerialContentPost from '../../components/serial-content/serial-content-post'
import Monitor from '../../layout/Monitor';

function BlogPost() {
  const { link } = useParams();

  return (
    <Monitor>
      <SerialContentPost postLink={link} />
    </Monitor>
  );
}

export default BlogPost;
