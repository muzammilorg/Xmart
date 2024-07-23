import React from 'react'
import sqIcon from '../../assets/Rectangle.png'
import styles from './section_heading.module.scss'

export const SectionHeading = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <img src={sqIcon} alt="" />
            <p>{props.children}</p>
        </div>

        <h2 className={styles.title}>
            {props.title}
        </h2>
    </div>
  )
}
