import React from 'react'
import styles from './loader.module.scss'
import { ClipLoader } from 'react-spinners'


export const Loader = () => {
  return (
    <>
<div className={`${styles.container}`}>


<ClipLoader size={100} color="#000" speedMultiplier={1.2} loading="true"  />
</div>

    </>
  )
}
