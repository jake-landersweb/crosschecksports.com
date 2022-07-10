import Head from "next/head"
import Feature2 from "../../components/feature2"
import Form from "../../components/form/form"
import Subpage from "../../components/subpage/subpage"

const Custom = () => {
    return <>
        <Subpage props={{
            title: "Customization",
            tags: "team,custom,customization",
            content: <>
                <div className="space-y-16 md:space-y-32">
                    <Feature2 props={{
                        title: "Custom Field Engine",
                        description: <>
                            <p>The strength of Crosscheck comes from the custom field system. At every level (team, season, game, user), you can add custom fields to add additional information.</p>
                            <p>Custom user fields let you add dynamic fields for each user you have. And when these are added on events, you can obtain responses to custom questions at check in time.</p>
                        </>,
                        assetPath: "/images/customf_showcase.png",
                        assetAlt: "roster customization",
                        assetBg: "bg-main"
                    }} />
                    <Feature2 props={{
                        title: "Cosmetic",
                        description: <>
                            <p>Crosscheck also supports extensive cosmetic customization. First, you have control over the accent color that shows on every button, menu item, etc.</p>
                            <p>Next, you can upload your team logo to display in the side menu to match your custom color.</p>
                            <p>Lastly, you have control over the background color scheme (light or dark mode). But note, your users can override this option in their personal user settings.</p>
                        </>,
                        assetPath: "/images/cosmetic.png",
                        assetAlt: "logo, color, background customization",
                        assetBg: "bg-purple-200"
                    }} />
                    <Form props={{
                        nameLabel: undefined,
                        emailLabel: undefined,
                        bodyLabel: undefined
                    }} />
                </div>
            </>
        }} />
    </>
}

export default Custom