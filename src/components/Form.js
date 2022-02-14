import { addDoc, getDocs } from "@firebase/firestore";
import { useState } from "react";

export function Form(props) {
    const {collectionRef, refreshUsers} = props;
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const createUser = async() => {
    await addDoc(collectionRef, {name: newName, age: Number(newAge)});
    const data = await getDocs(collectionRef);
    refreshUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  return (
    <>
      <input placeholder='Name...' onChange={(event) => {
        setNewName(event.target.value);
      }}/>
      <input type='number' placeholder='Age...' onChange={(event) => {
        setNewAge(event.target.value);
      }}/>
      <button onClick = {createUser}>Create user</button>
    </>
  );
}
