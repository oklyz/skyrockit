const router = require("express").Router()
const appCtrl = require("../controllers/application")

// Routes / Cal API's

router.get("/", appCtrl.app_index_get)
router.get("/new", appCtrl.app_create_get)
router.post("/", appCtrl.app_create_post)
router.get("/:applicationId", appCtrl.app_show_get)

router.get("/:applicationId/edit", appCtrl.app_edit_get)
router.put("/:applicationId", appCtrl.app_Update_put)

router.delete("/applicationId", appCtrl.app_delete_delete)

module.exports = router
