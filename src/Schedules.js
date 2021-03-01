import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Schedules = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://gist.githubusercontent.com/ZacaDev23/4634f491f746abe1662ead2afeb2430f/raw/004aa87e4a380772181f5b4a4b2c3c259e981ead/db.json')
      .then(res => {
        setData(res.data)
        console.log(res.data)
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