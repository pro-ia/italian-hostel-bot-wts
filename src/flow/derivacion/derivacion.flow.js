import BotWhatsapp from "@bot-whatsapp/bot";

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
.addAnswer(
 "Que deseas consultar?",{
     capture: true
 }, async (ctx, ctxfn) => {
     return await ctxfn.flowDynamic(`Chatea con el asesor:
https://api.whatsapp.com/send?phone=542944316123&text=${ctx.body.replace(/ /g, '%20')}`);
 }
);
