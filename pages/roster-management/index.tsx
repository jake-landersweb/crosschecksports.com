import AdditionalFeatures2 from "../../components/addFeatures2";
import Feature from "../../components/feature";
import Subpage2 from "../../components/subpage2";

export default function RosterManagement() {
    return <Subpage2
        title="Roster Management"
        src="/svg/team.svg"
        alt="Sports Team Management"
        tags="sports team management,sports team roster control,team user management"
        desc="Crosscheck Sports was born out of the need for a solid user management system. This was the first core feature built, with the rest of the app built around it. You can expect intuitive roster management at every level.">
        <div className="space-y-8">
            <Feature props={{
                src: "/images/tiered-rosters.png",
                alt: "Tiered Rosters",
                title: "Tiered Rosters",
                desc: "Crosscheck takes a tiered approach to rosters. You have a base team roster which is all users that have ever played for your team. Then you have a season roster which is selected from the team roster. From there, each event can have its own roster from the available season roster.",
                reverse: false
            }} />
            <Feature props={{
                src: "/images/rg-lineups.png",
                alt: "Lineups and Roster Groups",
                title: "Lineups and Roster Groups",
                desc: "Roster groups let you group certain users together for easy creation of events and polls later on. Lineups let you define a custom lineup shape (or choose from a sport template) to show your playsers what the game's lineup will be.",
                reverse: true
            }} />
            <Feature props={{
                src: "/images/custom-fields.png",
                alt: "Custom Information",
                title: "Custom Information",
                desc: "The Crosscheck custom field engine allows for storing information on each user's record. Store due payments, a sport ID number, and more. Events also allow for the collection of information from your users. See if people are running late or bringing beer.",
                reverse: false
            }} />
            <AdditionalFeatures2 features={["Subsitutes", "Active/Inactive", "Jersey Sizes", "Seasonal Numbers", "Filtering", "Sorting", "Rosters From Old Seasons", "Nicknames"]} />
        </div>
    </Subpage2>
}