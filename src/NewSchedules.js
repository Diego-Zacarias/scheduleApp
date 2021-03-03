import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import SpecialtyInput from './SpecialtyInput'
import DoctorInput from './DoctorInput'
import DateAndTime from './DateAndTime'
import TypeCheck from './TypeCheck'

const NewSchedules = () => {

  //Declaração dos useStates que controlam os dados do formulário
  
  const [form, setForm] = useState({
    id: '',
    specialty: '',
    doctor: '',
    date: '',
    type: ''
  });
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [success, setSuccess] = useState(false)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    localStorage.setItem('schedule_app/selectType', 'In person')
    if (localStorage.getItem('schedule_app/data') !== null) {
      let set = JSON.parse(localStorage.getItem('schedule_app/data'))
      setData(Object.values(set))
    } else {
      axios
        .get('https://gist.githubusercontent.com/ZacaDev23/4634f491f746abe1662ead2afeb2430f/raw/0221a5de94c05cd73b67164a632160d741461405/db.json')
        .then(res => {
          setData(res.data)
        })
    }
  }, [])

  useEffect(() => {
    setId(data.length)
  },[data])

  useEffect(() => {
    if(success){  
      setData({
        ...data,
        [id]: form
      })
      setRedirect(true)
    }
  },[form])

  // as funções abaixos lidam com a recuperação dos dados do form e inserem na State form
  // changeCheck -> altera o state que controla o campo check que terá o atributo checked.
  // getSchedules -> insere no state form o value dos campos Specialty e Doctor.
  // getDate e getTime -> insere no state form o value dos campos date e time chamando a função setDateForm.
  // saveSchedules -> Função acionada ao precionar o button do formulário. destinada a dalsar os dados no banco de dados.

  const saveSchedules = () => {
    let specialty = 'specialty'
    let doctor = 'doctor'
    let date = 'date'
    let type = 'type'
    let new_id = 'id'
    setForm({
      [new_id]: id + 1, 
      [specialty]: localStorage.getItem('schedule_app/selectSpecialty'),
      [doctor]: localStorage.getItem('schedule_app/selectDoctor'),
      [date]: localStorage.getItem('schedule_app/selectDate') + ' - ' + localStorage.getItem('schedule_app/selectTime'),
      [type]: localStorage.getItem('schedule_app/selectType')
    })
    setSuccess(true)
  }

  if(success){
    localStorage.removeItem('schedule_app/selectSpecialty')
    localStorage.removeItem('schedule_app/selectDoctor')
    localStorage.removeItem('schedule_app/selectDate')
    localStorage.removeItem('schedule_app/selectTime')
    localStorage.removeItem('schedule_app/selectType')
    
    localStorage.setItem('schedule_app/data', JSON.stringify(data))
  }

  if(redirect) {
    return <Redirect to='/schedules' />
  }

  return (
    <div>
      New Schedules
      <div className='mx-auto w-50 mt-5 mb-5'>
        <form>
          <SpecialtyInput />
          <DoctorInput />
          <DateAndTime />
          <TypeCheck />
          <div className='d-grid gap-2'>
            <button type='button' className='btn btn-primary' onClick={saveSchedules}>Save Schedule</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewSchedules