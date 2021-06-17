function result(x, y, z, j) {
  var x = document.getElementById("razioniNumber").value;
  var y = document.getElementById("personeNumber").value;
  var check = document.getElementById("bbqSalsa").checked;
  var z = document.getElementById("cibiDiversi").value;
  var j = 0;
  if (x < y || x == 0 || y == 0) {
    document.getElementById("bonus").innerHTML =
      "Servono piu razioni";
  } else {
    if (check == true) {
      j = 4;
      document.getElementById("sad").innerHTML = ":)";
    } else {
      document.getElementById("sad").innerHTML = ":(";
    }
    document.getElementById("bonus").innerHTML = (x - y) * 3 + z * 2 + j;
  }

  /* else if ((check = false)) {
    document.getElementById("sad").innerHTML = ":(";
  } else if ((check = true)) {
    document.getElementById("sad").innerHTML = ":)";
  }*/
}
