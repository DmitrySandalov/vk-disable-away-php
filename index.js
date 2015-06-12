var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "*.vk.com",
    contentScriptFile: "./remaway.js"
});

