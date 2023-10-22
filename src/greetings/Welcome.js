const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "WELCOME";
        this.textMessage = "{server}";
        this.colorTitle = "#03A9F4";
        this.assent = "https://telegra.ph/file/6a2b6dc400cf1a15423dd.png";
    }
};
