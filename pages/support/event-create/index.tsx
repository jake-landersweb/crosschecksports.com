import InfoCell from "../../../components/infoCell"
import Subpage from "../../../components/subpage/subpage"

const EventCreate = () => {
    return <>
        <Subpage props={{
            title: "Creating an Event",
            tags: "sports team software,sports team app,custom sports team app,team schedule mangement,event creation sports,sport team event creation,sports user checkin",
            content: <>
                <div className="space-y-4">
                    <InfoCell label={"First Steps"} body={<>
                        <p>Events are the core component of a season&apos;s schedule. Events cover games, practices, meetups, and everything in between. These allow you to track attendance for your users. To create an event, on the dashboard click the plus button in the top right and choose event.</p>
                    </>} />
                    <InfoCell label={"Basic Info"} body={<>
                        <p>The first thing to do on an event is choose between a game, practice, or other.</p>
                        <p>Games have some extra functionality associated with them, such as defining an opponent, tracking the score, and inputing user stats.</p>
                        <p>&quot;Practices&quot; and &quot;other&quot; are the same functionality wise currently, but this is not guaranteed to be the case in the future.</p>
                        <p>The event date is when the event takes place, and will only show up in the &quot;upcoming&quot; section before that date.</p>
                        <p>You can choose whether you want to send automatic check in reminders or not, which means for the days leading up to an event reminder emails and phone notifications will be automatically sent to users not checked in around 3am PST. Users not checked in are defined as either not responding or marking themselves as &quot;unsure&quot;.</p>
                        <p>You also have control over whether you want to track attendance and want that attendance visible to the rest of the team.</p>
                        <p>Lastly, games will have an extra option for noting whether you are the home team or not. This can be updated as you see fit.</p>
                    </>} />
                    <InfoCell label={"Custom Fields"} body={<>
                        <p>Custom fields on events are really powerful. First, you can give some extra information to the user at the event level such as a dress code or jersey color.</p>
                        <p>Next, you can create various fields you want the user to fill out at checkin time. For example, for golf this can be asking if they want a cart, or hockey if they are bringing pucks.</p>
                    </>} />
                    <InfoCell label={"User Selection"} body={<>
                        <p>Next, you can choose what users you want on this event. By default, all active users will be selected. If you want to add any subs, this is the place to do it.</p>
                        <p>Note: The roster can be updated at any time as you see fit.</p>
                    </>} />
                    <InfoCell label={"Extra"} body={<>
                        <p>The last page is adding some extra information to your event such as a location and address.</p>
                        <p>You can also give it a color to make it stand out from other events, and this color will carry through to the event cell and the detail page. Try them out, they are pretty fun!</p>
                    </>} />
                    <InfoCell label={"Administration"} body={<>
                        <p>Once your event is created, there are some extra actions you as an admin can take in order to improve the experience for your users.</p>
                        <p>In no particular order, you can:</p>
                        <ul className="pl-8 list-disc">
                            <li>Send a reminder to any user status to check in.</li>
                            <li>Input any game stats that a user may have attained.</li>
                            <li>Update the score on a game to reflect either a win or loss.</li>
                            <li>Change the status of any user before or after the event has passed for any reason.</li>
                        </ul>
                    </>} />
                </div>
            </>
        }} />
    </>
}

export default EventCreate