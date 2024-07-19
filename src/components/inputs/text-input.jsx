import React from 'react'
import styles from './text-input.module.scss'

export const  TextInput = (props) => {
  return (
    <div> 


        <div className={styles.input_field}>
            <input 
            type={props.type}
            value={props.value}
            onChange={(e)=> props.onChange(e.target.value)} />

        </div>

    </div>
  )
}
