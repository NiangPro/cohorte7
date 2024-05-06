let entete = document.getElementById("entete");
let valeur1 = "", valeur2 = "", operateur = "", resultat = "";

entete.innerText = "0";

const ajouter = (valeur)=>{
    if (operateur) {
        if ((valeur == "00" && valeur2) || valeur != "00") {
            
            valeur2 += valeur;
            entete.innerText = valeur1 + operateur +valeur2;
        }
    }else if (valeur == '00') {
        if (valeur1) {
            valeur1 += valeur;
            entete.innerText = valeur1;
        }        
    }else{
        if (valeur1 == "0" && valeur != '.') {
            valeur1 = valeur;
         entete.innerText = valeur1;

        }else{
            valeur1 += valeur;
            entete.innerText = valeur1;
        }        
    }
}

const ajouterOpt = (opt)=>{
    if (!valeur2) {
        if (valeur1) {
            operateur = opt;

            entete.innerText = valeur1 + operateur;
        }else if(opt == "-"){
            valeur1 = opt;
            entete.innerText = valeur1;
        }
    }   
    
}

function effacer(){
    if (resultat) {
        valeur1 = "";
        valeur2 = "";
        operateur = "";
        resultat = "";

        entete.innerText = "0";
    }else if (valeur2) {
        valeur2 = valeur2.substr(0, valeur2.length -1);
        entete.innerText = valeur1 + operateur + valeur2;
    }else if(operateur){
        operateur = '';
        entete.innerText = valeur1;
    }else if(valeur1){
        valeur1 = valeur1.substr(0, valeur1.length -1);

    
        entete.innerText = valeur1 ? valeur1 : '0';
    }
}

function calculer(){
    if (valeur2) {
        if (operateur == "+") {
            resultat = parseFloat(valeur1) + parseFloat(valeur2);
        }else if (operateur == "-") {
            resultat = parseFloat(valeur1) - parseFloat(valeur2);
        }else if (operateur == "x") {
            resultat = parseFloat(valeur1) * parseFloat(valeur2);
        }else if (operateur == "/") {
            resultat = parseFloat(valeur1) / parseFloat(valeur2);
        }

        entete.innerText = valeur1 + operateur + valeur2 +" = "+resultat;
    }
}