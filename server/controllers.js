const Task = require('./models');

module.exports = {

  getAllTasks: (req, res) => {
    Task.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getOneTask: (req, res) => {
    const ID = req.params.id;
    Task.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createTask: (req, res) => {
    const DATA = req.body;
    console.log("hari", DATA);
    Task.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateTask: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Task.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteTask: (req, res) => {
    const ID = req.params.id;
    Task.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}