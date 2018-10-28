//  This file is part of Emolingo Emotion Recognition Quiz Game Web App.
//  https://github.com/Emolingo/emolingo-emotional-quiz-game-web-app

import React from 'react';
import { connect } from 'react-redux';

import actions from './actions.js';


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    nextQuestion: indexAnswer => dispatch(actions.next_question(indexAnswer))
});

class AnswerButton extends React.Component {

    render() {
        const objQuestion = this.props.question,
            indexInQuestion = this.props.indexInQuestion;

        return (
            <button style={{ margin: '1em', padding: '1em' }}
                    onClick={ () => {
                        this.props.nextQuestion(indexInQuestion)
                    }}>
              { objQuestion.answers[indexInQuestion].text }
            </button>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerButton);
