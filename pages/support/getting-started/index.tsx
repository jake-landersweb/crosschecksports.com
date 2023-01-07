import Head from "next/head"
import InfoCell from "../../../components/infoCell"
import MarkdownRenderer from "../../../components/markdownRenderer/markdownRenderer"
import Subpage from "../../../components/subpage/subpage"

const GettingStarted = () => {

    return <>
        <Subpage props={{
            title: "Getting Started",
            tags: "team,schedule,support,help",
            content: <>
                <div className="space-y-4">
                    <InfoCell label={"Creating an Account"} body={<>
                        <p>Whether you received an email to join a team or not, you will need to create an account to begin using Crosscheck Sports</p>
                        <p>We use the latest encryption technology to keep your data safe and never take any more information than we have to in order to run the application.</p>
                        <p>If you happened to forget your password, you can recreate it on the login page by selecting &quot;Forgot password&quot;.</p>
                    </>} />
                    <InfoCell label={"Navigating the App"} body={<>
                        <p>When you first log in, the first page you see is the main dashboard schedule page.</p>
                        <p>There are two forms of navigation:</p>
                        <ul className="pl-8 list-disc">
                            <li>The left side slide-out menu.</li>
                            <li>The bottom tab navigation on the dashboard page.</li>
                        </ul>
                        <p>The left slide-out menu is where you access information about the team, season, access your account settings, and leave feedback.</p>
                        <p>The bottom tab navigation is only present on the dashboard page, and the bottom tabs correspond to schedule, chat, stats, and roster.</p>
                    </>} />
                    <InfoCell label={"Joining a Team"} body={<>
                        <p>If you are not a part of a team, the first page you see after logging in is to either create a team or join one. Input the code you receieved from your email and click &apos;Join&apos;</p>
                        <p>If you are already on a team, you can use the left nav to get to the settings page. There, you can click the join team button and follow the steps above.</p>
                    </>} />
                    <InfoCell label={"Switching Between Teams"} body={<>
                        <p>Using the left side navigation, you can select &quot;Your Profile&quot; and select the team you want to view out of your team list. This team will be saved for future sessions to show as the default when you open the app.</p>
                    </>} />
                    <InfoCell label={"Switching Between Seasons"} body={<>
                        <p>On the schedule page, click the season name in the top left of the page to be greeted with a season selection pop-up.</p>
                        <p>This will show the team&apos;s currently active seasons. Click &quot;See All&quot; To see any previous seasons you may have been a part of. Select a cell to set the current season.</p>
                    </>} />
                    <InfoCell label={"Editing Your Information"} body={<>
                        <p>In &quot;Your Profile&quot;, there is an edit button in the top right for you to edit your name, phone number, nickname, and notification preferences.</p>
                    </>} />
                    <InfoCell label={"Checking Into an Event"} body={<>
                        <p>If there are any upcoming events, these will automatically show up on the main dashboard page. You can hit the button in the top of the cell to check in, or select the event and find your name in the user list.</p>
                        <p>The checkin panel has a few different options. One is to select your anticipated status. You can also fill out a note that will be visible under your user cell on the event, and other users can view and comment on it.</p>
                        <p>If there is any custom information your team admin wants to collect from you on the event, you can also fill that out on this panel.</p>
                        <p>Lastly, you may receive check-in reminder emails. These will contain the list of statuses from you to select from. Clicking these buttons will automatically set your status, and open the app to the event detail page. Make sure you also fill out any extra information your team admin has requested from you and to add an optional note.</p>
                    </>} />
                </div>
            </>
        }} />
    </>
}

export default GettingStarted