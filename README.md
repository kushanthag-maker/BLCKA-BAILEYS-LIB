# BLCKA BAILEYS LIB

Simple WhatsApp library built using Baileys.

## Features
- WhatsApp connection
- Message events
- Send message API

## Install
npm install

## Example
```js
const { createClient } = require("blcka-baileys-lib");

const bot = createClient();

(async () => {
  await bot.connect();

  bot.on("message", (m) => {
    console.log(m);
  });
})();
---

# 🚀 RUN කරන්න

```bash
npm install
node src/index.js
