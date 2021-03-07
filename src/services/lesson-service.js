const MODULE_URL = "https://wbdv-generic-server.herokuapp.com/api/001704833/modules";
const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/001704833/lessons";

export const createLessonsForModule = (moduleId, lesson) =>
    fetch(`${MODULE_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULE_URL}/${moduleId}/lessons`)
        .then(response => response.json())

export default {
    createLessonsForModule,
    findLessonsForModule
}