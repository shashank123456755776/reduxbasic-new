import React from 'react'
import {buycake} from '../Redux'
import {connect} from 'react-redux'


const Cakecontainer = (props) => {
  return (
    <div>
          <h2>Number of cakes - {props.noofcake}</h2>
          <button onClick={props.buycake}>BUY CAKE</button>
    </div>
  )
}
// step 1
const mapStateToProps = (state)=> {
    return {
        noofcake: state.noofcake
     }
}
// step 2
const mapDispatchToProps = (dispatch) => {
    return {
       buycake:()=>dispatch(buycake()) 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cakecontainer)
