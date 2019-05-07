
// const TypeWriter = function(txtElement, words, wait=3000){
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait,10);
//     this.type();
//     this.isDeleting = false;
// }

class TypeWriter {
    constructor(txtElement,words,wait=3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait,10);
        this.type();
        this.isDeleting = false;
    }

    type(){
        const current = this.wordIndex % this.words.length;
        //get full text of current word
        const fulTxt = this.words[current];
        //check if deleting
        if(this.isDeleting){
            //remove char
            this.txt = fulTxt.substring(0, this.txt.length - 1);
        }else{
            //add character
            this.txt = fulTxt.substring(0, this.txt.length + 1);
        }
        //Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}<span>`
    
        //type speed
        let typeSpeed = 300;
        if(this.isDeleting){
            typeSpeed /= 2;
        }
        //if word is complete
        if(!this.isDeleting && this.txt === fulTxt){
            //make pause at the end
            typeSpeed = this.wait;
            this.isDeleting = true;
    
        }else if(this.isDeleting && this.txt === '' ){
            this.isDeleting = false;
            this.wordIndex++    
            typeSpeed = 500;
        }
        setTimeout(() =>this.type(),typeSpeed)
    }

}

//Type method
// TypeWriter.prototype.type = function(){
//     //console.log('hello')
//     const current = this.wordIndex % this.words.length;
//     //get full text of current word
//     const fulTxt = this.words[current];
//     //check if deleting
//     if(this.isDeleting){
//         //remove char
//         this.txt = fulTxt.substring(0, this.txt.length - 1);
//     }else{
//         //add character
//         this.txt = fulTxt.substring(0, this.txt.length + 1);
//     }
//     //Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}<span>`

//     //type speed
//     let typeSpeed = 300;
//     if(this.isDeleting){
//         typeSpeed /= 2;
//     }
//     //if word is complete
//     if(!this.isDeleting && this.txt === fulTxt){
//         //make pause at the end
//         typespeed = this.wait;
//         this.isDeleting = true;

//     }else if(this.isDeleting && this.txt === '' ){
//         this.isDeleting = false;
//         this.wordIndex++    
//         typespeed = 500;
//     }
//     setTimeout(() =>this.type(),typeSpeed)
// }
//Init on DOM load
const init=() =>{
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //init the type writter
    const writter = new TypeWriter(txtElement,words,wait);
    writter.type();
}
document.addEventListener('DOMContentLoaded', init);

// //Init app


