const WIDGET_URL = "http://localhost:8080/api/widgets";
const TOPIC_URL = "http://localhost:8080/api/topics";

const createWidget = (tid, widget) => null

const findWidgetsForTopic = (tid) => null

const findAllWidgets = () => null // TODO: optional

const findWidgetById = (wid) => null // TODO: optional

const updateWidget = (wid, widget) => null

const deleteWidget = (wid) => null

const api = {
    createWidget,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget
}

export default api