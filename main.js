import { MyWysiwyg } from './my_wysiwyg.js';
window.onload = function () {
    let button_b = document.getElementById('b');
    let button_i = document.getElementById('i');
    let button_s = document.getElementById('s');
    let color = document.getElementById('color-picker');
    let button_plus = document.getElementById("plus");
    let button_moins = document.getElementById("moins");
    let button_lien = document.getElementById('lien');
    let button_more = document.getElementById('more');
    let button_less = document.getElementById('less');
    let align_l = document.getElementById('align_l');
    let align_r = document.getElementById('align_r');
    let align_c = document.getElementById('align_c');
    let align_j = document.getElementById('justify');
      
    const mw = new MyWysiwyg(document.getElementById('plain-text'));

    let count_button1 = true;
    button_b.addEventListener('click', ()=>{
        if(count_button1 === true){
            button_b.classList.add('active')
            mw.addGras();
            count_button1 = false;
        }
        else{
            button_b.classList.remove('active')
            mw.removeGras();
            count_button1 = true
        }
    });
    
    let count_button2 = true;
    button_i.addEventListener('click', ()=>{
        if(count_button2 === true){
            button_i.classList.add('active')
            mw.addItalique();
            count_button2 = false;
        }
        else{
            button_i.classList.remove('active')
            mw.removeItalique();
            count_button2 = true
        }
    });

    let count_button7 = true;
    button_s.addEventListener('click', ()=>{
        if(count_button7 === true){
            button_s.classList.add('active')
            mw.addTexte_barre();
            count_button7 = false;
        }
        else{
            button_s.classList.remove('active')
            mw.removeTexte_barre();
            count_button7 = true
        }
    });

    color.addEventListener('change', (e)=>{
        mw.addCouleur(e.target.value);
    })

    button_plus.addEventListener('click', ()=>{
            mw.tailleP();
            button_plus.classList.add('active');
            function changeButton (){
                button_plus.classList.remove('active');
            }
            setTimeout(changeButton, 100);
    });

    button_moins.addEventListener('click', ()=>{
            mw.tailleM();
            button_moins.classList.add('active');
            function changeButton (){
                button_moins.classList.remove('active');
            }
            setTimeout(changeButton, 100);
    });

    button_lien.addEventListener('click', (e)=>{
        let prompt = window.prompt("Entrez un URL:");
        mw.addLien(prompt);
    })
    
    button_more.addEventListener('click', ()=>{
        mw.trait_epais();
        button_more.classList.add('active');
        function changeButton (){
            button_more.classList.remove('active');
        }
        setTimeout(changeButton, 100);
    });
    
    button_less.addEventListener('click', ()=>{
        mw.trait_fin();
        button_less.classList.add('active');
        function changeButton (){
            button_less.classList.remove('active');
        }
        setTimeout(changeButton, 100);
    });
    

    let count_button3 = true;
    align_l.addEventListener('click', ()=>{
        if(count_button3 === true){
            align_l.classList.add('active')
            mw.addTexte_g();
            count_button3 = false;
        }
        else{
            align_l.classList.remove('active')
            mw.removeTexte_g();
            count_button3 = true
        }
    });

    let count_button4 = true;
    align_r.addEventListener('click', ()=>{
        if(count_button4 === true){
            align_r.classList.add('active')
            mw.addTexte_d();
            count_button4 = false;
        }
        else{
            align_r.classList.remove('active')
            mw.removeTexte_d();
            count_button4 = true
        }
    });

    let count_button5 = true;
    align_c.addEventListener('click', ()=>{
        if(count_button5 === true){
            align_c.classList.add('active')
            mw.addTexte_c();
            count_button5 = false;
        }
        else{
            align_c.classList.remove('active')
            mw.removeTexte_c();
            count_button5 = true
        }
    });

    let count_button6 = true;
    align_j.addEventListener('click', ()=>{
        if(count_button6 === true){
            align_j.classList.add('active')
            mw.addTexte_j();
            count_button6 = false;
        }
        else{
            align_j.classList.remove('active')
            mw.removeTexte_j();
            count_button6 = true
        }
    });
}