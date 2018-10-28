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
                indexInQuiz,
                answers: [...(state.answers || []), action.indexAnswer]
            }
        default:
    }

    return state;
}
