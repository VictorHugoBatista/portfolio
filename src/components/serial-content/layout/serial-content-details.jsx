function SerialContentDetails({ post: { date, tags } }) {
  return (
    <div className="serial-content-details">
      <div className="serial-content-details-date">
        {date}
      </div>
      <ul className="serial-content-details-tags">
        {tags.map(tag => (
          <li key={tag}><span className={"pill"}>{tag}</span></li>
        ))}
      </ul>
    </div>
  );
};

export default SerialContentDetails;
