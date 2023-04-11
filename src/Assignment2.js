// "getposts form https://jsonplaceholder.typicode.com/posts",
//     "show on table",
//     "add remove button",
//     "delete post when click on remove button"

import React from 'react';
import './Assignment2.css';
import { useEffect, useState } from 'react';
export default function Assignment2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  const handleDelete = (index) => {
    const remove = data.filter((elm, ind) => {
      return index !== ind;
      // console.log(index)
    });
    setData(remove);
    // const remove = data.slice(index, 1);
    // setData(remove);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>UserId</th>
          <th>title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>
                <span className="delete" onClick={() => handleDelete(index)}>
                  ❌
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
