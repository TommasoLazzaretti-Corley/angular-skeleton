import { computed, Injectable, signal, Signal } from '@angular/core';

export interface AppState {
  data: {},
  isLoading: boolean,
  error?: string,
}

@Injectable({ providedIn: "root" })
export class StateManager {

  appState = signal<AppState>({ isLoading: false, data: {} });

  data = computed(() => this.appState().data);
  isLoading = computed(() => this.appState().isLoading);
  error = computed(() => this.appState().error);

  setState(newState: Partial<AppState>) {
    console.log("sono nel setState")
    this.appState.update((state) => {
      console.log("sono nel update - con state = a ", this.appState())
      return { ...state, ...newState }
    });
    console.log("finito nel update - con state = a ", this.appState())
  }
}
