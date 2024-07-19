import React from 'react'
import { TopBar } from '../../components/header/topbar'
import { Navbar } from '../../components/header/navbar'
import { Footer } from '../../components/footer/footer'

export const PageLayout = ({children}) => {
  return (
    <>
    <TopBar></TopBar>
    <Navbar></Navbar>
    {children}
    <Footer></Footer>
    
    </>
  )
}
