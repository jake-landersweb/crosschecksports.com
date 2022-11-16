import AdditionalFeatures2 from "../../components/addFeatures2"
import Feature from "../../components/feature"
import Subpage2 from "../../components/subpage2"

const Social = () => {
    return <Subpage2
        title="Communication"
        src="/svg/chat.svg"
        alt="Sports Team Chat App"
        tags="sports team chat app,hockey team chat,sports messenger app,team group message,team group chat"
        desc="To build a successful team, communication is absiolutely required. Gone are the days of long email chains when using Crosscheck. With a fully integrated chat that is separate from season to season, with other sprikles of communication baked in elsewhere, your team will always be in the loop.">
        <div className="space-y-8">
            <Feature props={{
                src: "/images/chat.png",
                alt: "Full Featured Chat",
                title: "Full Featured Chat",
                desc: "A successful group chat not only makes a team manager's job easier, but also creates a community around your team. Players feel more engaged, and you are able to respond to your player's requests and concerns. Along with the usual group chat banter, of course.",
                reverse: false
            }} />
            <Feature props={{
                src: "/images/estatus-comment.png",
                alt: "Status Comments",
                title: "Status Comments",
                desc: "Want to let people know why you can't make it to a game? What about a message to pump up your teammates for the game? We thought it would be fun to include the option to leave a note when you checkin, so we added it. You can also comment on these check-in comments too!",
                reverse: true
            }} />
            <AdditionalFeatures2 features={["Email Reminders", "Phone Notifications", "Chat Images", "Chat Videos", "Emojis", "Full Team Blast", "Stats"]} />
        </div>
    </Subpage2>
}

export default Social