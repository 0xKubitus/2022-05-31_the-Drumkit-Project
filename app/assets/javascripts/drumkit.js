window.addEventListener('keydown', function(evnt) {
  
  // console.log(evnt); // on peut ajouter ".key" ou ". + n'importe quelle propriété de cet event" à 'evnt'. (les propriétés sont listées quand on toggle l'evenement dans la console du browser)
  console.log(evnt);

  const audio = document.querySelector(`audio[id="${evnt.keyCode}"]`);
  audio.currentTime = 0; // rewind to the start of the sound
  audio.play();
});
