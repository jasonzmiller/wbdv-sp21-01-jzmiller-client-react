const COURSE_URL = "https://wbdv-generic-server.herokuapp.com/api/001704833/courses";

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSE_URL}/${courseId}/modules`)
        .then(response => response.json())