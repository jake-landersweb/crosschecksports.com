import { useState } from "react"
import Image from "../image"
import BaseShowcase from "../showcase/baseShowcase"
import Field from "./field"
import { useRouter } from 'next/router'

const FormOnboard = () => {
    const router = useRouter()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    const emailIsValid = () => {
        if (email == "") {
            return false
        } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/.test(email)) {
            return true
        } else {
            return false
        }
    }

    const emailErrorText = () => {
        if (email == "") {
            return "Cannot be empty"
        } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/.test(email)) {
            return ""
        } else {
            return "Please enter a valid email"
        }
    }

    const formValid = () => {
        if (name == "") {
            return false
        } else if (!emailIsValid()) {
            return false
        } else {
            return true
        }
    }

    async function sendEmail() {
        try {
            setIsLoading(true)
            const names = name.split(" ")
            var f = ""
            var l = ""
            if (names.length > 1) {
                f = names[0]
                l = names[1]
            } else {
                f = names[0]
            }
            window.open(`https://teams.crosschecksports.com/Account/Register?e=${email}&f=${f}&l=${l}`)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }
    return <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 items-center">
        <div className="space-y-8">
            <div className="sapce-y-2 text-center md:text-left">
                <h3 className="title-sm text-white">Ready To Create Your Account?</h3>
                <p className="subtext max-w-xl text-gray-400">Fill in your information to create your free team today! The base features of Crosscheck stay free, forever.</p>
            </div>
            <div className="">
                <div className="space-y-4 w-full">
                    <Field props={{
                        value: name,
                        label: "Name",
                        placeholder: "Wayne",
                        errorText: "Cannot be empty",
                        inputType: "text",
                        onChanged: (val) => setName(val),
                        isValid: true,
                    }} />
                    <Field props={{
                        value: email,
                        label: "Email",
                        placeholder: "gretzky@email.com",
                        errorText: emailErrorText(),
                        inputType: "text",
                        onChanged: (val) => setEmail(val),
                        isValid: true,
                    }} />
                    <div className="grid place-items-center">
                        <button onClick={() => sendEmail()} className={`btn-main h-[50px] w-[150px] p-0`}>
                            <p className={`${isLoading ? "hidden" : ""}`}>
                                Create Account
                            </p>
                            <p className={`${isLoading ? "" : "hidden"} grid place-items-center`}>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </p>
                        </button>
                        <p className={`${showError ? "h-[20px] opacity-100" : "h-0 opacity-0"} transition-all text-red-300`}>There was an issue</p>
                        <p className={`${showSuccess ? "h-[20px] opacity-100" : "h-0 opacity-0"} transition-all text-txt-700`}>Successfully sent message</p>
                    </div>
                </div>

            </div>
        </div>
        <Image props={{
            src: "/svg/account.svg",
            alt: "Create Account",
            divClass: "hidden md:block",
            imgClass: "max-w-[500px]"
        }} />
    </div>
}

export default FormOnboard