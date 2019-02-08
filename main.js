'use strict'

document.addEventListener('DOMContentLoaded', ()=>{

    const canvas = document.getElementById('canvas');
    const cxt = canvas.getContext('2d');


    document.addEventListener('click', ()=>{
        cxt.fillRect(200, 200, 5, 5,);
    });

});
