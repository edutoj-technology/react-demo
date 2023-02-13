const Sidebar = (props) => {
  return (
    <>
      <h1>Header 1</h1>
      <div style={{ border: "2px solid black" }}>{props.children}</div>
    </>
  );
};

export default Sidebar;
