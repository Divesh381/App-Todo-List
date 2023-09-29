import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { removeTodoList, emptyData } from '../Redux/Action'
import recentStyle from './Recent.module.css'
const Recent = () => {
  const list = useSelector(state => state.addData.data)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log("recent",list)
  }, [list])

  return (
    <div >
      <h1>Items</h1>
      <button onClick={(e) => dispatch(emptyData(), e.preventDefault())} className={recentStyle.EmptyButton}>Empty data</button>
      <div className={recentStyle.containerSet}>
        <table >
          <tr>
            <th className={recentStyle.CountNumber}>S.N</th>
            <th className={recentStyle.Headname}>Data</th>
          </tr>
          {/* <hr className={recentStyle.hrSet}/> */}
          {
               list.map((todos, index) => {
              return (
                 
                  todos.message !== '' ?
                (  
                <tr key={index} >
                         
                  <td style={{ color: 'white' }}>{++index}</td>
                  <td>
                    <tr className={recentStyle.listData}><p id={recentStyle.textMessage}>{(todos.message)}</p>
                      <button onClick={(event) => dispatch(removeTodoList(todos.id), event.preventDefault())} className={recentStyle.buttonSet} >Delete</button>
                    </tr>
                  </td>
                </tr>)
                  : (null)
                
              )
            })
          }
        </table>

        {/* {

          list.map((todos, index) => {
            return (<div key={index} className={recentStyle.listData}>
              <p id={recentStyle.textMessage}>{(todos.message)}</p>
              <button onClick={() => dispatch(removeTodoList(todos.id))} className={recentStyle.buttonSet} >Delete</button>
            </div>)
          })
        } */}
      </div>

    </div >
  )
}

export default Recent
