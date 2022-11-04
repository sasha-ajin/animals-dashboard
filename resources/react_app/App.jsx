import React, { useEffect, useState } from "react";
import AnimalService from "./api/AnimalService";
import GridAnimals from "./GridAnimals/GridAnimals";
import Navbar from "./Navbar/Navbar";
import Modal from "@mui/material/Modal";
import UpdateModalContainer from "./UpdateModalContainer/UpdateModalContainer";

const App = () => {
    const [animals, setAnimals] = useState([]);
    const modalInitialState = { open: false, id: 0 };
    const [updateModal, setUpdateModal] = useState(modalInitialState);
    const [createModal, setCreateModal] = useState(modalInitialState);
    const closeUpdateModal = () => {
        setUpdateModal(modalInitialState);
    };
    const openUpdateModal = (id) => {
        setUpdateModal({ open: true, id: id });
    };
    const fetchAnimals = async () => {
        const response = await AnimalService.getAll();
        setAnimals(response);
    };
    const fetchAnimal = async (id) => {
        const response = await AnimalService.getOne(id);
        return response;
    };
    const deleteAnimal = async (id) => {
        await Animalservice.delete(id);
        setAnimals(animals.filter((a) => a.id !== id));
    };
    const createAnimal = async (newAnimal) => {
        const response = await AnimalService.create(newAnimal);
        setAnimals([...animals, response.animal]);
        return response;
    };
    const updateAnimal = async (newAnimal, id) => {
        await AnimalService.update(newAnimal, id);
        newAnimal.id = id;
        setAnimals(
            animals.map((a) => {
                return a.id === id ? { ...newAnimal } : a;
            })
        );
    };
    useEffect(() => {
        fetchAnimals();
    }, []);
    return (
        <div>
            <Navbar />
            <GridAnimals animals={animals} openUpdateModal={openUpdateModal}/>
            <Modal
                open={updateModal.open}
                onClose={closeUpdateModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <UpdateModalContainer id={updateModal.id} />
            </Modal>
        </div>
    );
};

export default App;

{
    /* <button onClick={() => console.log(animals)}>get all</button>
            <button
                onClick={async () => {
                    const res = await createAnimal({
                        name: "lon",
                        link: "f",
                        color: "2",
                        number: 6,
                    });
                    console.log(res);
                }}
            >
                create
            </button> 
            <button
                onClick={async () => {
                    const res = await fetchAnimal(1);
                    console.log(res);
                }}
            ></button>*/
}
