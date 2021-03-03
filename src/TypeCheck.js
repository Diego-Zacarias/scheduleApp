import React, {useState} from 'react'

const TypeCheck = () => {

  const [check, setCheck] = useState(false)

  const changeCheck = () => {
    setCheck(!check)
  }

  const saveType = () => evt => {
    localStorage.setItem('schedule_app/selectType', evt.target.value)
  }

  return (
    <div>
      <label htmlFor='inPerson' className='form-label'>Type</label>
      <div className='mb-3 form-check'>
        <div className='d-flex flex-wrap'>
          <div className='p-2 m-2'>
            <input type='checkbox' className='form-check-input' id='inPerson' value='In person' checked={check === false} onChange={changeCheck} onClick={saveType()} />
            <label className='form-check-label' htmlFor='inPerson'>In person</label>
          </div>
          <div className='p-2 m-2'>
            <input type='checkbox' className='form-check-input' id='telemedicine' value='Telemedicine' checked={check === true} onChange={changeCheck} onClick={saveType()} />
            <label className='form-check-label' htmlFor='telemedicine'>Telemedicine</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypeCheck