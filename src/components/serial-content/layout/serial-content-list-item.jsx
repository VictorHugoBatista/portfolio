import { Link } from "react-router";

import SerialContentDetails from "./serial-content-details";

function SerialContentListItem ({ post }) {
  const { link, title } = post;
  return (
    <div className={"serial-content-list-item"}>
      <Link to={`/blog/${link}`}>
        <div className="serial-content-list-item-title">
          <h3>{title}</h3>
        </div>
        <SerialContentDetails post={post} />
      </Link>
    </div>
  );
};

export default SerialContentListItem;
