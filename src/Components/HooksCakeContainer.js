// useselector is very easy ways rather than usedispatch
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buycake } from '../Redux'


export const HooksCakeContainer = () => {
    const noofcakes = useSelector(state => state.noofcake)
   const dispatch = useDispatch()
  return (
      <>
          <div>
          <h2>Num of cakes -{noofcakes} </h2>
          <button onClick={()=>dispatch(buycake())}> Buy cake </button>
          </div>
        
      </>
  )
}
