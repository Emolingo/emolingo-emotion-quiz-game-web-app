//  This file is part of Emolingo Emotion Recognition Quiz Game Web App.
//  https://github.com/Emolingo/emolingo-emotional-quiz-game-web-app

import React from 'react';
import { connect } from 'react-redux';

import AnswerButton from './answer_button.jsx';
import arrQuizQuestions from './quiz_questions.js';

const mapStateToProps = (state) => ({
    indexInQuiz: state.indexInQuiz
});

class QuizQuestion extends React.Component {

    render() {
        const objQuestion = arrQuizQuestions[this.props.indexInQuiz];

        return (
            <div>
              { objQuestion.video
                  ? (
                      <video width={ 320 } controls>
                        <source src={ "videos/" + objQuestion.video }></source>
                      </video>
                    )
                  : null}
              <div>
                { objQuestion.text }
              </div>
              <ul style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      listStyleType: 'none',
                      padding: 0
                  }}>
                { objQuestion.answers.map((objAnswer, index) => (
                    <li key={ index }>
                      <AnswerButton question={ objQuestion }
                                    indexInQuestion={ index } />
                    </li>
                )) }
              </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps)(QuizQuestion);
