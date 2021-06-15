$(function() {
    var Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    
    $(".operacion1").change(function(){
        var s1 = document.getElementById("sel1").value;
        var s2 = document.getElementById("sel2").value;
        var n = parseFloat(document.getElementById("campo1").value);
        var resultado = parseFloat('0');
        if(s1 !== s2) {
            if(s1==='dm' && s2==='cm' || s1==='m' && s2==='dm' || s1==='cm' && s2==='mm') {
                resultado = n * 10;
            }
            else if(s1==='cm' && s2==='dm' || s1==='dm' && s2==='m' || s1==='mm' && s2==='cm') {
                resultado = n / 10;
            }
            else if(s1==='m' && s2==='cm' || s1==='dm' && s2==='mm') {
                resultado = n * 100;
            }
            else if(s1==='cm' && s2==='m' || s1==='m' && s2==='cm') {
                resultado = n / 100;
            }
            else if(s1==='m' && s2==='mm') {
                resultado = n * 1000;
            }
            else if(s1==='mm' && s2==='m') {
                resultado = n / 1000;
            }
            $(document).Toasts('create', {
              class: 'bg-success',
              title: s1 + ' a ' + s2,
              subtitle: '',
              body: ''+resultado
            });
        }
        else {
            resultado=n;
        }
            document.getElementById('respuesta').innerHTML = resultado;
        });
    
    $(".operacion2").change(function(){
        var s1 = document.getElementById("sel3").value;
        var s2 = document.getElementById("sel4").value;
        var n = parseFloat(document.getElementById("campo2").value);
        var resultado = parseFloat('0');
        if(s1 !== s2) {
            if(s1==='celsius' && s2==='fahrenheit'){
                resultado = n * (9/5);
                resultado += 32;
            }
            else if(s1==='fahrenheit' && s2==='celsius'){
                resultado = n - 32;
                resultado *= (5/9);
            }
            $(document).Toasts('create', {
              class: 'bg-success',
              title: s1 + ' a ' + s2,
              subtitle: '',
              body: ''+resultado
            });
        }
        else {
            resultado=n;
        }
            document.getElementById('respuestat').innerHTML = resultado;
    });
    
    $(".operacion3").change(function(){
        var s1 = document.getElementById("sel5").value;
        var s2 = document.getElementById("sel6").value;
        var n = parseFloat(document.getElementById("campo3").value);
        var resultado = parseFloat('0');
        if(s1 !== s2) {
            if(s1==='kg' && s2==='l'){
                resultado = n * 2.20462;
            }
            else if(s1==='l' && s2==='kg'){
                resultado = n / 2.20462;
            }
            $(document).Toasts('create', {
              class: 'bg-success',
              title: s1 + ' a ' + s2,
              subtitle: '',
              body: ''+resultado
            });
        }
        else {
            resultado=n;
        }
            document.getElementById('respuestam').innerHTML = resultado;
    });
});