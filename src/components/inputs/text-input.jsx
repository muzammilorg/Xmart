import React from 'react'
import styles from './text-input.module.scss'

export  const  TextInput = (props) => {
  return (

    <>
    <div className={styles.input_container} style={props.styles}> 


        <div className={styles.input_field}>
            <input 
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={(e)=> props.onChange(e.target.value)} />

        </div>

        

    </div>

    {props.required && <div><small className={styles.input_err}>{props.err_msg ?? 'required'}</small></div>}
            </>
  )
}


