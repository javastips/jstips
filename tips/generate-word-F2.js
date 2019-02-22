/* en : Every time you press F2 , u generate the spy emoji 🕵️  */
/* fr : Toute les fois que vous appuyer F2 , vous generer l'emoji dans le champs pointé   */


let textarea = document.querySelector('textarea')
textarea.addEventListener("keydown", event => {
	if(event.keycode === 113) {
	 replaceSelection(textarea, "🕵️");
	 event.preventDefault();
	}
});
