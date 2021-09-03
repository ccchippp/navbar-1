import React from 'react'
import styles from './index.css'

const signin = () => {
    return (
        <div className='sign-in'>
            <div className='sign-in-h1'>
                <h1>Sign In</h1>
            </div>

            <div className='sign-in-form'>
                <form>
                    <label htmlFor="fname" className="fname">First Name: </label>
                    <input type="text" id='fname' name='fname'/><br></br>
                    <label htmlFor="lname" className="lname">Last Name: </label>
                    <input type="text" id='lname' name='lname'/><br></br>
                    <label htmlFor="password" className="password">Password: </label>
                    <input type="password" id='password' name='password'/><br></br>
                    <label htmlFor="password" className="password">Confirm Password: </label>
                    <input type="password" id='password' name='password'/><br></br>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default signin
