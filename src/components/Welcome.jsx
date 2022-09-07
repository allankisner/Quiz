import React from 'react'
import Quiz from '../image/quiz.svg'
import './style/Welcome.css'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Welcome = () => {

    const quizState = useContext(QuizContext)
    console.log(quizState)

  return (
    <div id="welcome">
        <h2>Seja bem vindo</h2>
        <p>Clique no Botão para começar</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="image quiz" />
    </div>
  )
}

export default Welcome;