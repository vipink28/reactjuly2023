function Child(props) {
    const { title, clientName, isApp, children } = props;
  return (
    <div className="child">
      <h1>{title}</h1>
      {!isApp ? <hr /> : ""}
      <h4>{clientName}</h4>
    {children}
    </div>
  );
}

export default Child;
