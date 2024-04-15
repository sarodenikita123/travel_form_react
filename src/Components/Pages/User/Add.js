import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const {register, handleSubmit} = useForm();

  const navi = useNavigate();

  function saveData(data){
    axios.post('http://localhost:5000/users', data);
    //alert('record added.....')
    navi('/user/show')
  }
  return (
    <>
        <div className='container'>
          <center><u><h2>Travel FORM:</h2></u></center>
          <form onSubmit={handleSubmit(saveData)} className='mt-5'>
            <label htmlFor='no'>TNO:</label>
            <input type='number' id='no' className='form-control'
            {...register('tno')}/>
            <br/><br/>
            <label htmlFor='n'>NAME:</label>
            <input type='text' id='n' className='form-control'
            {...register('name')}/>
            <br/><br/>
            <label htmlFor='p'>PRICE:</label>
            <input type='number' id='p' className='form-control'
            {...register('price')}/>
            <br/><br/>
            <label htmlFor='c'>CITY:</label>
            <input type='text' id='c' className='form-control'
            {...register('city')}/>
            <br/><br/>
            <input type='submit' value='Add' className='btn btn-outline-success col-6 btn-lg'/>
            <input type='reset' value='cancel' className='btn btn-outline-warning col-6 btn-lg'/>
          </form>
        </div>
    </>
  )
}

export default Add