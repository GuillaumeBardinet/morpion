let a=[0,0,0,0,0,0,0,0,0]
let tour=1
let horizontal=["gauche","centre","droite"]
let vertical=["haut","milieu","bas"]
let victoire=0
let nombre_de_tours=0

function f(x) {
    if (a[x-1]==0 && victoire==0) {
    a[x-1]=tour
    tour=-1*tour
    nombre_de_tours++
    afficher()}
}

function afficher() {
    for (let i=0;i<3;i++) {
        for (let j=0;j<3;j++) {
            if (a[3*j+i]==1) {
                let elements=document.getElementsByClassName(horizontal[i])
                let element=elements[j]
                element.innerHTML="<p>X</p>"
            }
            else if (a[3*j+i]==-1) {
                let elements=document.getElementsByClassName(horizontal[i])
                let element=elements[j]
                element.innerHTML="<p>O</p>"
            }
        }
    }
    fin_du_jeu()
}

function test_victoire() {
    for (let k=-1;k<2;k=k+2){
        for (let i=0;i<3;i++) {
            if (a[i]==k && a[i+3]==k && a[i+6]==k) {return k}
            else if (a[3*i]==k && a[3*i+1]==k && a[3*i+2]==k) {return k}
        }
        if (a[0]==k && a[4]==k && a[8]==k) {return k}
    }
    return 0
}

function fin_du_jeu() {
    let qui_a_gagne=test_victoire()
    if (qui_a_gagne==1) {
        let texte=document.getElementById("Fin")
        texte.innerHTML="Le joueur 1 a gagné"
        victoire=1
    }
    else if (qui_a_gagne==-1) {
        let texte=document.getElementById("Fin")
        texte.innerHTML="Le joueur 2 a gagné"
        victoire=2
    }
    else if (nombre_de_tours==9) {
        let texte=document.getElementById("Fin")
        texte.innerHTML="Match nul"
        victoire=3}
    if (victoire!=0){
        let bouton=document.getElementById("Bouton")
        bouton.innerHTML="<button onclick='rejouer()'>Rejouer</button>"
    }
}

function rejouer(){
    a=[0,0,0,0,0,0,0,0,0]
    tour=1
    victoire=0
    nombre_de_tours=0
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++) {
            let elements=document.getElementsByClassName(horizontal[i])
            let element=elements[j]
            element.innerHTML=""
        }
    }
    let texte=document.getElementById("Fin")
    texte.innerHTML=""
    let bouton=document.getElementById("Bouton")
    bouton.innerHTML=""
}