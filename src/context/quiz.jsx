import { useReducer } from "react";
import { createContext } from "react";
import questions from '../data/questions';

const STAGES = ["Start", "Playing", "End"]

const inititalStage = {
    gameStage: STAGES[0],
    questions
}

const quizReducer = (state, action) =>{
    
    switch(action.type){
        case "CHANCE_STAGE":
            return state;

            default:
                return state;
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {

    const value = useReducer(quizReducer);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};