// console.log("oh yeeeeaaaah"); // pour vérifier que mon fichier drumkit.js soit bien pris en compte sur chacune de mes pages.

window.addEventListener('keydown', function(evnt) {
  console.log(evnt); // on peut ajouter ".key" ou ". + n'importe quelle propriété de cet event" (les propriétés sont listées quand on toggle l'evenement dans la console du browser)
  
  const audio = document.querySelector(`audio[data-key="${evnt.keyCode}"]`);
  
  if(!audio) 
  console.log("no audio, bro!");
  // return; // stop the function from running all together.
  else 
  audio.play();

});