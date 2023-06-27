let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter /*funciona para las palabras que van apareciendo y desapareciendo*/
  .pauseFor(2500)
  .typeString('<span style="color: #9f4fa3;"> Desarrollo sitios web, me interesa todo sobre cableado estructurado y me gusta todo lo relacionado a la tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
