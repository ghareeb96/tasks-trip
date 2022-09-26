import React from 'react'
import { ReactComponent as ArrowUp } from './arrow-up.svg'
import { ReactComponent as ArrowDown } from './arrow-down.svg'
import { ReactComponent as ArrowLeft } from './arrow-left.svg'
import { ReactComponent as ArrowRight } from './arrow-right.svg'


const Task = ({ task, move }) => {

    return (
        <div className='task'>
            <div className="body">
                <h4>{task.body}</h4>
            </div>

            <div className="arrows-container">
                <button onClick={() => move(task, 'left')}> <ArrowLeft className='icon' /> </button>
                <button onClick={() => move(task, 'down')}> <ArrowDown className='icon' /> </button>
                <button onClick={() => move(task, 'up')}> <ArrowUp className='icon' /> </button>
                <button onClick={() => move(task, 'right')}> <ArrowRight className='icon' /> </button>
            </div>
        </div>
    )
}

export default Task