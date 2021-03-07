const COURSE_URL = "https://wbdv-generic-server.herokuapp.com/api/001704833/courses";
const MODULE_URL = "https://wbdv-generic-server.herokuapp.com/api/001704833/modules";

export const createModuleForCourse = (courseId, module) =>
    fetch(`${COURSE_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${MODULE_URL}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSE_URL}/${courseId}/modules`)
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${MODULE_URL}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    findModulesForCourse,
    updateModule,
    createModuleForCourse,
    deleteModule
}

export default api;