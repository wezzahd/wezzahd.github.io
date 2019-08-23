function centerCanvas() {

  inner = iosInnerHeight();
  var cnv_x = (windowWidth - width) / 2;
  var cnv_y = (inner - height) / 2;
  cnv.position(cnv_x, cnv_y);

}

function make2Darray(cols, rows) {
  var arr = new Array(rows);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function capturecam() {
  capture = createCapture(VIDEO, ready);
  capture.elt.setAttribute('playsinline', '');
  capture.size(width, height);
  capture.hide();
}
