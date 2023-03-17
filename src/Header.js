import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const tasks = useSelector((store) => store.tasks);

  return (
    <header className="App-header">
      <h1>Task management system</h1>
      <nav className="nav">
        <Link to="/about">About Us</Link> ||
        <Link to="/contact">Contact Us</Link> ||
        <Link to="/tasks">Task List</Link>
      </nav>
      <div>Task Assigned: {tasks?.length}</div>
    </header>
  );
};

export default Header;
