import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
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

const Home: NextPage = () => {



  return <div className="">
    <Head>
      <title>Crosscheck Sports</title>
    </Head>
    <div className="pt-[50px] md:pt-[50px] space-y-24 md:space-y-36">
      <div className="space-y-8">
        <Landing />
      </div>
      <Feature props={{
        title: "Control",
        anchor: "control",
        description: <>
          <div className="">
            <p>Attendance, subs, and events &mdash;creating and</p>
            <p>composing rosters and schedules has never been easier.</p>
          </div>
        </>,
        route: "/control",
        assetPath: '/images/team_control.png',
        assetAlt: 'Sports game create, roster management and user check in',
        assetBg: "bg-main"
      }} />
      <Feature props={{
        title: 'Communication',
        anchor: "communication",
        description: <>
          <div className="">
            <p>Communicate and collaborate with your team</p>
            <p>with group chat, stat tracking, and game time conversations.</p>
          </div>
        </>,
        route: "/communication",
        assetPath: '/images/social.png',
        assetAlt: 'Team chat, statistics, and comments with replies',
      }} />
      <Feature props={{
        title: 'Customization',
        anchor: "custom",
        description: <>
          <div className="">
            <p>Tailor-make the Crosscheck experience for your team.</p>
            <p>Colors, icons, and extra information at every level.</p>
          </div>
        </>,
        route: "/custom",
        assetPath: '/images/customization.png',
        assetAlt: 'Crosscheck customization, user fields, colors, icons',
        assetBg: "bg-main",
      }} />
      <div className="bg-gray-300 h-[0.5px] w-full"  ></div>
      <TemplateShowcase />
      <div className="bg-gray-300 h-[0.5px] w-full"  ></div>
      <CustomShowcase />
    </div>
  </div>
}

export default Home
