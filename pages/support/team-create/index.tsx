import InfoCell from "../../../components/infoCell"
import Subpage from "../../../components/subpage/subpage"

const TeamCreate = () => {
    const cell = (label: string, body: JSX.Element) => {
        return <>
            <InfoCell label={label} body={body} />
        </>
    }

    return <>
        <Subpage props={{
            title: "Creating a Team",
            tags: "create sports team,sports team software,sports team app,custom sports team app,custom team creation",
            content: <>
                <div className="space-y-4">
                    {cell("First Steps", <>
                        <p>Where you create a team depends on whether you are already on a team or not. If you are not, then the homescreen will have a button allowing you to either join a team or create a team. If you are already on a team, open the menu, navigate to settings, and click the create team button.</p>
                    </>)}
                    {cell("Start From a Template", <>
                        <p>Crosscheck Sports supports a template system to give you inspiration in building your own team. Select the sport you plan to create a team for. Don&apos;t worry, you will be able to modify any settings later.</p>
                    </>)}
                    {cell("Basic Information", <>
                        <div className="space-y-1">
                            <p>This is where you can input some basic information about your team. It should be noted that your team name cannot be changed later, so settle on a good one!</p>
                            <p>Click on the color circle to pick your team color, you can also input a hex code here. Make sure to test the color you pick on light and dark backgrounds, as the app will be presented in both.</p>
                            <p>The light background toggle controls whether your app will be presented in dark or light mode. If your logo and color look better on a dark background select this. Note: your team users can override this setting on a personal level in their settings.</p>
                            <p>The show player nicknames is to control whether a users chosen nickname will show in place of their regular name. This can be changed at any time but note that there are some places where the name will only update after the change has taken place. For example, names in chat will only change for messages sent after this setting was applied.</p>
                        </div>
                    </>)}
                    {cell("Positions", <>
                        <div className="space-y-1">
                            <p>Positions are an important part of some sports. This is where you can define a list that you can later select from when creating users. Make sure to set a default user that is suitable for your team.</p>
                            <p>The MVP &apos;Most Valuable Position&apos; is a tag you can place on a particular position to allow for extra monitoring for players of that position. This is represented as a count on each event to show you if a player with this particular position has checked in.</p>
                        </div>
                    </>)}
                    {cell("Custom Fields", <>
                        <div className="space-y-1">
                            <p>This is where Crosscheck Sports becomes interesting. Custom fields allow you to place extra fields on users that you may want to track or get information from.</p>
                            <p>On the team level this is a bit less interesting, but when placed on events you can grab custom information from the users when they go to check in.</p>
                            <p>Team fields are for placing extra information on the team that your players can look at. Custom user fields are extra pieces of information you can place on users. You can also sort users by these users by the fields you define later.</p>
                        </div>
                    </>)}
                    {cell("Custom Logo and Extras", <>
                        <p>Once you create your team, there is a few extra things you can do. One, you can edit all of the information at any time except for the title. Second, you can add your own custom logo to display inside the app. Crosscheck Sports supports either an image upload from your camera roll, or a url that points to an image. Images uploaded are stored in Amazon Web Services and are deleted once they are no longer used.</p>
                    </>)}
                </div>
            </>
        }} />
    </>
}

export default TeamCreate