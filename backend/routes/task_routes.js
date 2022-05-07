const Task = require("../models/Task");
const router=require("express").Router();
//fetch
router.get('/task', async (req, res) => {
//   const username = req.query.user;
  try {
    let tasks;
    // if (username) {
    //   tasks = await Task.find({ username });
    // } else if (catName) {
    //   tasks = await Task.find({
    //     categories: {
    //       $in: [catName],
    //     },
    //   });
    // } else {
      tasks = await Task.find();
    // }
    return res.status(200).send(tasks);
  } catch (err) {
    return res.status(500).send(err);
  }

});

//Get task
router.get('/task', async (req, res) => {
  try {
    const task = await task.findById(req.params.id);
    return res.status(200).send(task);
  } catch (err) {
    return res.status(500).send(err);
  }
});

//Create Task
router.post('/task', async (req, res) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();
    return res.status(200).send(savedTask);
  } catch (err) {
    return res.status(500).send(err);
  }
});

//Update Task
router.put('/task', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    // if (task.username === req.body.username) {
      try {
        const updatedTask = await Task.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).send(updatedTask);
      } catch (err) {
        return res.status(500).send(err);
      }
    // } else {
    //   return res.status(401).send("You can update only your post!");
    // }
  } catch (err) {
    return res.status(500).send(err);
  }
});

//Delete Task
router.delete('/task', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    // if (post.username === req.body.username) {
      try {
        await task.delete();
        return res.status(200).send("Task has been deleted...");
      } catch (err) {
        return res.status(500).send(err);
      }
    // } else {
    //   return res.status(401).send("You can delete only your post!");
    // }
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports=router;