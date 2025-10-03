function Monitor(props) {
  return (
    <div className="monitor">
      <div className="monitor-screen">
        {props.children}
      </div>
    </div>
  );
}

export default Monitor;
