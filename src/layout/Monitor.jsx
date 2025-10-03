function Monitor(props) {
  return (
    <div className="monitor">
      <div className="monitor-screen">
        <main className="monitor-screen-container">
          {props.children}
        </main>
      </div>
    </div>
  );
}

export default Monitor;
