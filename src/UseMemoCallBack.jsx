import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Users from "./components/Users";

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  console.log("text", text, "search", search);
  const inputRef = useRef();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(users);

  const handleSearch = () => {
    // setSearch(text);
    setSearch(inputRef.current.value);
  };

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      {/* <input type="search" ref={inputRef} /> */}
      <button onClick={handleSearch}>Search User</button>
      <Users users={users} />
    </div>
  );
};

export default UseMemoCallBack;
