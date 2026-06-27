const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require("pino");
const EventEmitter = require("events");

class WAClient extends EventEmitter {
    constructor() {
        super();
        this.sock = null;
    }

    async connect() {
        const { state, saveCreds } = await useMultiFileAuthState("auth");

        this.sock = makeWASocket({
            auth: state,
            logger: pino({ level: "silent" })
        });

        this.sock.ev.on("creds.update", saveCreds);

        this.sock.ev.on("messages.upsert", (m) => {
            this.emit("message", m);
        });

        console.log("BLCKA LIB CONNECTED ✔");
    }

    async sendText(jid, text) {
        return this.sock.sendMessage(jid, { text });
    }
}

module.exports = () => new WAClient();
