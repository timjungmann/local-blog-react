import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PostContext from "./Context/PostContext";
import ColorContext from "./Context/ColorContext";
import ShowModalContext from "./Context/ShowModalContext";

import Create from './Components/Create';
import ShowAllPosts from './Components/ShowAllPosts';
import Home from './Components/Home';
import Help from './Components/Help';

function App() {
  const postsInitital = localStorage.length > 0 ? JSON.parse(localStorage.getItem("data")) : [];

  const [posts, setPosts] =  useState(postsInitital);
  const [color, setColor] = useState({"r": 255, "g":255, "b":255});
  const [create, setCreate] = useState(false);
  const [all, setAll] = useState (false);
  const [edit, setEdit] = useState("");
  const [show, setShow] = useState("");
  const [help, setHelp] = useState(false);

  return (
    <div className="App" style={{backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b}, .8)`, overflowY: `${show != "" || edit != ""? "hidden" : ""}`, paddingRight: `${show != "" || edit != "" ? "55px" : ""}`}}>
      <div onClick={()=>help ? setHelp(false) : setHelp(true)} className="help-qmark">{help ? "×" : "?"}</div>
      {help ? <Help help={help}/> : null}

      <ShowModalContext.Provider value={{show, setShow, edit, setEdit}}>
        <PostContext.Provider value={{posts, setPosts}}>
          <ColorContext.Provider value={{color, setColor}}>
              <Home/>
              <h2 onClick={()=>setCreate(!create)}>Make an entry {create ? "▴" : "▾"}</h2>
              {create ? <Create setAll={setAll}/> : null}
              <h2 onClick={()=>setAll(!all)}>Show all entries {all ? "▴" : "▾"}</h2>
              {all ? <ShowAllPosts/> : null}
          </ColorContext.Provider>
        </PostContext.Provider>
      </ShowModalContext.Provider>
    </div>
  );
}

export default App;
