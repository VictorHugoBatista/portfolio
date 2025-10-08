import { Link } from "react-router";

function SerialContentListItem ({ post: { link, title, date, tags } }) {
  return (
    <div className={"serial-content-list-item"}>
      <Link to={`/blog/${link}`}>
        <div className="serial-content-list-item-title">
          <h3>{title}</h3>
        </div>
        <div className="serial-content-list-item-details">
          <div className="serial-content-list-item-date">
            {date}
          </div>
          <ul className="serial-content-list-item-tags">
            {tags.map(tag => (
              <li key={tag}><span className={"pill"}>{tag}</span></li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default SerialContentListItem;
