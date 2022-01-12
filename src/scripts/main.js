import { fetchLetters, fetchRecipients, fetchAuthors, fetchTopics } from "./dataAccess.js"
import { penPal } from "./penPal.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    (customEvent) => {
        render()
    }
)

//
const render = () => {
    fetchRecipients().then(
        () => {
            fetchAuthors().then(
                () => {
                    fetchLetters().then(
                        () => {
                            fetchTopics().then(
                                () => {
                                    mainContainer.innerHTML = penPal()
                                }
                            )
                        }
                    )
                }
            )
        }
    )

}
render()