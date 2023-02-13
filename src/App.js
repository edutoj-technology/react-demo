import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import UserItem from "./UserItem";
import AddUser from "./AddUser";
import Sidebar from "./Sidebar";
import Textbox from "./common/Textbox";

function App() {
  const [userList, setUserList] = useState([]);
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      {userList &&
        userList.length > 0 &&
        userList.map((user) => {
          return (
            <UserItem key={user.userId} name={user.name} userId={user.userId} />
          );
        })}

      <AddUser userListProp={userList} setUserListFunc={setUserList} />

      <br />

      <Textbox
        label="First name"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <Textbox
        label="Last name"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
