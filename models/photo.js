const mongoose = require("./connection.js");

const PhotoSchema = new mongoose.Schema({
  name: String,
  img: String,
});

const photoCollection = mongoose.model("Photo", PhotoSchema);

const getPhotos = () => {
  return photoCollection.find({});
};

const getPhotosById = (id) => {
  return photoCollection.findById(id);
};

const createPhoto = (photoObject) => {
  return photoCollection.create(photoObject);
};

const deletePhoto = (id) => {
  return photoCollection.deleteOne({ _id: id });
};

const updatePhoto = (id, updatedPhoto) => {
  return photoCollection.updateOne({ _id: id }, updatedPhoto);
};
module.exports = {
  getPhotos,
  getPhotosById,
  createPhoto,
  deletePhoto,
  updatePhoto,
};
