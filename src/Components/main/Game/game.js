import React from 'react'
import * as gameAPI from '../../../services/game-api';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQ: ['Dogs or Cats?', 'You want to get a gift for someone, do you get something thoughtful or expensive?', 'Are you friends with an ex?', 'Wild night out, or cozy night in?', 'City or Nature?', 'Beer or Wine?', 'Do you want kids?', 'LA or NY?', "Mac or PC?", 'Candy or Chocolate?'],
            idx: 0,
            answer1: ['Dogs', 'Thoughtful', 'Yes', 'Night out!', 'City', 'Beer', 'Yes', 'LA', 'Mac', 'Candy'],
            answer2: ['Cats', 'Expensive', 'No', 'Night in', 'Nature', 'Wine', 'No', 'NY', 'PC', 'Chocolate'],
            selectedAnswers: [],
            allGames: null,
            currentUsersAnswers: [],
            totalAverage: 0
        }
    }


    handleClick = (answer) => {
        if (this.state.idx === this.state.currentQ.length) {
            let formData = {}
            this.state.currentQ.forEach((question, index) => {
                formData[index] = {};
                formData[index]['question'] = question;
                formData[index]['answer'] = this.state.selectedAnswers[index]
            })
            this.state.idx = 50
            // answer.preventDefault();
            this.props.handleAddGameAnswers(formData);
        } else {
            // this.setState({selectedAnswers: this.state.selectedAnswers.push(answer)})
            this.setState({ selectedAnswers: [...this.state.selectedAnswers, answer] })
            this.setState({ idx: this.state.idx + 1 })
        }
    }


    handleCompareAnswers = () => {
        let currentUsersAnswers
        gameAPI.getAll()
            .then(data => {
                this.setState({
                    allGames: data,
                    idx: 51,
                })
                currentUsersAnswers = data.pop().answer;
                this.setState({ currentUsersAnswers });
                this.compareAnswersHelper(data)
            }
            )
        return

    }


    compareAnswersHelper = (data) => {
        let count = []
        data.forEach((d, idx) => {
            this.state.currentUsersAnswers.forEach((e, index) => {
                if (d.answer[index] === e) {
                    if (!count[index]) count[index] = 0;
                    count[index] += 1
                }
            })
        })
        let totalAverage = 0;
        count.forEach((num, i) => {
            totalAverage += num / data.length;
        })
        totalAverage = (totalAverage / count.length) * 100;
        totalAverage = (Math.round(totalAverage))
        this.setState({ totalAverage: totalAverage })



    }


    render() {
        return (
            <div style={{ border: '2px solid rebeccapurple', marginLeft: '34%', padding: '136px' }}>
                <h3>{this.state.currentQ[this.state.idx]}</h3>
                {this.state.idx === this.state.currentQ.length ? this.handleClick() :
                    this.state.idx == 50 ? this.handleCompareAnswers() :
                        this.state.idx == 51 ? <h1 style={{ color: 'rebeccapurple' }}>Youre {this.state.totalAverage}% compatable with other users</h1>
                            :
                            < div style={{ display: 'inline-grid' }}>
                                <button style={{ padding: '10px', marginBottom: '10px' }} onClick={(answer) => this.handleClick(answer.target.value)} value={this.state.answer1[this.state.idx]}>{this.state.answer1[this.state.idx]}</button>
                                <button style={{ padding: '10px' }} onClick={(answer) => this.handleClick(answer.target.value)} value={this.state.answer2[this.state.idx]}>{this.state.answer2[this.state.idx]}</button>
                            </div>
                }
            </div>
        )
    }
}

