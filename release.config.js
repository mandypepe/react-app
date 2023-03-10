module.exports = {
    branches: ["master", "develop"],
    repositoryUrl: "https://github.com/mandypepe/react-app",
    plugins: [
            "@semantic-release/commit-analyzer",
            "@semantic-release/release-notes-generator",
            "@semantic-release/npm",
            "@semantic-release/github",                ]
};
//https://semantic-release.gitbook.io/semantic-release/usage/plugins