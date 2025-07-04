import React from 'react'
import styles from './primary-button.module.scss'

export  const PrimaryButton = (props) => {
    return (

        <>
            <button
                className={styles.button_container}
                onClick={props.onClick}
                disabled={props.disabled}>

                {props.loading ?   <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>  : props.children}
            </button>

        </>

    )
}


