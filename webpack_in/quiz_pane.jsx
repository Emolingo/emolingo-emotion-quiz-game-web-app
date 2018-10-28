//  This file is part of Emolingo Emotion Recognition Quiz Game Web App.
//  https://github.com/Emolingo/emolingo-emotional-quiz-game-web-app


import React from 'react';
import { connect } from 'react-redux';


import arrQuizQuestions from './quiz_questions.js';
import QuizQuestion from './quiz_question.jsx';
import QuizResults from './quiz_results.jsx';


const mapStateToProps = state => ({
    indexInQuiz: state.indexInQuiz
});

class QuizPane extends React.Component {

    render() {
        return (
            <div>
              {
                  (this.props.indexInQuiz != null)
                      ? <QuizQuestion />
                      : <QuizResults />
              }
            </div>
        );
    }
}

export default connect(mapStateToProps)(QuizPane);
