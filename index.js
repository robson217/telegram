const express = require("express")
const app = express()
const { Telegraf } = require("telegraf")
require("dotenv").config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const WEBHOOK_URL = "https://4f2d-2804-14d-7899-952f-d47-5c83-ba0b-db8f.ngrok-free.app"
const axios = require("axios")
const TELEGRAM_API = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World3!");
})

app.listen(3000, async () => {
    console.log("Server is running on port 3000");
    await setWebhook();
})

const setWebhook = async () => {
    try {
      const response = await axios.post(
        `${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
}

bot.launch()

bot.on("text", (ctx) => {
    if (ctx.message.text === "Olá") {
      ctx.reply(`Olá, ${ctx.message.from.first_name}!`);
    }
})