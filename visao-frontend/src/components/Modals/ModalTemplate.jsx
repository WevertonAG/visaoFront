import React, { useState } from 'react';
import './ModalTemplate.css';
import { useForm } from "react-hook-form";

const ModalTemplate = ({ exit, empresas, grupos, setGrupos, setor, setGroupFilter, item}) => {
    const [listA, setListA] = useState(empresas);
    const [listB, setListB] = useState([]);
    const [all, setTodos] = useState(false);
    const [allB, setTodosB] = useState(false);
    const [diferenciaLado, setDiferenciaLado] = useState(0);
    const [listofSuport, setListofSuport] = useState([]);

    const { register, handleSubmit } = useForm();

    const [searchInList, setSearchInList] = useState('');
    const [filterList, setFilterList] = useState(empresas);

    const [order, setOrder] = useState(1);
    const [columnOrder, setColumnOrder] = useState('nome');

    function handleOrder(item) {
        setOrder(-order);
        setColumnOrder(item.toLowerCase())
        filterList = filterList.sort((a, b) => {
            return a[columnOrder] < b[columnOrder] ? -order : order;
        })
    }

    function handleOrder2(item) {
        setOrder(-order);
        setColumnOrder(item.toLowerCase())
        listB = listB.sort((a, b) => {
            return a[columnOrder] < b[columnOrder] ? -order : order;
        })
    }

    function search(item) {
        const searchLower = item.toLowerCase()

        const filter = empresas.filter((item) => item.nome.toLowerCase().includes(searchLower))
        if (filter.length > 0) {
            setFilterList(filter)
        } else {
            setFilterList(listA)
        }
        setSearchInList(item)
        return
    }

    function addGroup(data) {
        let qtd = listB.length
        let list = grupos
        if(qtd === 0){
            alert("Você não pode adicionar um grupo vazio!\nAdicione as empresas desejadas no lado direito!")
        }else{
            const group = {
                id: Math.random(new Date()),
                nome: data.nome[0].toUpperCase() + data.nome.substr(1),
                empresasDoGrupo: listB,
                qtdEmpresas: qtd,
                setor: data.setor,
            }
            list.push(group)
            setGrupos(list)
            setGroupFilter(list)
            exit()
        }
    }

    function addEmpresas(check, valueSplit) {
        setDiferenciaLado(valueSplit);

        if (listofSuport.length > 0) {

            let filtro = listofSuport.find((item) =>
                item.id === check.id
            )
            if (filtro) {
                let newArray = listofSuport.filter((item) =>
                    item.id !== check.id
                )
                if (newArray.length === 0) {
                    setDiferenciaLado(0)
                }
                setListofSuport(newArray)
                return
            }
        }

        setListofSuport([...listofSuport, check])
    }

    function addToListB() {
        setTodos(false)
        if (listofSuport.length === 0) return
        const newArr1 = [...listofSuport, ...listB]
        setListB(newArr1);
        const newArr2 = newArr1.map(item => item.id)
        const newArr = listA.filter(item => !newArr2.includes(item.id));
        setListA(newArr);
        setListofSuport([]);
        setDiferenciaLado(0);
        setSearchInList('');
        setFilterList(newArr);
    }

    function addToListA() {
        setTodosB(false)
        if (listofSuport.length === 0) return
        const newArr1 = [...listofSuport, ...listA]
        setListA(newArr1);
        setFilterList(newArr1)
        const newArr2 = newArr1.map(item => item.id)
        const newArr = listB.filter(item => !newArr2.includes(item.id));
        setListB(newArr);
        setListofSuport([]);
        setDiferenciaLado(0);
    }

    const setCheckAllA = () => {
        setDiferenciaLado(1);
        setTodos(!all)
        if (!all) {
            setListofSuport(filterList)
            return
        }
        setListofSuport([])
    }

    const setCheckAllB = () => {
        setDiferenciaLado(2);
        setTodosB(!allB)
        if (!allB) {
            setListofSuport(listB)
            return
        }
        setListofSuport([])
    }

    const searchIfCheck = (item) => {
        const newItem = listofSuport.find(o => o.id === item.id)

        return !!newItem;
    }

    return (
        <div class="modalContent">
            <form onSubmit={handleSubmit(addGroup)} >

                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={exit}></button>
                </div>
                <div className="modal-body">
                    <span>
                        <label class="col-sm-2 col-form-label"><strong>Grupo</strong></label>
                        <input {...register("nome")} type="text" class="form-control" placeholder="nome do grupo" />
                    </span>
                    <span>
                        <label class="col-sm-2 col-form-label"><strong>Setor</strong></label>
                        <select {...register("setor")} class="form-select" >
                            {setor.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            })
                            }
                        </select>
                    </span>
                </div>
                <div className="shearch">
                    <input type="text"
                        class="form-control"
                        value={searchInList}
                        onChange={(e) => search(e.target.value)}
                        placeholder="Buscar"></input>
                </div>
                <br />
                <div className="filtros">
                    <div className="filter ">
                        <label><strong>Empresas</strong></label>
                        <div className="radio">
                            <label>todos</label>
                            <input className="form-check-input" checked={all} onChange={setCheckAllA} type="checkbox"></input>
                        </div>
                    </div>
                    <div className="filter">
                        <label><strong>Empresas</strong></label>
                        <div className="radio">
                            <label>todos</label>
                            <input className="form-check-input mr-2" checked={allB} onChange={setCheckAllB} name='sideB' type="checkbox"></input>
                        </div>
                    </div>
                </div>
                <div className="modalGroup">
                    <div className="empresas">
                        <table class="table">
                            <thead >
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col' onClick={()=> handleOrder('cpf')}>CPF</th>
                                    <th scope='col' onClick={()=> handleOrder('nome')}>Nome</th>
                                </tr>
                            </thead>
                            <tbody>

                                {filterList.map((dado, index) => {
                                    return (
                                        <>
                                            <tr key={index}></tr>
                                            <th scope="row">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    disabled={diferenciaLado === 2}
                                                    checked={searchIfCheck(dado)}
                                                    value={searchIfCheck(dado)}
                                                    onChange={(e) => {
                                                        addEmpresas(dado, 1)
                                                    }}
                                                />

                                            </th>
                                            <td>{dado.cpf}</td>
                                            <td>{dado.nome}</td>
                                        </>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="botoes">
                        <button type="button" class="btn btn-primary" onClick={() => addToListB()} disabled={diferenciaLado === 2}>
                            <i class="fa fa-arrow-right" alt="Agrupar"></i>
                        </button>
                        <button type="button" class="btn btn-primary" onClick={() => addToListA()} disabled={diferenciaLado === 1}>
                            <i className="fa fa-arrow-left"></i>
                        </button>
                    </div>
                    <div className="empresas">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col' onClick={()=> handleOrder2('cpf')}>CPF</th>
                                    <th scope='col' onClick={()=> handleOrder2('nome')}>Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listB.map((item, index) => {
                                    return (
                                        <>
                                            <tr key={index}></tr>
                                            <th scope="row">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    disabled={diferenciaLado === 1}
                                                    checked={searchIfCheck(item)}
                                                    value={searchIfCheck(item)}
                                                    onChange={(e) => {
                                                        addEmpresas(item, 2)
                                                    }}
                                                />

                                            </th>
                                            <td>{item.cpf}</td>
                                            <td>{item.nome}</td>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr />
                <div class="modalfooter">
                    <button type="button" class="btn btn-secondary" onClick={exit}>Fechar</button>
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
            </form>
        </div>
    )
};

export default ModalTemplate;