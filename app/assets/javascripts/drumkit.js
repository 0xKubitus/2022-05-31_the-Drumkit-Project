window.addEventListener('keydown', function(evnt) {
  
  // console.log(evnt); // on peut ajouter ".key" ou ". + n'importe quelle propriété de cet event" à 'evnt'. (les propriétés sont listées quand on toggle l'evenement dans la console du browser)

  const audio = document.querySelector(`audio[id="${evnt.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${evnt.keyCode}"]`);

  // fontion pour jouer le son correspondant à la touche du clavier pressée par l'utilisateur :
  audio.currentTime = 0; // rewind to the start of the sound
  audio.play();

  // on ajoute la classe 'playing' definie dans 'style.css' à la div correspondant à la touche du clavier pressée par l'utilisateur :
  key.classList.add("playing");
   


  const divs_class_key = document.querySelectorAll(".key");

  console.log(document.querySelectorAll(".key"));

  divs_class_key.forEach((div_class_key) => {
    div_class_key.addEventListener("transitionend", function (event) {
      div_class_key.classList.remove("playing");
    })
  });




});





