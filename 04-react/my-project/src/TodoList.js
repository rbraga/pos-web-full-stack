import React from 'react';
import { TodoListItem } from './TodoListItem';

export function TodoList() {
    const taskItems = [
        {
            id: 1,
            name: 'Task 1',
            status: 'pending'
        },
        {
            id: 2,
            name: 'Task 2',
            status: 'pending'
        },
        {
            id: 3,
            name: 'Task 3',
            status: 'pending'
        }
    ]

    const handleShowTaskName = (taskName) => alert(`Você clicou em ${taskName}`)

    return (
        <ul>
            {taskItems.map(task =>  (
                <li>
                    <TodoListItem onShowTaskName={handleShowTaskName} {...task} />
                </li>
            ))}
        </ul>
    )
}