import React, { useEffect, useState } from "react";
import AnimalService from "./api/AnimalService";
import Navbar from "./Navbar/Navbar";

const App = () => {
    const [animals, setAnimals] = useState([]);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        fetchAnimals();
    }, []);
    async function fetchAnimals() {
        const response = await AnimalService.getAll();
        setAnimals(response);
    }
    async function deleteAimal(id) {
        await Animalservice.delete(id);
        setAnimals(animals.filter((a) => a.id !== id));
    }
    async function createAnimal(newAnimal) {
        const response = await AnimalService.create(newAnimal);
        setAnimals([...animals, response.animal]);
        return response;
    }
    async function updateAnimal(newAnimal, id) {
        await AnimalService.update(newAnimal, id);
        newAnimal.id = id;
        setAnimals(
            animals.map((a) => {
                return a.id === id ? { ...newAnimal } : a;
            })
        );
    }
    return (
        <div>
            <Navbar />
            <button onClick={() => console.log(animals)}>get all</button>
            <button
                onClick={async () => {
                    const res = await createAnimal({
                        name: "lon",
                        image: "f",
                        color: "2",
                        number: 5,
                    });
                    console.log(res);
                }}
            >
                create
            </button>
        </div>
    );
};

export default App;
