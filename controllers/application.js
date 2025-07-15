const { application } = require("express")
const User = require("../models/user")

// API's

exports.app_index_get = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id)
  res.render("application/index.ejs", {
    applications: currentUser.applications,
  })
}

exports.app_create_get = async (req, res) => {
  res.render("application/new.ejs")
}

exports.app_create_post = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id)
  currentUser.applications.push(req.body)
  await currentUser.save()
  res.redirect(`/users/${currentUser._id}/application`)
}

exports.app_show_get = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id)
  const application = currentUser.applications.id(req.params.applicationId)
  res.render("application/show.ejs", { application })
}

exports.app_edit_get = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id)
  const application = currentUser.applications.id(req.params.applicationId)
  res.render("application/edit.ejs", { application })
}

exports.app_Update_put = async (req, res) => {
  const currentUser = await User.findByIdAndUpdate(req.session.user._id)
  currentUser.applications.push(req.body)
  res.redirect(`/users/${currentUser._id}/application/${req.params.applicationId}`)
}

exports.app_delete_delete = async (req, res) => {
  await User.findByIdAndDelete(req.session.user._id)
  res.redirect(`/users/`)
}