Appli focntionnelle, je n'ai juste pas fait la partie "2.3. Boite à musique ciblée" :

Pour la dernière partie du projet, nous allons te demander de faire en sorte que le code JS du drum kit ne s'exécute QUE dans la view concernée. Les autres views ne doivent pas exécuter le code du drum kit.

En gros, tu devras trouver un moyen pour que le fichier drum.js (ou autre nom) ne soit exécuté que dans la view avec le drum kit.

_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

=> je pense qu'il faut :
  1) enlever le "require drumkit" du fichier "application.js" rangé dans "app/assets/javascripts" ;
  2) faire appel à "application.js" directement dans ma view "root" (<script src="chemin_du_fichier/fichier.js"></script>)

A CONFIRMER !
