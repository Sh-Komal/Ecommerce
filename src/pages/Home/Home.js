import React from 'react'
import { Header } from '../../components/Header/Header'

export const Home = () => {
    window.addEventListener("scroll",function(){
        const Header = this.document.querySelector('.Header')
        Header.classList.toggle('active', this.window.scrollY>100)
    })
    window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'})
  return (
    <Header className= "header">
    <div className='container flex'>
    <div className="logo">
        <img src= '/' alt="Medicine" />
    </div>

    </div>

    </Header>
  )
}
