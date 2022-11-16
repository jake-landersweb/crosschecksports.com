import Head from "next/head";
import React from "react";
import BoundsWrapper from "./boundsWrapper";
import Image from "./image";

export default function Subpage2({ title, src, alt, tags, desc, children }: { title: string, src: string, alt: string, tags: string, desc: string, children: React.ReactNode }) {
    return <div className="">
        <Head>
            <title>{title} - Crosscheck</title>
            <meta name="keywords" content={tags} id="keywords" />
        </Head>
        <div className="">
            <BoundsWrapper>
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 items-center pt-16">
                    <div className="text-center md:text-left space-y-2">
                        <h2 className="title-sm">{title}</h2>
                        <p className="subtext-lg max-w-2xl">{desc}</p>
                    </div>
                    <Image props={{
                        src: src,
                        alt: alt,
                        divClass: "max-w-[500px]",
                        imgClass: ""
                    }} />
                </div>
            </BoundsWrapper>
            <div className="">
                <img src="/svg/wave1.svg" className="w-screen" />
                <div className="bg-[#f2f2f2] py-16">
                    <BoundsWrapper>
                        {children}
                    </BoundsWrapper>
                </div>
            </div>
        </div>
    </div>
}