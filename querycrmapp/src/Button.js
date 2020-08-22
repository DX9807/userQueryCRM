import React,{Component} from 'react';
import './Button.scss';


class Button extends Component{

    render(){
        return(
            <button className="btn" type="submit" name="submit" value="Submit">Submit</button>
        )
    }
}

export default Button;