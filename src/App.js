import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { Form } from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const refreshUsers = (newUsers) => {
    setUsers(newUsers);
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
    const data = await getDocs(usersCollectionRef);
    refreshUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };

    getUsers();
  }, []);
  return (
    <div className='App'>
      <Form collectionRef={usersCollectionRef} refreshUsers={refreshUsers} />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1> Name: {user.name}</h1>
            <h2> Age : {user.age} </h2>
            <button onClick={() => updateUser(user.id, user.age)}>
              Increate age
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
