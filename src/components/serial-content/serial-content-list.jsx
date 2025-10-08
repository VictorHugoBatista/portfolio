import SerialContentListItem from "./serial-content-list-item";

function SerialContentList({ contentList }) {
  return (
    <ul className="blog-list">
      {contentList.map(post => (
        <li>
          <SerialContentListItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default SerialContentList;
