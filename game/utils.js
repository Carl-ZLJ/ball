let log = function () {
  console.log.apply(console, arguments)
}

let imageFromPath = function (path) {
  var img = new Image()
  img.src = path
  return img
};
