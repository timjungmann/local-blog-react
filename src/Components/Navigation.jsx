import React from 'react';
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <ul className="Navigation">
      <li>
        <Link to="/">Create A Post</Link>
      </li>
      <li>
        <Link to="/show">Show Current Posts</Link>
      </li>
      {/* <li>
        <label>Save locally </label>
        <input type="checkbox" name="localstorage"/>
      </li> */}
    </ul>
  )
}
