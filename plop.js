const path = require('path')
const inquirer = require('inquirer')

const componentTemplatePath = 'temaplates/component'
const componentPaths = new Map([
    ['atoms', 'src/components/{{kebabCase component_type}}']
])

export default function (
    /**@type {import('plop').NodePlopAPI} */
    plop) {
    // create your generators here
    plop.setGenerator('basics', {
        description: 'this is a skeleton plopfile',
        prompts: [], // array of inquirer prompts
        actions: [
            {
                type: "add",
                path: "src/model/{{name}}.model.ts",
                templateFile: "templates/component/component.hbs"
            }
        ]  // array of actions
    });
    plop.setHelper("titleCase", (str) => {
        return str.replace()
    })
};
