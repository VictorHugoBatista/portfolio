function Monitor(props) {
  return (
    <div className="monitor">
      <div className="monitor-screen crt">
        <div className="monitor-screen-inner">
          <main className="monitor-screen-container">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Monitor;
