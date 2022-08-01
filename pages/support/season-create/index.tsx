import InfoCell from "../../../components/infoCell"
import Subpage from "../../../components/subpage/subpage"

const SeasonCreate = () => {
    return <>
        <Subpage props={{
            title: "Creating a Season",
            tags: "create sports team,sports team software,sports team app,custom sports team app,custom team creation,create sports season,season management,season creation software",
            content: <>
                <div className="space-y-4">
                    <InfoCell label={"First Steps"} body={<>
                        <p>Seasons are the modular pieces of teams that allow you to contain a wide array of sports under a team. For example, a hockey team could have 2 hockey seasons currently active along with a golf season that contains players from both hockey seasons. The seasons all have separate users, but all users are part of the team.</p>
                    </>} />
                    <InfoCell label={"Start From a Template"} body={<>
                        <p>Just like teams, seasons let you start from a template based on what kind of sport season you want to create. But unlike teams, you can also use a previous season you have created as a starting point.</p>
                    </>} />
                    <InfoCell label={"Basic Info"} body={<>
                        <p>Go ahead and give your season a title. No sweat though, unlike your team you are free to change this at any point throughout the season&apos;s life. There is some other information here like a season url or note you can optionally fill out</p>
                    </>} />
                    <InfoCell label={"Positions"} body={<>
                        <p>Just like teams, you can create your custom positions to track during your season. Select a position to set it as default.</p>
                        <p>The MVP &apos;Most Valuable Position&apos; is a tag you can place on a particular position to allow for extra monitoring for players of that position. This is represented as a count on each event to show you if a player with this particular position has checked in.</p>
                    </>} />
                    <InfoCell label={"Custom Fields"} body={<>
                        <p>This is where Crosscheck Sports becomes interesting. Custom fields allow you to place extra fields on users that you may want to track or get information from.</p>
                        <p>Season fields are for placing extra information on the season that your players can look at. Custom user fields are extra peices of information you can place on users. You can also sort users by these users by the fields you define later.</p>
                    </>} />
                    <InfoCell label={"Stats"} body={<>
                        <p>Seasons have some extra functionality in the form of stats. Stats are completely customizable, and let you track the information you feel is most important for your season.</p>
                        <p>You are able to sort your users based on these stats, and input them at a per-game basis or directly on the season.</p>
                    </>} />
                    <InfoCell label={"Season Status"} body={<>
                        <p>Seasons have a concept of a status on them. By default, a new season will have a future status, and no regular users of your app will be able to view it. This gives you time to compose the roster and schedule before adding players.</p>
                        <p>Once you feel your season is ready, edit the season and change the slider to &quot;active&quot;. Once a season is over, feel free to move it to &quot;inactive&quot; and the season will be ranked less important during sorting.</p>
                    </>} />
                    <InfoCell label={"Adding Users"} body={<>
                        <p>Users are not added to a season right off the bat. On the home screen, navigate to the users tab and you can add from there.</p>
                        <p>Crosscheck supports three ways to add users to a season:</p>
                        <ul className="pl-4">
                            <li>1: Creating a new user</li>
                            <li>2: Adding users from the team</li>
                            <li>3: Adding users from a previous season (Work in progress)</li>
                        </ul>
                        <p>For users that are not a part of a team, you will need to send them an invitation email in order for them to join the team. Click on their user cell, and click the button that says invite. If they have received the email but still not responded, you can hit the button again to re-send the email.</p>
                        <p>Even though users are not validated onto your team, they will still show up in roster lists on events and polls, and can check into games via email notifications.</p>
                        <p>Lastly, you can add users as subs. These users will not be auto-added to events on create, and have to be explicitly added onto each event. Be careful, sub users cannot be converted to regular users and vice versa at this time. (If this is a requested feature, make sure to fill out the feedback form in the app as this is certainly a possible feature to add).</p>
                    </>} />
                </div>
            </>
        }} />
    </>
}

export default SeasonCreate