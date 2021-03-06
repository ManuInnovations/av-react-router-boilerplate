const debug = require('debug')('components:loginForm')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');




class loginForm extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div>
        <form>
          <p>Email:</p><input type='text' ref='email' placeholder='email' />
          <p>Password:</p><input type='password' ref='password' placeholder='password'/>
          <p></p>
          <button onClick={this.handleClick.bind(this)} className='button'>log In</button>
        </form>
      </div>
    )
  }

  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()

    const webhookdata = {
      "type": "text",
      "text": "A big juicy steak.",
      "field": {
        "id": "12345",
        "type": "short_text"
      }
  }
    request.post('api/v1/login')
    .send(webhookdata)
    .end((err,response)=>{
      if(err){
        console.log('error in loginform', err);
      } else{
        console.log(response);
        this.props.router.push(`/`)
      }
    })
  }


}

module.exports = connect((state) => state)(loginForm)
