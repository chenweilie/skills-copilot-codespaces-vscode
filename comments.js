// Create web server with express
// CRUD: Create, Read, Update, Delete

// import express
const express = require("express");

// import router
const router = express.Router();

// import comments model
const Comment = require("../models/Comment");

// import post model
const Post = require("../models/Post");

// import user model
const User = require("../models/User");

// import authentication
const isAuthenticated = require("../middlewares/isAuthenticated");

// import comments validator
const validateCommentInput = require("../middlewares/validateCommentInput");

// @route POST comments/:id
// @desc create a comment
// @access private
router.post("/:id", isAuthenticated, validateCommentInput, async (req, res) => {
  try {
    // get comment content
    const content = req.body.content;

    // get post id
    const postId = req.params.id;

    // get user id
    const userId = req.user.id;

    // create a new comment
    const newComment = new Comment({
      content,