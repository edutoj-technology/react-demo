import { useCallback, useEffect, useMemo, useState } from "react";


function AddUser(props) {
  const [firstName, setFirstName] = useState("");
  const [counter, setCounter] = useState(1);


  useEffect(() => {
    console.log("Counter:", counter);
  }, [counter]); // componentDidUpdate()

  // useCallback(()=> {
  //   // call back function body
  // }, []);

  // useMemo(()=> {}, []);

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  function onAddUserClick() {
    const userListArray = [...props.userListProp];
    userListArray.push({ userId: generateUserId(), name: firstName });
    props.setUserListFunc(userListArray);
  }

  function generateUserId() {
    if (props.userListProp && props.userListProp.length > 0) {
      return props.userListProp[props.userListProp.length - 1].userId + 1;
    } else {
      return 1;
    }
  }

  return (
    <>
      First Name:{" "}
      <input type={"text"} value={firstName} onChange={firstNameHandler} />
      <button onClick={onAddUserClick}>Add User</button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Change Dependancy
      </button>
    </>
  );
}

export default AddUser;
