import React, { useState, useEffect } from 'react';
import Main from '../templates/Main';
import './Grupos.css';
import '../Modals/ModalTemplate.css';
import ModalTemplate from '../Modals/ModalTemplate'
import Modal from 'react-modal';

const headerProps = {
  icon: 'handshake-o',
  title: 'Grupos'
}
const customStyles = {
  content: {
    top: '50%',
    left: '57%',
    padding: '0px',
    right: '15%',
    bottom: 'auto',
    marginRight: '-50%',
    boxShadow: '0px 1px 5px 0.01px',
    transform: 'translate(-50%, -50%)',
  },
};

let setores = [
  'Supermercados',
  'Autopeças',
  'Frigorifico',
  'Alimenticio',
  'Roupas'
]

let empresas = [
  {
    id: 1,
    nome: 'Supermercado Caçula',
    setor: 'Supermercado',
    cpf: 22310209811,
  },
  {
    id: 2,
    nome: 'Autofix',
    setor: 'Autopeças',
    cpf: 52310209811,
  },
  {
    id: 3,
    nome: 'Friboi',
    setor: 'frigorifico',
    cpf: 92310209811,
  },
  {
    id: 4,
    nome: 'Super Big',
    setor: 'Supermercado',
    cpf: 16310259811,
  },
  {
    id: 5,
    nome: 'Trucão',
    setor: 'autopeças',
    cpf: 17310209811,
  },
  {
    id: 6,
    nome: 'Frigoneves',
    setor: 'frigorifico',
    cpf: 42310209811,
  },
  {
    id: 7,
    nome: 'Supermercado Babalu',
    setor: 'Supermercado',
    cpf: 32310209811,
  },
  {
    id: 8,
    nome: 'Basilio',
    setor: 'Supermercado',
    cpf: 19310209811,
  },
  {
    id: 9,
    nome: 'Auto top',
    setor: 'Autopeças',
    cpf: 12310209811,
  },
  {
    id: 10,
    nome: 'Super Barão',
    setor: 'Supermercado',
    cpf: 12310209811,
  }
]

function Grupos(props) {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [search, setSeach] = useState('');
  const [grupos, setGrupos] = useState([])
  const [groupFilter, setGroupFilter] = useState(grupos);

  const [order, setOrder] = useState(1);
  const [columnOrder, setColumnOrder] = useState('nome');

  function handleOrder(item) {
    setOrder(-order);
    setColumnOrder(item.toLowerCase())
    groupFilter = groupFilter.sort((a, b) => {
      return a[columnOrder] < b[columnOrder] ? -order : order;
    })
  }

  function handleSearch(item) {
    const searchLower = item.toLowerCase();

    const filter = grupos.filter((item) => item.nome.toLowerCase().includes(searchLower))
    if (filter.length > 0) {
      setGroupFilter(filter)
    } else {
      setGroupFilter(grupos)
    }
    setSeach(item)
  }

  function openModalEdit() {
    setModalOpen(true)
  }
  function closeModalEdit() {
    setModalOpen(false)
  }

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function alertRemove(item) {
    let list = groupFilter.filter(i => i.id !== item.id)
    setGroupFilter(list)
    setGrupos(list)
  }

  return <Main {...headerProps} className="container-sm">


    <div class="form my-2 my-lg-0  ">
      <input class="form-control"
        type="search"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Pesquisar"
      />
      <button class="btn btn-primary " type="button" onClick={() => handleOpenModal()}>Adicionar</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <ModalTemplate
          exit={closeModal}
          empresas={empresas}
          grupos={grupos}
          setGrupos={setGrupos}
          setor={setores}
          setGroupFilter={setGroupFilter}
        />

      </Modal>
    </div>
    <hr />
    <table class="table">
      <thead>
        <tr>
          {/*<th scope="col" onClick={e => handleOrder('id')} >ID</th>*/}
          <th scope="col" onClick={e => handleOrder('nome')} >Grupos</th>
          <th scope="col" onClick={e => handleOrder('empresas')}>Qtd. Empresas</th>
          <th scope="col" onClick={e => handleOrder('setor')}>Setor</th>
        </tr>
      </thead>
      <tbody>
        {groupFilter.map((item, index) => {
          return (
            <tr key={index}>
              {/*<td>{item.id}</td>*/}
              <td scope='row'>{item.nome}</td>
              <td>{item.qtdEmpresas}</td>
              <td>{item.setor}</td>
              <td><button className="btn edit btn-primary fa fa-pencil-square-o" onClick={() => openModalEdit(item)} ></button></td>
              <Modal
                isOpen={modalOpen}
                onRequestClose={closeModalEdit}
                style={customStyles}
              >
                <ModalTemplate
                  exit={closeModalEdit}
                  empresas={empresas}
                  grupos={grupos}
                  setGrupos={setGrupos}
                  setor={setores}
                  setGroupFilter={setGroupFilter}
                  item={item}
                />

              </Modal>
              <td><button className="btn remove btn-danger fa fa-trash-o" onClick={() => alertRemove(item, index)}></button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </Main>
}

export default Grupos;
