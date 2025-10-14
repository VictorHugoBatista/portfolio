import SerialContentListItem from "./layout/serial-content-list-item";

function SerialContentList({ contentList }) {
  return (
    <ul className="serial-content-list">
      {contentList.map(post => (
        <li>
          <SerialContentListItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default SerialContentList;
