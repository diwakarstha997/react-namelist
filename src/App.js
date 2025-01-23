import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(""); 

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  }; 

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
        <div className="display">{name}</div>

        <div className="form">
          <form action="">
            <input type="text" onChange={handleOnChange}/>
            <button>Add User</button>
          </form>
        </div>

        <hr />

        <div className="list">
          <ul>
            <li>Diwakar</li>
            <li>Sam</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
