import { LetterForm } from "./letterForm.js"
import { Letters } from "./Letter.js"

export const penPal = () => {
    return `
    <h1>Pen Pal Society</h1>
        <section class="Form">
        ${LetterForm()}
        </section>

        <section class="letters">
        ${Letters()}
        </section>`

}