import React from 'react'
import { useReducer } from 'react'

const initialState = {
    username: '',
    password: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CH_USERNAME': {
            return {
                ...state,
                username: action.value
            }
        }
        case 'CH_PASSWORD': {
            return {
                ...state,
                password: action.value
            }
        }
        case 'RESET': {
            return initialState;
        }
        default:
            return state;
    }
}

const Prueba = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }

    const reset = () => dispatch({ type: 'RESET' })

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text' 
                    name='username' 
                    value={state.username} 
                    onChange={(e) => dispatch({ 
                        type: 'CH_USERNAME',
                        value: e.target.value
                })}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input 
                    type='password' 
                    name='password' 
                    value={state.password}
                    onChange={(e) => dispatch({
                        type: 'CH_PASSWORD',
                        value: e.target.value
                    })}
                />
            </div>
            <button type='submit'>Submit</button>
            <button type='submit' onClick={ reset }>Reset</button>
        </form>
    </>
  )
}

export default Prueba