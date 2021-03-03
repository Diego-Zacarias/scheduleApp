import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SpecialtyInput = () => {
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    axios
      .get('https://gist.githubusercontent.com/ZacaDev23/20e79e0505e1ca45b6722137a9e6f2d0/raw/50d39da0d1a6682cffba00d8d1d47e2c111a4375/specialties.json')
      .then(res => {
        setSpecialties(res.data)
      })
  },[])

  const listSpecialty = item => {
    return (
      <option key={item.specialtyId} value={item.specialtyId}>{item.specialty}</option>
    )
  }

  const saveSpecialty = () => evt => {
    localStorage.setItem('schedule_app/selectSpecialty', evt.target.value)
  }

  return (
    <div className='mb-3'>
      <label htmlFor='selectSpecialty' className='form-label'>Specialty</label>
      <select className='form-select' aria-label='Default select example' id='selectSpecialty' onChange={saveSpecialty()}>
        <option value=''></option>
        {specialties.map(listSpecialty)}
      </select>
    </div>
  )
}

export default SpecialtyInput