import React from 'react'

const signin = () => {
    return (
        <div>
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
