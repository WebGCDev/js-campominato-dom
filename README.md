# CAMPO MINATO CON BOMBE E PUNTEGGIO

```
Il gioco
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
```

---

Per realizzare il gioco con la sua logica ho pensato a questa risoluzione:

- Genero un array vuoto, inserirò al suo interno id univoci che mi visualizzeranno le 16 bombe create, non potranno avere lo stesso id di una già esistente e quindi ricorrerò a una funzione per creare posizionamenti random ogni partita giocata.
- Nel css creo la class per la bomba e se l’id nell’array di gestione delle bombe corrisponde al click e quindi alla scoperta di essa metto una funzione che mi faccia terminare la partita.
- Nella funzione di termine partita, metterò come priorità la fine della partita quando saranno rivelate tutte le celle che non sono bombe.
- Per evitare che l’utente possa cliccare più volte sulla stessa cella utilizzerò il metodo _removeEventListener_ che mi permetterà di eliminare un listener di eventi precedentemente registrato.
