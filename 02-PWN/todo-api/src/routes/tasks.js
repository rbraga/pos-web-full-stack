const express = require('express');


const router = new express.Router();

router.post('/tasks', (req, res) => {
    res.status(201).send();
});

router.get('/tasks', (req, res) => {
    const tasks = [
        {name:  'task1'},
        {name:  'task2'}
    ];

    res.status(200).send(tasks);
});

router.get('/tasks/:id', (req, res) => {
    console.log(req.params.id);
    const user = {name: 'task1'};
    res.status(200).send(user);
});

router.patch('/tasks/:id', (req, res) => {
    res.send();
});

router.delete('tasks/:id', (req, res) => {
    res.send();
});

module.exports = router;