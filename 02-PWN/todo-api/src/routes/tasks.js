const express = require('express');
const Task = require('../models/tasks');

const router = new express.Router();

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch(error) {
        res.status(400).send(error);
    }
    res.status(201).send(req.body);
});

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).send(tasks);
    } catch(error) {
        res.status(500).send(error)
    }
});

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);

        if (!task) {
            return res.status(404).send();
        }
        res.send(task)
    } catch(error) {
        res.status(500).send(error)
    }
});

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdate = ["description", "completed"];
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: 'Esses campos não podem ser atualizados'});
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        
        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (error) {
        res.status(500).send(error)
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch(error) {
        res.status(500).send();
    }
});

module.exports = router;