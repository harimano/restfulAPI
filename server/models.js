const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angular_first4', {useNewUrlParser:true})
  .catch(err => console.log(err));

const TaskSchema = new mongoose.Schema({
    title: {
      type: String, 
      default: ""
    },
    description: {
      type: String, 
    },
    completed: {
      type: Boolean, 
      default: false 
    }, 
}, {timestamps:true});

module.exports = mongoose.model('Task', TaskSchema); 
