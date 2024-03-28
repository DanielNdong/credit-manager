'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import inputStyles from './css-modules/Input.module.css'


const Form = () => {
  const route = useRouter();

    const [values, setValues] = useState({
      agent: "",
      clientName: "",
      sex: "",
      tpersona: "",
      cliCode: "",
      cliCompany: "",
      amount: "",
      date: "",
      period: "",
      tproduct: "",
      state: "",
    })


  const handleInputChange = (event) => {
    const {id, value} = event.target;
    console.log(event.target)
    setValues({
      ...values,
      [id]: value
    })
  }

  const handleForm = (event) => {
    event.preventDefault();
    console.log(values)
  }

  return (
    <form id="idform">
        <div className="flex gap-2 border w-max px-4 py-5 ">
          <div className="grid gap-2">
            <label htmlFor="agent">
              <span className="mr-3">Agente</span>
              <input className={inputStyles.input} type="text" id="agent" onChange={handleInputChange}/>
            </label>
            <label htmlFor="clientName">
              <span className="mr-3">Cliente</span>
              <input className={inputStyles.input} id="clientName" onChange={handleInputChange}/>
            </label>
            <label htmlFor="sex">
              <span className="mr-3">Sexo</span>
              <input className={inputStyles.input} id="sex" onChange={handleInputChange}/>
            </label>
            <label htmlFor="tpersona">
              <span className="mr-3">Tipo de persona</span>
              <input className={inputStyles.input} id='tpersona' onChange={handleInputChange}/>
            </label>
            <label htmlFor="cliCode">
              <span className="mr-3">Codigo cliente</span>
              <input className={inputStyles.input} id='cliCode' onChange={handleInputChange}/>
            </label>
            <label htmlFor="cliCompany">
              <span className="mr-3">Empresa cliente</span>
              <input className={inputStyles.input} id='cliCompany' onChange={handleInputChange}/>
            </label>
          </div>
          <div className="grid gap-2">
            <label htmlFor="amount">
              <span className="mr-3">Monto</span>
              <input className={inputStyles.input} id='amount' onChange={handleInputChange}/>
            </label>
            <label htmlFor="date">
              <span className="mr-3">Fecha de concesion</span>
              <input className={inputStyles.input} id='date' onChange={handleInputChange}/>
            </label>
            <label htmlFor="period">
              <span className="mr-3">Periodo</span>
              <input className={inputStyles.input} id='period' onChange={handleInputChange}/>
            </label>
            <label htmlFor="tproduct">
              <span className="mr-3">Tipo de producto</span>
              <input className={inputStyles.input} id='tproduct' onChange={handleInputChange}/>
            </label>
            <label htmlFor="state">
              <span className="mr-3">Situacion</span>
              <input className={inputStyles.input} id='state' onChange={handleInputChange}/>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <input className="w-max border-2 bg-gray-800 text-white active:bg-slate-500 px-3 py-1" type="button" value="Insertar crédito" id="submitButton"
          onClick={(e) => {
            e.preventDefault();
            console.log(values)
            /*  route.push(`./${values.agent}&${values.clientName}&${values.sex}&${values.tpersona}&${values.cliCode}&${values.cliCompany}&${values.amount}&${values.date}&${values.period}&${values.tproduct}&${values.state}`)*/
            route.push('./api/excel/route')
          }}/>
        </div>
      </form>
  )
}

export default Form