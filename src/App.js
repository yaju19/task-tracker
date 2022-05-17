import './App.css';
import Header from './components/Header.js'
import Task from './Tasks.js'
import {useState} from 'react'
import AddTask from './components/AddTask.js';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text:'Go to Park',
      day: 'Friday',
      reminder: true
    },
    {
      id: 2,
      text: 'Visit Sandeep',
      day: 'Monday',
      reminder: true
    },
    {
      id: 3,
      text: 'See a doctor',
      day: 'Tuesday',
      reminder: false
    }
  ])
  // Delete task
  const onDelete=(id)=>{
    setTasks(tasks.filter((task)=> task.id !== id))
  }
  // Toggle reminder
  function toggleReminder(id){
    setTasks(
      tasks.map((task)=>task.id == id ? {...task, reminder: !task.reminder} : task)
    )
  }
  // Add Task
  const addTask = (text, date, reminder)=>{
    console.log('task has been added,', text, date, reminder)
    const newTask = {id: tasks.length + 1, text: text, day: date, reminder: reminder}
    setTasks([...tasks, newTask])
  }
  // Toggle Add button
  const toggleAddButton = () =>{
    setShowAddTask(!showAddTask)
  }
  return (
    <div className="container">
      <Header 
      toggleAddButton={toggleAddButton} 
      title='Task Tracker' 
      showAddTask={showAddTask}
      />
      {showAddTask ? <AddTask addTask={addTask} /> : null}
      {tasks.length >0 ? 
      <Task tasks={tasks} 
      onDelete={onDelete} 
      onToggle={toggleReminder}
      /> : 'No more tasks'}
    </div>
  );
}


export default App;
