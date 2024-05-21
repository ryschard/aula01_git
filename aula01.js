var qg = prompt("DIGITE A QTD DE GOLS")
var qc = prompt("DIGITE A QTD DE PASSES CERTOS")
var qe = prompt("DIGITE QTD DE PASSES ERRADOS")

var pontos = (qg * 50) + (qc * 10) + (qe * -5)

if(pontos < 50) {
    alert("PESSIMA PARTIDA");
} else if(pontos >= 50 && pontos < 100) {
    alert("PARTIDA RUIM");
} else if(pontos >= 100 && pontos < 150) {
    alert("FEZ O BASICO");
} else if(pontos >= 150 && pontos < 200) {
    alert("FOI BEM NA PARTIDA"); 
} else {
    alert("JOGOU DEMAIS");
}