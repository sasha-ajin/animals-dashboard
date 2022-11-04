import React, { useEffect, useState } from "react";
import AnimalService from "./api/AnimalService";
import GridAnimals from "./GridAnimals/GridAnimals";
import Navbar from "./Navbar/Navbar";
import Modal from "@mui/material/Modal";
import UpdateModalContainer from "./UpdateModalContainer/UpdateModalContainer";
import CreateModalContainer from "./CreateModalContainer/CreateModalContainer";

const App = () => {
    const [animals, setAnimals] = useState([]);
    const updateModalInitialState = { open: false, animal: null };
    const createModalInitialState = { open: false, number: 0 };
    const [updateModal, setUpdateModal] = useState(updateModalInitialState);
    const [createModal, setCreateModal] = useState(createModalInitialState);
    const closeUpdateModal = () => {
        setUpdateModal(updateModalInitialState);
    };
    const closeCreateModal = () => {
        setCreateModal(createModalInitialState);
    };
    const openUpdateModal = (animal) => {
        setUpdateModal({ open: true, animal: animal });
    };
    const openCreateModal = (number) => {
        setCreateModal({ open: true, number: number });
    };
    const fetchAnimals = async () => {
        const response = await AnimalService.getAll();
        setAnimals(response);
    };
    const deleteAnimal = async (id) => {
        const response = await AnimalService.delete(id);
        setAnimals(animals.filter((a) => a.id !== id));
        closeUpdateModal();
    };
    const createAnimal = async (newAnimal) => {
        const response = await AnimalService.create(newAnimal);
        if (!response.success) {
            alert("Somethin wents wrong");
            console.log(response)
            return 0;
        }
        setAnimals([...animals, response.animal]);
        closeCreateModal();
    };
    const updateAnimal = async (newAnimal) => {
        const response = await AnimalService.update(newAnimal, newAnimal.id);
        if (!response.success) {
            alert("Somethin wents wrong");
            console.log(response)
            return 0;
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
            <GridAnimals
                animals={animals}
                openUpdateModal={openUpdateModal}
                openCreateModal={openCreateModal}
            />
            <Modal
                open={updateModal.open}
                onClose={closeUpdateModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <UpdateModalContainer
                        deleteAnimal={deleteAnimal}
                        updateAnimal={updateAnimal}
                        animal={updateModal.animal}
                    />
                </>
            </Modal>
            <Modal
                open={createModal.open}
                onClose={closeCreateModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <CreateModalContainer
                        number={createModal.number}
                        createAnimal={createAnimal}
                    />
                </>
            </Modal>
        </div>
    );
};

export default App;
