import Subpage from "../../../components/subpage/subpage"

const GettingStarted = () => {

    const cell = (label: string, body: JSX.Element) => {
        return <>
            <div className="space-y-2">
                <h3 className="label">{label}</h3>
                <div className="body">{body}</div>
            </div>
        </>
    }

    return <>
        <Subpage props={{
            title: "Getting Started",
            content: <>
                <div className="space-y-4">
                    {cell("Downloading", <>
                        <p>First, download the Crosscheck Sports mobile app for Android or iOS from the links provided at the bottom of the page. Alternatively, you can visit the website as well.</p>
                    </>)}
                    {cell("Creating Your Account", <>
                        <p>From here, you can create your account using your primary email address. This will land you on the dashboard page. When you are on a team and season, this is where your schedule, chat, stats, and roster pages will live.  </p>
                    </>)}
                    {cell("Creating a Team", <>
                        <div className="space-y-1">
                            <p>You can optionally decide to use a sports template here. The templates will autofill some data for you to give examples and inspiration on how to use the Crosscheck Engine. But don’t worry, the templates do not add any irreversible options.</p>
                            <p>The team create wizard allows you to specify a team title, color, the background theme, whether to show player nicknames, positions, and custom fields.</p>
                            <p>The position creation tool allows you to create your own positions. Click on a cell to make it the default position, and select the bottom button to specify the Most Valuable Position(MVP). The MVP will mark users who are that position in different ways, showing whether a player with the MVP has checked into an event or not.</p>
                            <p>The custom field configurations are what allow you to add any fields that you think are missing from the application. “Custom Fields” are static fields to add additional information to your Team, Season, or Event. Examples include a rink address or a pre-game location. “Custom User Fields” allow you to add dynamic fields to your users. These come in three types. Strings(words), Ints(numbers), and booleans(True/False). You could track skill rank, whether a player is bringing equipment to an event, or more with these fields. You can also sort your roster later using these fields.</p>
                        </div>
                    </>)}
                    {cell("Creating a Season", <>
                        <div className="space-y-1">
                            <p>Click “Create Team” and your team will be created automatically with you being automatically added. From here, the dashboard will prompt you to create a season. Click the button, and go through the season create wizard. This is very similar to the team create wizard, except with the addition of stats. Stats are tracked from season to season, and summed together when shown on a team level. Create the stats you want to track this season and click “Create Season”.</p>
                            <p>Now, your dashboard page should be fully configured. Swipe the screen from the left edge to open the menu to access your season information, team information, and personal profile.</p>
                        </div>
                    </>)}
                    {cell("Menu Items", <>
                        <div className="space-y-1">
                            <p>Team information shows the relevant information on your team. This includes some basic information about your team, the roster, stats, seasons, positions, and custom fields. Note, your users cannot see the season list here.</p>
                            <p>Season information shows the relevant information for the season. This includes the same information as shown in the team, along with stats. You will also notice a polls link, this shows you all of the polls you have created for this season.</p>
                            <p>User information shows your personal user account information. Your email, names, phone number, notification settings, the teams you are apart of, a logout button, and the ability to send feedback to the developers. Click the edit button in the top right to edit this information. Email and phone notifications are highly recommended, but if you would like to turn them off you can do so here.</p>
                        </div>
                    </>)}
                    {cell("Creating an Event", <>
                        <p>Navigate back to the dashboard page and click the plus button in the top right. Here you can create either a poll or event. Click next and configure your event settings. Define the type (game/practice/other), the title or opponent, the date, and the description. The next few options are event configurations. You can choose to track attendance, show the attendance to your users, send auto check-in notification reminders, and whether you are the home team. Custom fields can also be configured on events. Note, when you define custom user fields here, any user who checks in will be able to answer these fields on the event. Next you can select the users you want to include/exclude and the location information and color. Click “Create Event”.</p>
                    </>)}
                    {cell("Creating a Poll", <>
                        <p>The same button to create an event can also be used to create polls. To create a poll, select the poll option and click “Continue”. Define the title, description, and date and time. Then, you can choose what you want your poll options here and whether you want to show the responses and results of the polls to your users. Lastly, select the users you want to complete this poll and click “Create Poll”. Note, polls will show up on the dashboard for a week after they have ended to allow users to view the results.</p>
                    </>)}
                    {cell("Adding Users", <>
                        <p>To add users, navigate to the user tab in the dashboard page, and click the plus button in the top right. You can choose to create a new user or select an existing one from your team list. Select “Create New”. Here you can define all of the user’s information. Once they are created, you need to invite them. Select their user cell, and click “Send Invite”. This will send an email to the user prompting them to download the app and input your unique team code to join the team. This will validate them onto the app and add them to the active roster list.</p>
                    </>)}
                </div>
            </>
        }} />
    </>
}

export default GettingStarted