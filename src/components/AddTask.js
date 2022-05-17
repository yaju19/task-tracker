import { useState } from 'react'

function AddTask(props) {
  const [text, setText] = useState("")
  const [date, setDate] = useState("")
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) =>{
    e.preventDefault()

    if(!text || !date){
      alert('Enter values for text and date')
    }
    props.addTask(text, date, reminder)

    setText('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input 
        type='text' 
        placeholder='Add Task' 
        value={text} 
        onChange={(e)=>setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input 
        type='text' 
        placeholder='Add Date & Time' 
        value={date} 
        onChange={(e)=>setDate(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
        type='checkbox'
        value={reminder} 
        checked={reminder}
        onChange={(e)=>setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask