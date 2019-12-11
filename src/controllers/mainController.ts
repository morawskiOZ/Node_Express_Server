const path = require("path")

exports.homePage = (req, res) => {
  res.sendFile(
    path.join(__dirname + `../../../${process.env.FRONT_NAME}/build/index.html`)
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 94618ba8d9149a3c8ddb5bb95756f1542503fd65
