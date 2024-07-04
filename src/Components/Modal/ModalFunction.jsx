import { useState } from "react"
import Modal from "./Modal";

const ModalFunction = () => {

    const [openModal, setOpenModal] = useState(false);

    function openModalHandler(){
        setOpenModal(!openModal)
    }

    function onClose (){
        setOpenModal(false)
    }
  return (
    <div className="mx-auto h-screen max-w-full items-center text-center mt-10">
      <h3 className="title">Custom Modal</h3>
      <button onClick={openModalHandler} className="bg-slate-500 p-4 rounded-lg">Click me!</button>
      {
        openModal && <Modal onClose={onClose}/>
      }
    </div>
  )
}

export default ModalFunction
