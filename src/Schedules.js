import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Schedules = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/Schedules')
      .then(res => {
        setData(res.data)
        console.log(res.status)
      })
      .catch((erro) => {
        console.log(erro)
      })
  },[])

  const renderTable = item =>{
    return(
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
            {data.map(renderTable)}
        </tbody>
      </table>
    </div>
  )
}

export default Schedules