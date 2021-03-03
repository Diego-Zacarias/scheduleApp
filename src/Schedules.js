import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SpecialtyInput from './SpecialtyInput'
import DoctorInput from './DoctorInput'

const Schedules = () => {

  const [data, setData] = useState([])
  const [dataSchedule, setDataSchedule] = useState([])

  //Aqui é realizada a conexão com o json

  useEffect(() => {
    if (localStorage.getItem('schedule_app/data') !== null) {
      let set = JSON.parse(localStorage.getItem('schedule_app/data'))
      setData(Object.values(set))
      setDataSchedule(Object.values(set))
    } else {
      axios
        .get('https://gist.githubusercontent.com/ZacaDev23/4634f491f746abe1662ead2afeb2430f/raw/0221a5de94c05cd73b67164a632160d741461405/db.json')
        .then(res => {
          setData(res.data)
          setDataSchedule(res.data)
        })
    }
  }, [])

  const filterTable = () => {
    clearTable()
    let specialty = localStorage.getItem('schedule_app/selectSpecialty')
    let doctor = localStorage.getItem('schedule_app/selectDoctor')
    if (specialty && doctor) {
      setDataSchedule(dataSchedule.filter(schedule => schedule.specialty === specialty && schedule.doctor === doctor))
    } else if (specialty && (doctor === '' || doctor === null)) {
      setDataSchedule(dataSchedule.filter(schedule => schedule.specialty === specialty))
    } else if (doctor && !specialty) {
      setDataSchedule(dataSchedule.filter(schedule => schedule.doctor === doctor))
    } else {
      clearTable()
    }
  }

  const clearTable = () => {
    setDataSchedule(data)
  }
  //Esta funçao escreve os itens da tabela de schedules

  const renderTable = item => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.specialty}</td>
        <td>{item.doctor}</td>
        <td>{item.date}</td>
        <td>{item.type}</td>
      </tr>
    )
  }

  return (
    <div>
      Schedules
      <hr />
      <div className='row filter'>
        <div className='col-2'>
          <p>Filter by:</p>
        </div>
      </div>
      <div className='d-flex flex-row filter'>
        <div className='m-1'>
          <SpecialtyInput />
        </div>
        <div className='m-1'>
          <DoctorInput />
        </div>
      </div>

      <div className='d-flex flex-row '>
          <div className='d-grid gap-2 m-1'>
            <button type='button' className='btn btn-primary' onClick={() => filterTable()} onMouseUp={() => filterTable()}>Filter</button>
          </div>
          <div className='d-grid gap-2 m-1'>
            <button type='button' className='btn btn-primary' onClick={() => clearTable()}>Clear</button>
          </div>
      </div>
      <hr />
      <table className='bg-table table table-borderless mt-5'>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Specialty</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {dataSchedule.map(renderTable)}
        </tbody>
      </table>
    </div>
  )
}

export default Schedules