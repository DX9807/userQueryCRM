import React,{Component} from 'react';
import Button from './Button';
import './Form.scss';

class Form extends Component{
    render(){
        return(
            <div className="main">
                <h3>User Query Form</h3>
                <form className="form">
                    <div>
                    <label htmlFor="firstname">FirstName:</label>
                    <input type="text" placeholder="first name" name="firstname" required="required"/>
                    </div>
                    <div>
                    <label htmlFor="lastname">LastName:</label>
                    <input type="text" placeholder="last name" name="lastname" required="required"/>
                    </div>  
                    <div>
                    <label htmlFor="query">Query:</label>
                    <input type="text" placeholder="your query goes here....." name="query" required="required"/>
                    </div>
                    <Button />
                </form>
            </div>
        )
    }
}

export default Form;