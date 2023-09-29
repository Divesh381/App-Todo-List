import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import mainStyle from './Main.module.css'
import Home from './Home'
import { addTodoList } from '../Redux/Action'
import Recent from './Recent'


export default function Main() {
    const [InputData, setInput] = useState('')
    const dispatch = useDispatch()

    return (

        <div>

            <form className={mainStyle.container}>
                <Home />
                <div className={mainStyle.cardBody}>
                    <div className={mainStyle.row} >
                        <div className={mainStyle.HeadName}>Data List</div>
                        <div className=" form-floating col-lg-7 mt-5">
                            <input type="text" className="form-control" value={InputData} onChange={(event) => setInput(event.target.value)} id={mainStyle.floatingInput} placeholder="Enter a data.." required/>
                            <label htmlFor="floatingInput">Enter a data</label>
                        </div>
                        <div className={mainStyle.buttonposition} >

                            <button onClick={(e) => dispatch(addTodoList(InputData), setInput(''), e.preventDefault())} className="btn btn-primary bg-primary mt-2" >ADD</button>
                        </div>
                        
                    </div>
                    <div className={mainStyle.containerList}>
                        <Recent />
                    </div>

                </div>

            </form>
        </div>
    )
}
