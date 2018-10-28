import action_types from './action_types.js';

export default {
    init: () => ({
        type: action_types.ACTION_INIT
    }),
    next_question: indexAnswer => ({
        type: action_types.ACTION_NEXT_QUESTION,
        indexAnswer
    }),
    flash_correct: indexAnswer => ({
        type: action_types.ACTION_FLASH_CORRECT,
        indexAnswer
    }),
    flash_error: indexAnswer => ({
        type: action_types.ACTION_FLASH_ERROR,
        indexAnswer
    })
};
