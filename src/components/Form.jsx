'use client'

import { useForm } from 'react-hook-form';
import React from 'react';
import inputStyles from './css-modules/Input.module.css';


const Form = () => {
  
  const {register, handleSubmit, 
    formState: {errors},
    watch
  } = useForm();

  const onSubmit = async(data) => {
    try {
      const response = await fetch('http://localhost:3000/api/excel', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const datas = await response.json()
    console.log(datas)
   
   } catch (error) {
    console.log(error)
   }
  };

  return (
    <form className='w-auto' id="idform" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 border w-max px-4 py-5 ">
          <div className="grid gap-2">
            <label htmlFor="agent">
              <span className="mr-3">Agente</span>
              <select className={inputStyles.input} 
              {...register("agent", {
                required: true,                
              })}>
                <option value="omeira">OMEIRA</option>
                <option value="angeles">ANGELES</option>
                <option value="leopoldo">LEOPOLDO</option>
                </select>
            </label>
            {errors.agent && <span className='text-red-400 font-light text-sm'>Nombre del agente requerido</span>}
            <label htmlFor="clientName">
              <span className="mr-3">Cliente</span>
              <input type='text' className={inputStyles.input} 
              {...register("clientName", {
                required: true,
                minLength: 2,
              })}/>
            </label>
            {errors.clientName?.type == "minLength" && <span className='text-red-400 font-light text-sm'>La longitud minima es de 2 caracteres</span>}
            {errors.clientName?.type == "maxLength" && <span className='text-red-400 font-light text-sm'>La longitud maxima es de 20 requerido</span>}
            {errors.clientName?.type == "required" && <span className='text-red-400 font-light text-sm'>Nombre del cliente requerido</span>}
           <div className='flex gap-2'>
           <span className="mr-3">Sexo:</span>
             <label htmlFor="hombre">
              <input type='radio' value='HOMBRE' id="hombre" className={inputStyles.input} 
              {...register("sex", {
                required: true
              })}/>Hombre
                  </label>
                <label htmlFor="mujer">
              <input type='radio' value='MUJER' id="mujer" className={inputStyles.input} 
              {...register("sex", {
                required: true
              })}/>Mujer
            </label>
           </div>
            {errors.sex && <span className='text-red-400 font-light text-sm'>Tipo de sexo requerido</span>}
            <label htmlFor="cliCode">
              <span className="mr-3">Codigo cliente</span>
              <input className={inputStyles.input} 
              {...register("cliCode", {
                required: true
              })}/>
            </label>
            {errors.cliCode && <span className='text-red-400 font-light text-sm'>Código del cliente requerido</span>}
              <div className='flex gap-2'>
              <span className="mr-3">Tipo de persona:</span>
            <label htmlFor="fisica">
              <input type='radio' value='FISICA' id="fisica" className={inputStyles.input} 
              {...register("tperson", {
                required: true
              })}/>Física
              </label>
                <label htmlFor="juridica">
              <input type='radio' value='JURIDICA' id="juridica" className={inputStyles.input} 
              {...register("tperson", {
                required: true
              })}/>Jurídica
            </label>
              </div>
            {errors.tperson && <span className='text-red-400 font-light text-sm'>Tipo de Persona requerido</span>}
            <label htmlFor="cliCompany">
              <span className="mr-3">Empresa cliente</span>
              <input className={inputStyles.input} 
              {...register("cliCompany", {
                required: true
              })}/>
            </label>
            {errors.cliCompany && <span className='text-red-400 font-light text-sm'>Empresa a la que pertenece el cliente requerida</span>}
          </div>
          <div className="grid gap-2">
            <label htmlFor="amount">
              <span className="mr-3">Monto</span>
              <input type="number" className={inputStyles.input} 
              {...register("amount", {
                required: true
              })}/>
            </label>
            {errors.amount && <span className='text-red-400 font-light text-sm'>Monto requerido</span>}
            <label htmlFor="date">
              <span className="mr-3">Fecha de concesion</span>
              <input type="date" className={inputStyles.input} 
              {...register("date", {
                required: true
              })}/>
            </label>
            {errors.date && <span className='text-red-400 font-light text-sm'>Fecha requerida</span>}
            <label htmlFor="period">
              <span className="mr-3">Periodo</span>
              <input type="number" className={inputStyles.input} 
              {...register("period", {
                required: true
              })}/>
            </label>
            {errors.period && <span className='text-red-400 font-light text-sm'>Periodo requerido</span>}
            <label htmlFor="tproduct">
              <span className="mr-3">Tipo de producto</span>
              <input className={inputStyles.input} 
              {...register("tproduct", {
                required: true
              })}/>
            </label>
            {errors.tproduct && <span className='text-red-400 font-light text-sm'>Tipo de producto requerido</span>}
            <label htmlFor="state">
              <span className="mr-3">Situacion</span>
              <input className={inputStyles.input} 
              {...register("state", {
                required: true
              })}/>
            </label>
            {errors.state && <span className='text-red-400 font-light text-sm'>Estado del credito requerido</span>}
          </div>
        </div>

        <div className="mt-4 w-min">
          <input className="w-max border-2 bg-gray-800 text-white active:bg-slate-500 px-3 py-1" type="submit" value="Insertar crédito" id="submitButton"
          />
        </div>
          <pre>
            {JSON.stringify(watch(), null, 2)}
          </pre>
      </form>
  )
}

export default Form