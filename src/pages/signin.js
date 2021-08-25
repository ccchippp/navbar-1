import React from 'react'
import styles from './index.css'


const signin = () => {
    return (
        <div className='page'>
            <h1>Sign In</h1>
            <form>
                <label htmlFor="fname" className="fname"></label>
                <input type="text" id='fname' name='fname'/><br></br>
                <label htmlFor="lname" className="lname"></label>
                <input type="text" id='lname' name='lname'/><br></br>
            </form>
        </div>
    )
}

export default signin
