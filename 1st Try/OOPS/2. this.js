// console.log(this);

function func() {
  console.log(this);
}

func();

// if you console log this it will return window object | to avoid this we use 'use strict'
