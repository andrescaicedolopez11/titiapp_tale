import { defineStore } from 'pinia'

export const useEvaluacionStore = defineStore('evaluacion', {
  state: () => ({
    aciertos: 0,
    errores: 0,
    tiempoInicio: null,
    tiempoFin: null,
    ejercicioActual: 0,
    ejerciciosTotales: 12 // aquí ajusto la cantidad total de ejercicicios para el contador
  }),
  getters: {
    tiempoTotal(state) {
      if (
        typeof state.tiempoInicio === 'number' &&
        typeof state.tiempoFin === 'number' &&
        state.tiempoFin > state.tiempoInicio
      ) {
        return (state.tiempoFin - state.tiempoInicio) / (1000 * 60) // minutos
      }
      return 0
    }
  },
  actions: {
    iniciarEvaluacion() {
      this.aciertos = 0
      this.errores = 0
      this.ejercicioActual = 0
      this.tiempoInicio = Date.now()
      this.tiempoFin = null
    },
    finalizarEvaluacion() {
      this.tiempoFin = Date.now()
    },
    registrarAcierto() {
      this.aciertos++
      this.ejercicioActual++
    },
    registrarError() {
      this.errores++
      this.ejercicioActual++
    }
  }
})
