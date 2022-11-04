import React, { useEffect, useState } from "react";
import AnimalService from "./api/AnimalService";
import GridAnimals from "./GridAnimals/GridAnimals";
import Navbar from "./Navbar/Navbar";
import Modal from "@mui/material/Modal";
import UpdateModalContainer from "./UpdateModalContainer/UpdateModalContainer";

const App = () => {
    const [animals, setAnimals] = useState([]);
    const modalInitialState = { open: false, animal: null };
    const [updateModal, setUpdateModal] = useState(modalInitialState);
    const [createModal, setCreateModal] = useState(modalInitialState);
    const closeUpdateModal = () => {
        setUpdateModal(modalInitialState);
    };
    const openUpdateModal = (animal) => {
        setUpdateModal({ open: true, animal: animal });
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
    const updateAnimal = async (newAnimal) => {
        const response = await AnimalService.update(newAnimal, newAnimal.id);
        if (!response.success) {
            alert("Somethin wents wrong");
        }
        setAnimals(
            animals.map((a) => {
                return a.id === newAnimal.id ? { ...newAnimal } : a;
            })
        );
        closeUpdateModal();
    };
    useEffect(() => {
        fetchAnimals();
    }, []);
    return (
        <div>
            <Navbar />
            <GridAnimals animals={animals} openUpdateModal={openUpdateModal} />
            <Modal
                open={updateModal.open}
                onClose={closeUpdateModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <UpdateModalContainer
                        updateAnimal={updateAnimal}
                        animal={updateModal.animal}
                    />
                </>
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
