const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
  {
    title: "Bird 1",
    image: "images/HD-wallpaper-robot-hummingbird-art-birds-other-animals.jpg",
    link: "About Bird 1",
    description: "Friendly and adorable",
  },
  {
    title: "Bird 2",
    image: "images/1000_F_1210661233_5vLtlKYVi7nML8vCWIuwuLEg5zUhIraj.jpg",
    link: "About Bird 2",
    description: "Loves to nap in sunbeams",
  },
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));