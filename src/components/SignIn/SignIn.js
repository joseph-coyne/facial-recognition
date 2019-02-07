import React from 'react';
import './SignIn.css'

const SignIn = ({ onRouteChange }) => {
	return (
		<div>
		<article className="mw6 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
				<main className="pa4 black-80">
				  <form className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0 white">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
				        <input className="pa2 br3 input-reset white ba b--black-10 w-100" type="email" name="email-address"  id="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba b--black-10 br3 white w-100" type="password" name="password"  id="password"/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick={() => onRouteChange("home")} id="submit" className="b ph3 pv2 input-reset ba br3 b--black-10 grow white pointer f6 dib" type="submit" value="Sign in"/>
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => onRouteChange("Register")} href="#0" className="pointer f6 link dim black db white">Register</p>
				    </div>
				  </form>
				</main>
			</article>

		</div>
	);
}

export default SignIn;