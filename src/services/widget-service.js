const WIDGET_URL = "https://blooming-dawn-02366.herokuapp.com/api/widgets";
const TOPIC_URL = "https://wbdv-generic-server.herokuapp.com/api/001704833/topics";

export const createWidget = (tid, widget) =>
    fetch(`${TOPIC_URL}/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${TOPIC_URL}/${tid}/widgets`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createWidget,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
}

export default api