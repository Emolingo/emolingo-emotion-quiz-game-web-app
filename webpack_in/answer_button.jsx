//  This file is part of Emolingo Emotion Recognition Quiz Game Web App.
//  https://github.com/Emolingo/emolingo-emotion-quiz-game-web-app

import React from 'react';
import { connect } from 'react-redux';

import actions from './actions.js';


const mapStateToProps = state => ({
    indexCorrect: state.indexCorrect,
    indexError: state.indexError
});

const mapDispatchToProps = dispatch => ({
    flashCorrect: indexAnswer => dispatch(actions.flash_correct(indexAnswer)),
    flashError: indexAnswer => dispatch(actions.flash_error(indexAnswer)),
    nextQuestion: indexAnswer => dispatch(actions.next_question(indexAnswer))
});

class AnswerButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const objQuestion = this.props.question,
            indexInQuestion = this.props.indexInQuestion;

        return (
            <button style={{
                        background: this.state.flash
                                        ? (this.props.indexCorrect === indexInQuestion)
                                              ? 'green'
                                              : (this.props.indexError === indexInQuestion
                                                    ? 'red'
                                                    : null)
                                        : null,
                        margin: '1em',
                        padding: '1em'
                    }}
                    onClick={ () => {
                        if (this.props.indexCorrect != null) {
                            return;
                        }

                        if (indexInQuestion !== objQuestion.indexCorrect) {
                            this.props.flashError(indexInQuestion);
                            this._doFlash();
                            return;
                        }
                        this.props.flashCorrect(indexInQuestion);
                        this._doFlash(2, () => {
                            this.props.nextQuestion(indexInQuestion);
                        });
                    }}>
              { objQuestion.answers[indexInQuestion].text }
            </button>
        );
    }

    _doFlash(totalFlashes = 4, callback) {
        const _doCycle = () => {
            this.setState({
                flash: true
            });

            setTimeout(() => {
                this.setState({
                    flash: false
                });
                totalFlashes--;
                if (totalFlashes === 0) {
                    if (callback) {
                        callback.apply(this);
                    }
                } else {
                    setTimeout(() => {
                        _doCycle();
                    }, 250);
                }
            }, 250);
        };

        _doCycle();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerButton);
