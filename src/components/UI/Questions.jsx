import React from "react";

class Questions extends React.Component {
    constructor(props){
        super(props);
        this.checkQuestions = this.checkQuestions.bind(this);
        this.state = {
            checked: false
        }
    }
    
    checkQuestions(ev){
        ev.preventDefault();
        this.setState({checked: true});
    }
    
    render(){
        let data = this.props.data;

        let questions = data.questions;
        let j = 0;
        let n = 0;
        let a = '_'
        let al = '_l'
        let b = 0
        questions = questions.map(function(el,index){
            
            let variants = el.variants.map(function(e, i){
                j++;
                n++;
                if(n > 3){
                    b++;
                    n = 1;
                }
                return<div class = 'row'>
                    <input class={a+b} type="radio" name={a+b} id={'id'+j}/>
                    <label class={al+b} for={'id'+j}>{e.title}</label>
                    
                
                </div>
            });

            
            return <div>
                <h3>{el.title}</h3>
                <div className="variants">
                    {variants}
                </div>
            </div>
        });
        
        return(
            <div>
                text
                {data.testName}
                {questions}
                <input 
                type="button" 
                value='Проверить'
                onClick={this.checkQuestions}
                disabled={this.state.checked ? true:false}/>
            </div>
        )
    }
}

export default Questions;