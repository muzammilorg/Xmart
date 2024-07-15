import React from 'react'
import searchIcon from '../../assets/icons/search-icon.svg'
import styles from './search-bar.module.scss'

export const Searchbar = () => {
  return (
    <div className={`${styles.global_search_container} d-flex `}>

                            <input className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
                            <img src={searchIcon} alt="Search Icon" />

                        </div>
  )
}
