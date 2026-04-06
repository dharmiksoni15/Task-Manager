const express=require("express");
const router=express.Router();

const Task=require("../models/Task");

// Get All Task

router.get("/",async(req,res)=>{
    try {
        const tasks=await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "failed to fetch tasks" });
    }
});

// Post New Task

router.post("/",async(req,res)=>{
    try {
        const { title }=req.body;

        if(!title || title.trim() === ""){
            return res.status(400).json({ message: "Task Title is required" });
        }

        const newTask = new Task({
            title:title.trim(),
        });

        const savedTask= await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: "failed to add task" });
    }
});

// PUT update task

router.put("/:id",async(req,res)=>{
    try {
        const { completed,title } = req.body;

        const updatedTask=await Task.findByIdAndUpdate(
            req.params.id,
            { title,completed },
            { new:true }
        );

         if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });

       res.status(200).json(updatedTask);
    }
    } catch (error) {
         res.status(500).json({ message: "Failed to update task" });
    }
});

// Delete task

router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete task" });
  }
});

module.exports = router;
