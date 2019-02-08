'use strict'

document.addEventListener('DOMContentLoaded', ()=>{

    const screen = document.getElementById('screen');
    const sxt = screen.getContext('2d');

    sxt.fillstyle = 'blue';
    sxt.fillRect(10, 10, 500, 500);

});