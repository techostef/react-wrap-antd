const StringHelper = require('./StringHelper');

const getInfo = (pageName) => {
    const camelName = StringHelper.namePageToCamel(pageName);
    const pascalName = StringHelper.namePageToPascal(pageName);
    const enumName = StringHelper.namePageToEnum(pageName);
    const className = StringHelper.namePageToClassName(`${pageName}Container`);
    return {
        camelName,
        pascalName,
        enumName,
        className,
    };
};

const componentAnswerQuetions = (answers) => {
    const { componentName, category } = answers;
    const {
        camelName,
        pascalName,
        enumName,
    } = getInfo(componentName);

    const absPath = `src`;

    return {
        absPath,
        category,
        componentName,
        camelName,
        enumName,
        pascalName,
    };
};

module.exports = {
    componentAnswerQuetions
}