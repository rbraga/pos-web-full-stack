import React from 'react';
import { TodoListItem } from './TodoListItem';

export function TodoList() {
    const taskItems = [
        {
            id: 1,
            name: 'Task 1',
            status: true
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
    return (
        <ul>
            {taskItems.map(task =>  (
                <li>
                    <TodoListItem {...task} />
                </li>
            ))}
        </ul>
    )
}