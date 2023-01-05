import type { NextPage } from 'next'
import Head from 'next/head'
import Feature from '../components/feature'
import Image from '../components/image'
import styles from '../styles/Home.module.css'
import { BsGear } from 'react-icons/bs'
import TemplateShowcase from '../components/showcase/templateShowcase'
import AppButtons from '../components/mobileButtons/appButtons'
import Form from '../components/form/form'
import CustomShowcase from '../components/showcase/customShowcase'
import Landing from '../components/landing'
import { useState } from 'react'
import TypeWriter from '../components/typewriter/typewriter'
import Features from '../components/features'
import BoundsWrapper from '../components/boundsWrapper'
import Difference from '../components/difference'
import Sports from '../components/sports'
import AdditionalFeatures from '../components/addFeatures'
import FormOnboard from '../components/form/formOnboard'
import Link from '../components/link'

const Home: NextPage = () => {

  const desc = "Crosscheck Sports gives you unmatched features and customization to easily manage your sports team. From adult league to AAA, we got you covered."

  return <div className="space-y-16 md:space-y-32 pb-24 md:pb-36">
    <BoundsWrapper>
      <div className="space-y-16 md:space-y-32">
        <div className="md:flex items-center space-y-4 md:space-y-0 md:space-x-4 min-h-[70vh]">
          <div className="md:space-y-2">
            <h2 className='title text-center md:text-left'>The <span className='text-main'>Best</span> Way To Organize Your <br className='lg:hidden' /><TypeWriter props={{
              values: ['Sports Team', "Hockey Team", "Golf Club", "Basketball Team", "Football Team", "Soccer Club", "Football Team"],
              className: "text-main",
              cursorClass: "text-txt",
              infinite: true,
            }} /></h2>
            <div className="hidden md:block">
              <p className='subtext-lg'>{desc}</p>
              <div className="pt-4">
                <Link props={{
                  href: 'https://teams.crosschecksports.com/Account/Register',
                  child: <>Get Started</>,
                  isExternal: true,
                  className: "btn-main"
                }} />
              </div>
            </div>
          </div>
          <Image props={{
            src: '/svg/game-day.svg',
            alt: 'Game Day',
            divClass: "",
            imgClass: ""
          }} />
          <div className="md:hidden">
            <p className='subtext-lg text-center'>{desc}</p>
            <div className="pt-4 grid place-items-center">
              <Link props={{
                href: 'https://teams.crosschecksports.com/Account/Register',
                child: <>Get Started</>,
                isExternal: true,
                className: "btn-main"
              }} />
            </div>
          </div>
        </div>
        <Difference />
      </div>
    </BoundsWrapper>
    <Features />
    <BoundsWrapper>
      <div className="space-y-16 md:space-y-32">
        <Sports />
        <AdditionalFeatures />
      </div>
    </BoundsWrapper>
  </div>
}

export default Home
