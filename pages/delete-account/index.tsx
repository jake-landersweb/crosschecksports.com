import BoundsWrapper from "../../components/boundsWrapper";
import MarkdownRenderer from "../../components/markdownRenderer/markdownRenderer";

const DELETE_MD = `
Sorry to see you Go! This page will serve as an outline for how you can delete your account and personal information.

Please see the [privacy policy](https://crosschecksports.com/privacy-policy) to see which information you are able to request for deletion, and more importlantly, what information we will not delete.

## Overview

Here is a brief overview of what data we will and will not delete

- **Personal Information**: We will delete ALL personalized identifying information such as name, emails, phone information, addresses, and phone numbers along with any other information contained within your user account.
- **Team and Season History**: We maintain records of team histories and past seasons to preserve the integrity of our app’s features and functionalities.
- **App Usage Statuses**: We keep records of app usage data to help improve our services, ensure optimal performance, and detect any technical issues or discrepancies.
- **Chat Messages**: Most chat messages cannot be deleted because they are part of the team's communication history. However, these messages will be anonymized to protect your privacy.

## Initiating a Delete

There are two ways you can initiate a delete. The first, is visiting your account profile within the mobile app and requesting your account be deleted. You will be sent 2 confirmation emails. One, that we have recieved your request. Two, that your account has been successfully deleted.

The second, is by sending an email to jake@crosschecksports.com from the email of the account you want deleted. In this email, we would like to hear why you want your account deleted, but this is not required. You will recieve a reply message when your account has been deleted.

> There may be up to 30 days between initiating an account deletion and the account being deleted. If you login to our services again before the 30 days, your deletion request will be ignored.

## Request More

If you have any questions about our policies please do not hesitate to reach out to jake@crosschecksports.com.
`

export default function DeleteAccount() {
    return <BoundsWrapper>
        <div className="space-y-2 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold">Deleting Your Account</h2>
            <MarkdownRenderer content={DELETE_MD} />
        </div>
    </BoundsWrapper>
}