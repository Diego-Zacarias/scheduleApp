import React from 'react'

const DateAndTime = () => {

const saveDate = () => evt => {
  localStorage.setItem('schedule_app/selectDate', evt.target.value)
  console.log(localStorage.getItem('schedule_app/selectDate'))
}

const saveTime = () => evt => {
  localStorage.setItem('schedule_app/selectTime', evt.target.value)
}

  return (
    <div className='mb-3'>
      <label htmlFor='inputDate' className='form-label'>Date and Time</label>
      <div className='row'>
        <div className='col'>
          <input type='date' className='form-control' id='inputDate' onBlur={saveDate()} />
        </div>
        <div className='col'>
          <input type='time' className='form-control' id='inputTime' onBlur={saveTime()} />
        </div>
      </div>
    </div>
  )
}

export default DateAndTime