/* Cette fonction dessine une forme arborescente en traçant une ligne, en déplaçant le centre du système de coordonnées jusqu'à la fin de la ligne et en s'appelant deux fois: elle a d'abord pivoté à gauche, puis à droite. Chaque appel réduit la longueur de la branche dessinée et la récursivité s’arrête lorsque la longueur passe au-dessous de 8. */

let cx = document.querySelector('canvas').getContext("2d");
	function branch(length , angle , scale) {
	  cx.fillRect(0, 0, 1, length);
	  if(length < 8) return ;
	  cx.save();
	  cx.translate(0 , length);
	  cx.rotate(-angle);
	  
	  branch(length * scale , angle,scale);
	  cx.rotate(2 * angle);
	  branch(length * scale, angle, scale);
	  cx.restore();
	}
	cx.translate(300,0);
	branch(60 , 0.5, 0.8);
