const midu = require("../events")
const { MessageType } = require("@adiwajshing/baileys")

midu.addCommand(
  {
    pattern: "button ?(.*)",
    fromMe: true,
    desc: "Convert replied image,video or document to button Message",
  },
  async (message, match) => {
    const items = match.split(",")
    if (items.length < 3)
      return await message.sendMessage(
        "Gib head,foot,button1,button2,...\nreply to image,video or doc if needs"
      )
    const buttons = []
    for (let i = 2; i < items.length; i++) {
      buttons.push({
        buttonId: items[i],
        buttonText: { displayText: items[i] },
        type: 1,
      })
    }
    const buttonMessage = {
      contentText: items[0],
      footerText: items[1],
      buttons: buttons,
    }
    return await message.client.sendMessage(message.jid,buttonMessage, message,
      {},MessageType.buttonsMessage
    )
  }
)
