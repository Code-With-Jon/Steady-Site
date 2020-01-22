import React from 'react'


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQ: ['What is your favorite color?', 'What is your favorite food?'],
            idx: 0,
            answer1: ['red', 'japanese'],
            answer2: ['blue', 'american'],
            selectedAnswers: []
        }
    }

    handleClick = (answer) => {
        this.state.selectedAnswers.push(answer)
        this.setState({ idx: this.state.idx + 1 })
        console.log(this.state.selectedAnswers)
    }

    render() {
        return (
            <div style={{ border: '2px solid rebeccapurple', marginLeft: '34%', padding: '136px' }}>
                <h3>{this.state.currentQ[this.state.idx]}</h3>
                {this.state.idx >= this.state.currentQ.length ? 'Print results' :
                    <div style={{ display: 'inline-grid' }}>
                        <button style={{ padding: '10px', marginBottom: '10px' }} onClick={(answer) => this.handleClick(answer.target.value)} value={this.state.answer1[this.state.idx]}>{this.state.answer1[this.state.idx]}</button>
                        <button style={{ padding: '10px' }} onClick={(answer) => this.handleClick(answer.target.value)} value={this.state.answer2[this.state.idx]}>{this.state.answer2[this.state.idx]}</button>
                    </div>
                }
            </div>
        )
    }
}

