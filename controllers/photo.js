const express = require("express");

const photoApi = require("../models/photo.js");

const photoRouter = express.Router();

photoRouter.get("/", (req, res) => {
  photoApi
    .getPhotos()
    .then((allPhotos) => {
      res.json(allPhotos);
    })
    .catch((error) => {
      console.log("Failed to retrieve Photos");
      console.log(error);
      res.send(error);
    });
});

photoRouter.get("/:id", (req, res) => {
  photoApi
    .getPhotoById(req.params.id)
    .then((singlePhoto) => {
      res.json(singlePhoto);
    })
    .catch((error) => {
      console.log("Failed to retriev Photo by Id");
      console.log(error);
      res.send(error);
    });
});

photoRouter.post("/", (req, res) => {
  photoApi
    .createPhoto(req.body)
    .then((photoCreated) => {
      res.json(photoCreated);
    })
    .catch((error) => {
      console.log("Failed to Create Photo");
      console.log(error);
      res.send(error);
    });
});

photoRouter.delete("/:id", (req, res) => {
  photoApi
    .deletePhoto(req.params.id)
    .then(() => {
      res.send("Photo was Deleted");
    })
    .catch((error) => {
      console.log("Failed to Delete Photo");
      console.log(error);
      res.send(error);
    });
});

photoRouter.put("/:id", (req, res) => {
  photoApi
    .updatePhoto(req.params.id, req.body)
    .then((updatedPhoto) => {
      res.json(updatedPhoto);
    })
    .catch((error) => {
      console.log("Failed to Update Photo");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  photoRouter,
};
