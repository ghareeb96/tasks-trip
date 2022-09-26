import React from 'react'
import Task from '../Task/Task'


const List = ({ list, tasks, move}) => {

    return (
        <div className='list'>
            <div className="headline">
                <h3>
                    {list.name}
                </h3>
            </div>

            <div className="tasks-container">
                {
                    tasks.map(task => (
                        <Task
                            task={task}
                            key ={task.id}
                            move={move}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default List