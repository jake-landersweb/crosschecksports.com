import AdditionalFeatures2 from "../../components/addFeatures2";
import Feature from "../../components/feature";
import Subpage from "../../components/subpage/subpage";
import Subpage2 from "../../components/subpage2";

export default function ScheduleManagement() {
    return <Subpage2
        title="Schedule Management"
        src="/svg/calendar.svg"
        alt="Sports Schedule"
        tags="sports team schedule,calendar,events,sports team game schedule,team schedule management"
        desc="A schedule needs to be a frictionless exchange of information. We give you the right tools for the job. Create games, practices, or other events, along with custom information to deliver to your users.">
        <div className="space-y-8">
            <Feature props={{
                src: "/images/schedule-management.png",
                alt: "Schedule Management",
                title: "Event Type",
                desc: "You can set an event to either be a game, practice, or other. When set as a game, extra functionality will be implemented into the game like keeping track of score, stats, lineups, and more.",
                reverse: false
            }} />
            <Feature props={{
                src: "/images/event-custom.png",
                alt: "Sport Game Customization",
                title: "Event Customization",
                desc: "The powerful custom field engine in Crosscheck allows you to add additional information to events and collect custom responses from your players on check-in.",
                reverse: true
            }} />
            <Feature props={{
                src: "/images/event-users.png",
                alt: "Sport Game Users",
                title: "User Control",
                desc: "The strength of Crosscheck is user management. Events are no exception. Tailor each game with a custom roster that can change at any time, optional subsitutes, roster groups, and custom-made lineups.",
                reverse: false
            }} />
            <AdditionalFeatures2 features={["Descriptions", "Addresses", "Custom Colors", "Check-in Reminders", "Home vs Away", "MVPs", "Goalie Tracking", "Templates", "Hints", "Hidden Attendance"]} />
        </div>
    </Subpage2>
}