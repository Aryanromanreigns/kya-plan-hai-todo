import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('tasks')
    if (stored) {
      setTaskList(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  }, [taskList])

  const addTask = () => {
    if (task.trim() === '') return
    const newTask = { id: Date.now(), text: task }
    setTaskList([...taskList, newTask])
    setTask('')
  }

  const updateTask = (id) => {
    const updatedText = prompt('Update your task:')
    if (updatedText && updatedText.trim() !== '') {
      setTaskList(taskList.map(t => 
        t.id === id ? { ...t, text: updatedText } : t
      ))
    }
  }

  const removeTask = (id) => {
    setTaskList(taskList.filter(t => t.id !== id))
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h1 className="font-bold text-center text-3xl mb-4 text-indigo-900">
          Kya Plan Hai?
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Add your task..."
          />
          <button
            onClick={addTask}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        {taskList.length === 0 ? (
          <p className="text-center text-gray-500">nothing...</p>
        ) : (
          <ul className="space-y-3">
            {taskList.map((t) => (
              <li
                key={t.id}
                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
              >
                <span>{t.text}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => updateTask(t.id)}
                    className="text-blue-600 hover:underline"
                  >
                    Rename
                  </button>
                  <button
                    onClick={() => removeTask(t.id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
