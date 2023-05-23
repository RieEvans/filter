import React from "react";

function Table({ data }) {
  return (
    <table className="mt-5 border-solid border-4 border-sky-500 w-full  ">
      <tbody className="">
        <tr className="border-solid border-4 border-sky-500 divide-x-[3px] divide-cyan-500">
          <th>First Name </th>
          <th>Last Name </th>
          <th>Email </th>
          <th className="xsm:hidden ssm:block">Gender </th>
        </tr>
        {data.map((item) => (
          <tr
            key={item.id}
            className=" border-solid border-2 border-sky-500 divide-x-[3px] divide-cyan-500 text-stone-300 text-justify">
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td className="xsm:hidden ssm:block ">{item.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
