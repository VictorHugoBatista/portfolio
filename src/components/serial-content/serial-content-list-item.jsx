import { Link } from "react-router";

function SerialContentListItem ({ post: { link, title, date, tags } }) {
  return (
    <Link to={`/blog/${link}`}>
      <div>
        <h3>{title}</h3>
      </div>
      <div>{date}</div>
      <div>
        <ul>
          {tags.map(tag => (
            <li key={tag}><span>{tag}</span></li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default SerialContentListItem;
