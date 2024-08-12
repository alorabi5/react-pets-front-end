// src/App.jsx
import { useEffect, useState } from "react";

import * as petService from "./services/petService";

import PetList from "./component/PetList";
import PetDetail from "./component/PetDetail";

const App = () => {

  const [petList, setPetList] = useState([]);
  const [selected, setSelected] = useState(null);


  const updateSelected = (pet) => {
    setSelected(pet);
  };


useEffect(() => {
  const fetchPets = async () => {
    try {
      const data = await petService.index();
      setPetList(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchPets();
}, []);


  return (
    <>
      <PetList petList={petList} updateSelected={updateSelected} />
      <PetDetail />
    </>
  );
};

export default App;
