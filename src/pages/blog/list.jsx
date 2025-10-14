import '../../App.css';
import Monitor from '../../layout/Monitor';
import SerialContentList from '../../components/serial-content/serial-content-list';
import { blog } from '../../content/blog';

function BlogList() {
  return (
    <Monitor>
      <div className="media-content">
        <h2>Blog</h2>
        <SerialContentList contentList={blog} />
      </div>
    </Monitor>
  )
};

export default BlogList;
