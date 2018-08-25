$(function() {
    list = new Array();

  total = document.getElementById('total');
  //media = parseFloat(document.getElementById('media').value);
  $(document.getElementsByName('p')).bind('click', function() {

    var valTotal = total.value;

    valTotal = parseFloat(valTotal.replace(',', '.'));

    var valInput = (this.value);
    list.push(valInput);
    valInput = parseFloat(valInput.replace(',', '.'));


    var value = (this.checked) ? parseFloat((valTotal + valInput)) : parseFloat((valTotal - valInput));
    total.value = value;
    var valores = total.value;
    var muni = document.getElementById("municipio");
    t_lista = list.length;
    var aux = 0;
    media = parseFloat(valores)/t_lista;
    document.getElementById("medias").innerHTML = media;
    document.getElementById("show_city").innerHTML = muni.value;

    if (p.checked  ) {

        document.getElementById("demo").innerHTML = list.length;
        alert(list.length);
    }
   else if (!p.checked ) {
        list.splice(list.indexOf(valInput),1);
        document.getElementById("demo").innerHTML = list.length;
        alert(list);

    }

  });

});