import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Prepare breakfast',
                day: 'Feb 5th at 8:00am',
                reminder: false,
            },
            {
                id: 2,
                text: 'Go to class',
                day: 'Feb 5th at 9:00am',
                reminder: true,
            },
            {
                id: 3,
                text: 'Study for exams',
                day: 'Feb 5th at 8:00pm',
                reminder: false,
            },
            {
                id: 4,
                text: 'Go to bed',
                day: 'Feb 5th at 11:00pm',
                reminder: true,
            },
        ]
    )

    // Toggle Remainder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => 
      task.id === id 
      ? { ...task, reminder: !task.reminder } 
      : task))
    }

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="container">
      <Header title='Bruh Moment' />
      {tasks.length > 0 ?
        <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}
        />
        : 'No Tasks to show'
      }  
    </div>
  );
}

export default App;
