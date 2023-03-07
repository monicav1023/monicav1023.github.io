<><script>
    function myFunction() 
    var pag1 = document.getElementById("pag1");
    var btnText = document.getElementById("myBtn");
    var btnotro = document.getElementById("otrobtn");
    var  pag2 = document.getElementById("pag2");
    var  adicional = document.getElementById("adicional");
    if (pag1.style.display === "none") {pag1.style.display = "inline"};
    btnText.innerHTML = "Siguiente";
    btnotro.style.display ="none";
    pag2.style.display = "none";
    adicional.style.display ="none";
    document.getElementById("otrobtn").removeAttribute("disabled");
    else {pag1.style.display = "none"};
    btnText.innerHTML = "previo";
    btnotro.style.display ="inline";
    pag2.style.display="inline"
    
</script>
   <button onclick="otrafuncion()" id="otrobtn">Informacion adicional</button>
   <script>
        function otrafuncion()
        var  pag2 = document.getElementById("pag2");
        var  adicional = document.getElementById("adicional");
        pag2.style.display = "none";
        adicional.style.display ="inline"
        document.getElementById("otrobtn").setAttribute("disabled", "disabled");




    </script></>