import { React, useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './style/GameOver.css'
import WellDone from '../image/welldone.svg'

function GameOver() {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id='gameOver'>
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>
                Você acertou {quizState.score} de {quizState.questions.length} {" "} perguntas.
            </p>
            <img src={WellDone} alt='finish' />
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>Restart</button>
        </div>
    )
}

export default GameOver