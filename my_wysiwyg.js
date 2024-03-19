class MyWysiwyg {
    constructor(obj) {
        this.obj = obj;
        this.setupSave()
    }

    setupSave() {
        let saveButton = document.getElementById("saveButton");
        saveButton.addEventListener('click', () => this.saveTextAreaValue());
        this.obj.value = window.localStorage.getItem("textAreaValue");
        setInterval(() => this.saveTextAreaValue(), 600000);

        window.onbeforeunload = () => {
            let textarea = document.getElementById('plain-text');
            let localTextAreaValue = window.localStorage.getItem("textAreaValue")
            if (localTextAreaValue !== textarea.value) {
                return window.confirm();
            }
        }
    }

    saveTextAreaValue() {
        window.localStorage.setItem('textAreaValue', this.obj.value);
    }

    addGras() {
        
        this.obj.classList.add('bold');
        } 

    removeGras() {
        this.obj.classList.remove('bold');
        } 
        
    addItalique(){
        this.obj.classList.add('italic'); 
    }

    removeItalique(){
        this.obj.classList.remove('italic'); 
    }
        
    
    addTexte_barre(){
        this.obj.classList.add('line'); 
    }

    removeTexte_barre(){
        this.obj.classList.remove('line'); 
    }
    
    // addCouleur(){
    //         this.obj.classlist.add('color'); 
    //     }

    tailleP(){
        let fontSize = window.getComputedStyle(this.obj).getPropertyValue("font-size");
        let fontSize_int = parseInt(fontSize);
        this.obj.style.fontSize = fontSize_int + 25 + "px";
    }

    tailleM(){
        let fontSize = window.getComputedStyle(this.obj).getPropertyValue("font-size");
        let fontSize_int = parseInt(fontSize);
        this.obj.style.fontSize = fontSize_int - 25 + "px";
    }
    
    lien(){
        let prompt = prompt("Entrez un URL:", "http://");
    }

    // trait_epais(){}
    // trait_fin(){}

    addTexte_g(){
        this.obj.classList.add('align_g');
    }

    removeTexte_g(){
        this.obj.classList.remove('align_g');
    }

    addTexte_d(){
        this.obj.classList.add('align_d');
    }

    removeTexte_d(){
        this.obj.classList.remove('align_d');
    }

    addTexte_c(){
        this.obj.classList.add('align_c');
    }

    removeTexte_c(){
        this.obj.classList.remove('align_c');
    }

    addTexte_j(){
        this.obj.classList.add('align_j');
    }

    removeTexte_j(){
        this.obj.classList.remove('align_j');
    }

    // addSwitch_mod(){}
        
        
}

export { MyWysiwyg };