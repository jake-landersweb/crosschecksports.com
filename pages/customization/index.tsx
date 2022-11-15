import Feature from "../../components/feature";
import Subpage2 from "../../components/subpage2";

export default function Customization() {
    return <Subpage2
        title="Customization"
        src="/svg/customization.svg"
        alt="Customizable Sports Management"
        tags="sports app customization,sport logo customization,color customization"
        desc="Customization is one of the pillars Crosscheck exists on. There is no way for us to think of every use case, and we do not have to! Custom fields, colors, logos, and more let you tailor make the app experience for your team.">
        <div className="space-y-8">
            <Feature props={{
                src: "/images/custom-colors.png",
                alt: "Custom Colors and Logo",
                title: "Custom Colors and Logo",
                desc: "Upload a custom logo to appear on the front schedule page, and set a theme color that changes all of the buttons throughout the app. You can also control light or dark mode in the app in settings.",
                reverse: false
            }} />
            <Feature props={{
                src: "/images/event-custom.png",
                alt: "Custom Fields",
                title: "Custom Fields",
                desc: "Custom fields give you the ability to add extra information on teams, seasons, events, and users at every level. They come in 3 types: words, numbers, and true/false. Get creative with them to enhance the experience for your team!",
                reverse: true
            }} />
            <Feature props={{
                src: "/images/pn-multiplatform.png",
                alt: "Puck Norris Hockey Club",
                title: "A Personalized Experience",
                desc: "Want something more from your team experience? Crosscheck can custom make you a team website and mobile app to make sure everyone knows your beer league team's schedule!",
                reverse: false
            }} />
        </div>
    </Subpage2>
}