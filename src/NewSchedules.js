import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NewSchedules = () => {

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [form, setForm] = useState({
    specialty: '',
    doctor: '',
    date: '',
    type: 'In person'
  });
  const [check, setCheck] = useState(false)
  const [success, setSuccess] = useState(false)

  const changeCheck = () => {
    setCheck(!check)
  }

  const getSchedules = field => evt => {
    setForm({
      ...form,
      [field]: evt.target.value
    })
  }

  const getDate = () => evt => {
    setDate(evt.target.value)
    setDateForm()
  }

  const getTime = () => evt => {
    let valueTime = evt.target.value
    setTime(valueTime)
    setDateForm()
  }

  const setDateForm = () => {
    let field = 'date'
    setForm({
      ...form,
      [field]: date + ' - ' + time
    })
  }
  
  const saveSchedules = () => {
    axios
      .post('http://localhost:3000/Schedules', form)
      .then(setSuccess(true))
    
  }

  if(success){
    return <Redirect to='/' />
  }

  return (
    <div>
      New Schedules
      <div className='mx-auto w-50 mt-5 mb-5'>
        <form>
          <div className='mb-3'>
            <label htmlFor='inputSpecialty' className='form-label'>Specialty</label>
            <input type='text' className='form-control' id='inputSpecialty' onChange={getSchedules('specialty')} />
          </div>
          <div className='mb-3'>
            <label htmlFor='InputDoctor' className='form-label'>Doctor</label>
            <input type='text' className='form-control' id='inputDoctor' onChange={getSchedules('doctor')} disabled={form.specialty === ''}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='inputDate' className='form-label'>Date and Time</label>
            <div className='row'>
              <div className='col'>
                <input type='date' className='form-control' id='inputDate' onChange={getDate()} onBlur={getDate()} disabled={form.doctor === ''} />
              </div>
              <div className='col'>
                <input type='time' className='form-control' id='inputTime' onChange={getTime()} onBlur={getTime()} disabled={date === ''} />
              </div>
            </div>
          </div>
          <label htmlFor='inPerson' className='form-label'>Type</label>
          <div className='mb-3 form-check'>
            <div className='d-flex flex-wrap'>
              <div className='p-2 m-2'>
                <input type='checkbox' className='form-check-input' id='inPerson' value='In person' checked={check === false} onChange={changeCheck} onClick={getSchedules('type')} />
                <label className='form-check-label' htmlFor='inPerson'>In person</label>
              </div>
              <div className='p-2 m-2'>
                <input type='checkbox' className='form-check-input' id='telemedicine' value='Telemedicine' checked={check === true} onChange={changeCheck} onClick={getSchedules('type')} />
                <label className='form-check-label' htmlFor='telemedicine'>Telemedicine</label>
              </div>
            </div>
          </div>
          <div className='d-grid gap-2'>
            <button type='button' className='btn btn-primary' onClick={() => saveSchedules()} disabled={time === ''}>Save Schedule</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewSchedules