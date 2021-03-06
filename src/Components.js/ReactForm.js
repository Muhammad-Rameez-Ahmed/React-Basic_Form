import React, { useState } from 'react'

const ReactForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEnrty] = useState([]);

    const formSubmit = (event) => {
        event.preventDefault();

        const newEntry = {
            // id used For uniqeness and used in map method becuase map method always contain key.
            id: new Date().getTime().toString,
            email: email,
            password: password
        };
        setAllEnrty([...allEntry, newEntry]);

        setEmail("");
        setPassword("");
    }

    const changeHandler0 = (event) => {
        setEmail(event.target.value);
    }

    const changeHandler1 = (event) => {
        setPassword(event.target.value);
    }



    return (

        <>

            <form action='' onSubmit={formSubmit}>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" autoComplete='off' required value={email} onChange={changeHandler0} />
                </div>


                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" id="password" autoComplete='off' required value={password} onChange={changeHandler1} />
                </div>

                <button type="submit">Submit</button>

            </form>

            <div>
                {
                    allEntry.map((curElem) => {
                        //object destructing
                        const { id, email, password } = curElem;
                        return (
                            <div className='showDataStyle  ' key={id}>
                                <p>{email}</p>
                                <p>{password}</p>

                            </div>
                        )
                    })
                }


            </div>

        </>

    )
}

export default ReactForm;