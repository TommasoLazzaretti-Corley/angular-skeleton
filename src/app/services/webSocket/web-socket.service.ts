import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject, Subscription } from 'rxjs';

const WS_ENDPOINT = 'environment.WEBSOCKET_ENDPOINT';

/**
 * Servizio per la gestione delle connessioni WebSocket.
 */
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<void>;
  private messageReceivedSubject: Subject<any> = new Subject<any>();
  private refreshTimer: Subscription | null = null;

  /**
   * Observable per la ricezione dei messaggi WebSocket.
   */
  public messageReceived: Observable<any> = this.messageReceivedSubject.asObservable();

  constructor() { }

  /**
   * Stabilisce la connessione WebSocket al server.
   *
   * deserializer: Il deserializzatore (deserializer) è una funzione personalizzata che viene utilizzata
   * per convertire il payload del messaggio in arrivo da un formato specifico (ad esempio, una stringa)
   * in un oggetto JavaScript. Nel codice di esempio, la funzione JSON.parse(e.data) viene utilizzata
   * come deserializzatore per convertire il payload del messaggio WebSocket da una stringa JSON in un oggetto JavaScript.
   *
   * serializer: Il serializzatore (serializer) è una funzione personalizzata che viene utilizzata per
   * convertire un oggetto JavaScript in una rappresentazione di stringa o di altro formato adatto per
   * l'invio attraverso la connessione WebSocket. Nel codice di esempio, la funzione JSON.stringify(value)
   * viene utilizzata come serializzatore per convertire l'oggetto value in una stringa JSON.
   */
  public connect(): void {
    // Configurazione dell'oggetto WebSocketSubject
    this.socket$ = webSocket({
      url: WS_ENDPOINT, // Inserisci l'URL del tuo server WebSocket
      deserializer: (e) => JSON.parse(e.data), // Deserializzatore personalizzato per i messaggi in arrivo
      serializer: (value) => JSON.stringify(value), // Serializzatore personalizzato per i messaggi in uscita
      openObserver: {
        next: () => {
          // EXECUTE WHEN STARTED CONNECTION
        }
      }
    });

    // Avvia il timer di refresh ogni 30 minuti
    /*
    this.refreshTimer = interval(30 * 60 * 1000).subscribe(() => {
      this.refreshConnection();
    });
    */

    /**
     * Multiplexing: Il multiplexing consente di gestire diversi tipi di messaggi all'interno della stessa
     * connessione WebSocket. Nel codice di esempio, la funzione multiplex viene utilizzata per sottoscriversi
     * e disiscriversi dai messaggi utilizzando le funzioni () => ({ type: 'subscribe' }) e () => ({ type: 'unsubscribe' })
     * rispettivamente. La terza funzione (message) => {...} viene utilizzata per gestire i messaggi ricevuti
     * dal server e inoltrarli all'observable messageReceived per consentire agli altri componenti di reagire ai messaggi.
     */
    this.socket$.multiplex(
      () => ({ }), // Funzione per sottoscriversi ai messaggi
      () => ({ }), // Funzione per disiscriversi dai messaggi
      (message): any => {
        console.log('socket$.multiplex message received', message);
        this.messageReceivedSubject.next(message);
      }
    ).subscribe(
      () => {
        console.log('Connessione WebSocket aperta.');
      },
      (error) => {
        console.error('Errore nella connessione WebSocket:', error);
      },
      () => {
        console.log('Connessione WebSocket chiusa.');
      }
    );
  }

  /**
   * Invia un messaggio tramite la connessione WebSocket.
   */
  public sendMessage(): void {
    if (this.socket$ && !this.socket$.closed) {
      this.socket$.next();
    } else {
      console.log('La connessione WebSocket non è aperta.');
    }
  }

  /**
   * Chiude la connessione WebSocket.
   */
  public close(): void {
    if (this.socket$ && !this.socket$.closed) {
      // this.stopRefreshTimer();
      this.socket$.complete();
    }
  }

  private refreshConnection(): void {
    this.close(); // Chiude la connessione WebSocket esistente
    this.connect(); // Stabilisce una nuova connessione WebSocket
  }

  private stopRefreshTimer(): void {
    if (this.refreshTimer) {
      this.refreshTimer.unsubscribe();
      this.refreshTimer = null;
    }
  }

}
