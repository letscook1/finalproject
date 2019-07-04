import React, {Component} from 'react';

class Login2 extends Component {
    render(){
        return (
            <div className="App">
              <header className="App-header about">
                <section className="Service">
                   <div className="containerLogin">
                      <h1>Hello! Please tell us a little bit about yourself.</h1>
                    </div>
                    <div>
                        <form>
                            <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <a href="/Login">
                                <button type="submit" className="btn btn-outline-secondary">Back</button>
                            </a>
                        </form>
                    </div>

                   
                      <a href="/">
                         <button type="button" className="btn btn-secondary">Already a member? Log in</button>
                     </a>
                   </section>
                </header>
             </div>
        )

    }
}

export default Login2;