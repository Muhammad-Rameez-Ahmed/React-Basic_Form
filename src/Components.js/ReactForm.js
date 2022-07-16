import React, { useState } from 'react'

const ReactForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry,setAllEnrty] = useState([]);

const formSubmit = (event)=>{
    event.preventDefault();

    const newEntry={
        email:email,
        password:password
    };
    setAllEnrty([...allEntry,newEntry]);
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
                    <input type="text" name="email" id="email" autoComplete='off' value={email} onChange={changeHandler0} />
                </div>


                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" id="password" autoComplete='off' value={password} onChange={changeHandler1} />
                </div>

                <button type="submit">Submit</button>

            </form>

            <div>
                {
                    allEntry.map((curElem)=>{
                        return(
                            <div className='showDataStyle'>
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>

                            </div>
                        )
                    })
                }


            </div>

        </>

    )
}

export default ReactForm;