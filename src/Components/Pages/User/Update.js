import React, {useEffect}from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
    const {register, handleSubmit, setValue} = useForm();

    const {userId} = useParams();

    const navi = useNavigate ();

    async function fetchData(){
        const result = await axios.get (`http://localhost:5000/users/${userId}`)
        // console.log(result.data);
        setValue('tno', result.data.tno);
        setValue('name', result.data.name);
        setValue('price', result.data.price);
        setValue('city', result.data.city);
        
    }

    function saveData(data){
        // console.log('updated data.......>', data);
        axios.put(`http://localhost:5000/users/${userId}`, data);
        navi('/user/show');
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
        <div className='container'>
            <center><h2><u>UPDATED FORM:</u></h2></center>
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
            <input type='submit' value='update' className='btn btn-outline-success col-6 btn-lg'/>
            <input type='reset' value='cancel' className='btn btn-outline-warning col-6 btn-lg'/>
          </form>

        </div>
    </>
  )
}

export default Update