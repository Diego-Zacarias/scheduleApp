import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DoctorInput = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get('https://gist.githubusercontent.com/ZacaDev23/a1a0ce525bdfdc3d779cda890f21453b/raw/b1a503166d54e9ba2bf7bf34788e529b6e677422/doctors.json')
      .then(res => {
        setDoctors(res.data)
      })
  },[])

  const listdoctor = item => {
    return (
      <option key={item.doctorId} value={item.doctorId}>{item.doctor}</option>
    )
  }

  return (
    <div className='mb-3'>
      <label htmlFor='selectdoctor' className='form-label'>doctor</label>
      <select className='form-select' aria-label='Select Doctor' id='selectdoctor'>
        {doctors.map(listdoctor)}
      </select>
    </div>
  )
}

export default DoctorInput