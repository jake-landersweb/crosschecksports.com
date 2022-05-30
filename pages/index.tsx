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

const Home: NextPage = () => {
  return <div className="">
    <Head>
      <title>Crosscheck Sports</title>
    </Head>
    <div className="pt-[50px] md:pt-[100px] space-y-24 md:space-y-36">
      <div className="space-y-8">
        <div className="grid place-items-center space-y-4 md:space-y-0 md:flex md:justify-between md:flex-row-reverse items-center">
          <Image props={{
            src: '/images/crosscheck_showcase.png',
            alt: 'crosscheck sports mobile app showcase',
            divClass: "max-w-[600px]"
          }} />
          <div className="space-y-6">
            <div className='text-4xl md:text-6xl font-bold md:pr-10'>
              <h2 className="whitespace-nowrap">Dynamic Team</h2>
              <h2 className="">Composition.</h2>
            </div>
            <div className="body">
              <h2>We take the hassle out of team management.</h2>
              <h2>Customize Crosscheck to your team.</h2>
            </div>
            <div className="grid place-items-center md:block">
              <Link href="/join-crosscheck">
                <a className='btn-main'>
                  Join Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Feature props={{
        title: 'Team Control',
        anchor: "team-control",
        description: <>
          <div className="">
            <p>Attendance, subs, and events &mdash;creating and</p>
            <p>composing rosters and schedules has never been easier.</p>
          </div>
        </>,
        route: "/team-control",
        assetPath: '/images/team_control.png',
        assetAlt: 'Sports game create, roster management and user check in',
        assetBg: "bg-main"
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
        assetAlt: 'Crosscheck customization, user fields, colors, icons'
      }} />
      <Feature props={{
        title: 'Social',
        anchor: "social",
        description: <>
          <div className="">
            <p>Communicate and collaborate with your team</p>
            <p>with group chat, stat tracking, and game time conversations.</p>
          </div>
        </>,
        route: "/social",
        assetPath: '/images/social.png',
        assetAlt: 'Team chat, statistics, and comments with replies',
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
