import { sendLetters, getAuthors, getTopics, getRecipients } from "./dataAccess.js"
// import { authorNames } from "./Letter.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("#select__author").value
        const userLetter = document.querySelector(".input__letter").value
        const userTopics = document.querySelector("input[name='topic']:checked").value
        const userRecipient = document.querySelector(".select__recipient").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: parseInt(userAuthor),
            letters: userLetter,
            letterTopic: userTopics,
            recipientId: parseInt(userRecipient),
            dateSent: new Date().toLocaleDateString()

        }

        // Send the data to the API for permanent storage
        sendLetters(dataToSendToAPI)
    }
})



export const LetterForm = () => {
    const authors = getAuthors()
    const recipients = getRecipients()

    let html = `
    <div id="flex">
        <div class="field" id="author">
            <label class="label" for="authorName">Author</label> <br>
            <select id="select__author">
                <option class="selection" id="chooseBox" value="none"> Choose author </option>
                ${authors.map(
        author => {
            return `<option value="${author.id}">${author.name}</option>`
        }
    ).join("")}

            </select>
        </div>
                
        <div class="field" id="letter">
            <label class="label" for="letter">Letter</label> <br>
            <textarea class="input__letter select__letter"> </textarea>
        </div>
                
        <section class="field" id="topics">
            <div class="label">
                <label>Topics</label> <br>
                <ul class="selection select__topics">
                    <li><input type="radio" name="topic" value="Business"/>Business</li>
                    <li><input type="radio" name="topic" value="Friendly"/>Friendly</li>
                    <li><input type="radio" name="topic" value="Family"/>Family</li>
                    <li><input type="radio" name="topic" value="Congratulations"/>Congratulations</li>
                    <li><input type="radio" name="topic" value="Condolences"/>Condolences</li>
                </ul>
            </div >

                
            <div class="field" id="recipient">
                <label class="label" for="recipient">Recipient</label> <br>
                <select class="select__recipient">
                <option class="selection" id="chooseBox" value="none"> Choose recipient </option>
                ${recipients.map(
        recipient => {
            return `<option value="${recipient.id}">${recipient.name}</option>`
        }
    ).join("")}
                    </select>
                    </div>
                    
                    <div>
                    <button class="button" id="sendLetter" >Send Letter</button>
                    </div>
                    
                    </div > `

    return html
}
