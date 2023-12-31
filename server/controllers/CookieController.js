const cookieController = {}
cookieController.setSSID = (req, res, next) => {
    res.cookie("SSID", res.locals.userId, {httpOnly: true, secure: true })
    return next()
}
module.exports = cookieController