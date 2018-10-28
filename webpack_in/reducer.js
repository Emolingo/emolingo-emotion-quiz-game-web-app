import action_types from './action_types.js';

import arrQuizQuestions from './quiz_questions.js';

export default (state = {}, action) => {
    const { type } = action;
    switch(type) {
        case action_types.ACTION_INIT:
            return {
                indexInQuiz: 0
            };
        case action_types.ACTION_NEXT_QUESTION:
            const indexInQuiz = (state.indexInQuiz === arrQuizQuestions.length - 1)
                                    ? null
                                    : state.indexInQuiz + 1;
            return {
                ...state,
                indexCorrect: null,
                indexError: null,
                indexInQuiz,
                answers: [...(state.answers || []), action.indexAnswer]
            };
        case action_types.ACTION_FLASH_CORRECT:
            return {
                ...state,
                indexCorrect: action.indexAnswer
            };
        case action_types.ACTION_FLASH_ERROR:
            return {
                ...state,
                indexError: action.indexAnswer
            };
        default:
    }

    return state;
}
