import { useState } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import './App.css';

function App() {
  const [list, setList] = useState([]); 

  const addUser = (name) => {
    setList([...list, name]);
  }


  return (
    <div className="wrapper"
    style={{ display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
    }}
    >
      <div className="userList"
      style={{ boxShadow: "0 0 10px grey",
        padding: "2rem"
      }}
      >

        <Form addUser={addUser}/>
        <hr />

        <List list={list}/>
      </div>
    </div>
  )
}

export default App;
