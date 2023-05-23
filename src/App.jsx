import { useState } from "react";
import { users } from "./components/user";
import Table from "./components/table";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter(
      (item) => keys.some((key) => item[key].toLowerCase().includes(query))
      //item.first_name.includes(query) ||
      //item.last_name.includes(query) ||
      //item.email.toLowerCase().includes(query)
    );
  };

  return (
    <>
      <div className="app bg-gray-950 text-cyan-500 ">
        <div className="m-auto xl:w-3/4 md:w-4/5 sm:w-11/12  text-center bg-gray-900 p-5 ">
          <h1 className="text-3xl font-bold ">Filter Sample</h1>
          <input
            type="search"
            placeholder="Search user "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-gray-700 w-full mt-20  border-solid border-2 border-sky-500 leading-8 p-2 rounded-lg"
          />
          <div className="h-screen overflow-auto scroll-smooth mt-5 border-solid border-2 border-sky-500  ">
            <Table data={search(users)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
