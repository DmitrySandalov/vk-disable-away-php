// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");

pageMod.PageMod({
    include: "*.vk.com",
    contentScriptFile: self.data.url("modify-links.js")
});