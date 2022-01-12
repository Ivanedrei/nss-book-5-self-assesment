const applicationState = {
    authors: [],
    recipients: [],
    letterTopics: [],
    letters: []
}

const API = "http://localhost:8088"

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (sendingAuthor) => {
                // Store the external state in application state
                applicationState.authors = sendingAuthor
            }
        )
}
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (recipientNames) => {
                applicationState.recipients = recipientNames
            }
        )
}
export const fetchTopics = () => {
    return fetch(`${API}/letterTopics`)
        .then(response => response.json())
        .then(
            (topics) => {
                applicationState.letterTopics = topics
            }
        )
}

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (letter) => {
                applicationState.letters = letter
            }
        )
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author }))
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({ ...recipient }))
}
export const getTopics = () => {
    return applicationState.letterTopics.map(topic => ({ ...topic }))
}
export const getletters = () => {
    return applicationState.letters.map(letter => ({ ...letter }))
}


export const sendLetters = (userServiceRequest) => {
    //userServiceRequest = dataToSendToApi from serviceform.js
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    const mainContainer = document.querySelector("#container")

    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })


}