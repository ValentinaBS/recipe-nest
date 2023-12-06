module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["<rootDir>/src"],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },

    testEnvironment: "jest-environment-jsdom",

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.ts'
    ],

    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    },
    
    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};