import React, { useState } from 'react';
import './App.scss';
import List from './Components/List/List';

const App = () => {


  // hardcoded example for the list array
  const listsArr = [
    {
      name: 'Requested',
      list_id: 1,
    },
    {
      name: 'Todo',
      list_id: 2,
    },
    {
      name: 'In Progress',
      list_id: 3,
    },
    {
      name: 'Done',
      list_id: 4,
    },
  ]

  // hardcoded example for the tasks array
  const tasksArr = [{
    body: 'task A',
    listId: 1,
    id: 1,
  },
  {
    body: 'task B',
    listId: 1,
    id: 2,
  },
  {
    body: 'task C',
    listId: 2,
    id: 3,
  },
  {
    body: 'task D',
    listId: 3,
    id: 4,
  },
  {
    body: 'task E',
    listId: 4,
    id: 5,
  },
  {
    body: 'task F',
    listId: 4,
    id: 6,
  },
  {
    body: 'task G',
    listId: 2,
    id: 7,
  },
  ]



  const [tasks, setTasks] = useState(tasksArr)
  const [lists, setLists] = useState(listsArr)


  // Navigating between lists function
  // where dir is the direction either 1 for right or -1 for left
    const moveLeftRight = (task, dir) => {
    if (!(dir === 1 && task.listId === lists.length) || (dir === -1 && task.listId === 1)) {
      const newTasks = [...tasks]
      const currentIndex = newTasks.indexOf(task)
      newTasks.splice(currentIndex, 1)
      newTasks.push({ ...task, listId: task.listId + dir })
      setTasks(newTasks)
    }
  }

  // Reordering the tasks list function
  // where pos is the position either 1 for up or -1 for down
  const moveUpDown = (task, pos) => {
    const newTasks = [...tasks]
    const currentIndex = newTasks.indexOf(task)

    if (pos === 1) {
      for (let i = currentIndex - 1; i >= 0; i--) {
        if (newTasks[i].listId === task.listId) {
          newTasks.splice(currentIndex, 1)
          newTasks.splice(i, 0, task)
          break
        }
      }
      setTasks(newTasks)
    }else{
      for (let i = currentIndex + 1; i < newTasks.length; i++) {
        if (newTasks[i].listId === task.listId) {
          newTasks.splice(currentIndex, 1)
          newTasks.splice(i, 0, task)
          break
        }
      }
      setTasks(newTasks)
    }
  }


  // Switch function to determine the moving direction of the task
  const move = (task, dir) => {

    switch (dir) {
      //* left and right navigation
      case 'left':
        moveLeftRight(task, -1)
        break
      case 'right':
        moveLeftRight(task, 1)
        break

      //* up and down navigation
      case 'up':
        moveUpDown(task, 1)
        break
      case 'down':
        moveUpDown(task, -1)
        break
      default:
        return
    }
  }


// Filtering the tasks according to the lists array
  const filterList = (tasks, listId) => {
    let filteredList = tasks.filter(task => task.listId === listId)
    return filteredList
  }


  return (
    <div className="App" >
      <div className="container">


        {
          lists.map(list => (
            <List
              list={list}
              key = {list.list_id}
              tasks={filterList(tasks, list.list_id)}
              move={move}
            />
          ))
        }
      </div>

    </div>
  );
}

export default App;