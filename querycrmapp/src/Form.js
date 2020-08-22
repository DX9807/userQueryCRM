import React,{Component} from 'react';
import Button from './Button';
import './Form.scss';


 //function for getting the csrf token
 function getCookie(name){
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

class Form extends Component{
    constructor(){
        super()
        this.state = {
            firstname: ''
        }
    }
     
    formSubmit = (e) =>{
        e.preventDefault()
        const csrftoken = getCookie('csrftoken');
        let myform = e.target
        let method = myform.method
        let action = myform.action
        let myFormData = new FormData(myform)
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 201){
                let response = JSON.parse(xhr.response)
                let showingMsg = document.getElementById("showingMsg")
                showingMsg.style.display = 'block'
                setTimeout(()=>{
                    showingMsg.style.display = 'none'
                },2000)
                showingMsg.innerHTML = response.msg
                myform.reset();
            }
        }
        xhr.open(method,action,true);
        xhr.setRequestHeader('X-CSRFToken',csrftoken)
        xhr.send(myFormData);  
    }

    render(){
        return(
            <div className="main">
                <div id="showingMsg">

                </div>
                <h3>User Query Form</h3>
                <form method="post" action="http://localhost:8000/userquery/" className="form" onSubmit={this.formSubmit}>
                    <div>
                    <label htmlFor="firstname">FirstName:</label>
                    <input type="text"  placeholder="first name" name="first_name" required="required"/>
                    </div>
                    <div>
                    <label htmlFor="lastname">LastName:</label>
                    <input type="text"  placeholder="last name" name="last_name" required="required"/>
                    </div>  
                    <div>
                    <label htmlFor="query">Query:</label>
                    <input type="text"  placeholder="your query goes here....." name="query" required="required"/>
                    </div>
                    <Button />
                </form>
            </div>
        )
    }
}

export default Form;