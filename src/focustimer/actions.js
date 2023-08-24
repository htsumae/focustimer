import state  from "./state.js"
import { countDown, updateDisplay } from "./timer.js"
import * as sounds from '../sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  countDown()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  updateDisplay()
  
}

export function plus(){
  state.minutes = state.minutes + 5
  if(state.minutes > 60){
    state.minutes = 60
    return
  }
  updateDisplay()
}

export function minum(){
  state.minutes = state.minutes - 5
  if(state.minutes < 0){
    state.minutes = 0
    return
  }
  updateDisplay()
}

export function toggleMusic(sound){
  state.isMute = document.documentElement.classList.toggle('music-on')
  if(state.isMute){
    sounds.sounds[sound].play()
    return
  }
  sounds.sounds[sound].pause()
}