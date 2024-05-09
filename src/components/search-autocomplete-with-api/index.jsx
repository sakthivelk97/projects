import { useEffect, useState } from "react";
import Suggestions from "./suggestion";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(event){
    console.log(event.target.innerText)
    setShowDropDown(false)
    setSearchParam(event.target.innerText)
    setFilteredUsers([])
  }

  async function fetchListofUsers(firstName) {
    try {
      setLoading(true);
      const res = await fetch("http://dummyjson.com/users");
      const data = await res.json();
      // console.log(data)
      // setUsers(data)

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListofUsers();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <input
        style={{marginTop: '20px'}}
          name="search-users"
          value={searchParam}
          placeholder="Search Users here"
          type="text"
          onChange={handleChange}
        />
      )}

      {showDropDown && <Suggestions handleClick ={handleClick} data={filteredUsers} />}
    </div>
  );
}
