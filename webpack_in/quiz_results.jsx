//  This file is part of Emolingo Emotion Recognition Quiz Game Web App.
//  https://github.com/Emolingo/emolingo-emotion-quiz-game-web-app


import React from 'react';
import { connect } from 'react-redux';

import actions from './actions.js';
import arrQuizQuestions from './quiz_questions.js';


const mapStateToProps = state => ({
    answers: state.answers
});

const mapDispatchToProps = dispatch => ({
    init: () => dispatch(actions.init())
});

class QuizPane extends React.Component {
    render() {
        const totalCorrect = arrQuizQuestions.reduce(
            (acc, objQuestion, index) => {
                if (this.props.answers[index] === objQuestion.indexCorrect) {
                    acc++;
                }
                return acc;
            }, 0);

        return (
            <div>
              <div>
                Congratulations!  You completed the quiz!
              </div>
              <button onClick={ () => {
                      this.props.init();
                  }}>
                Play Again
              </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizPane);
