import { React, useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './style/GameOver.css'
import WellDone from '../image/welldone.svg'

function GameOver() {
  return (
    <div id='gameOver'>
        
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: X</p>
        <p>Você acertou x de z perguntas.</p>
        <img src={WellDone} alt='finish' />
        <button>Restart</button>



        </div>
  )
}

export default GameOver