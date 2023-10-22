const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "WELCOME";
        this.textMessage = "{server}";
        this.colorTitle = "#03A9F4";
        this.assent = "https://telegra.ph/file/e8d1efd01183143d8d791.png";
    }
};
