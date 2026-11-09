import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Login from '../../components/Modal/Login.jsx';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  }
  return (
    <div>
      <Navbar toggleModal = {toggleModal}/>
      <Login toggleModal = {toggleModal} status= {openModal}/>
      <div></div>
    </div>
  )
}

export default Home