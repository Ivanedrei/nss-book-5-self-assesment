import { getAuthors, getletters, getRecipients, getTopics } from "./dataAccess.js"

const convertLettersToListElement = (request) => {
    const authors = getAuthors()
    const recipients = getRecipients()
    const letterTopics = getTopics()
    const sendAuthor = authors.find(
        (author) => {
            return author.id === request.authorId
        }
    )
    const sendRecipient = recipients.find(
        (recipient) => {
            return recipient.id === request.recipientId
        }
    )


    return `<li class="description">
    <p id="inside__letters"> Dear, ${sendRecipient.name}
     (${sendRecipient.email}) <br> 
    ${request.letters} <br> 
    sincerely, ${sendAuthor.name} (${sendAuthor.email}) </p> <br>
    <p id="inside__letters__date"> sent on ${request.dateSent} </p>
    <span id="letterTopic__view">${request.letterTopic}</span>
       
        </li>`
}

export const Letters = () => {
    const letters = getletters()

    let html = `
        <ul>
            ${letters.map(letter => convertLettersToListElement(letter))
        }
        </ul>
    `

    return html
}