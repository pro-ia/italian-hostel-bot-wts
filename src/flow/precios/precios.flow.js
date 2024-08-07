import BotWhatsapp from "@bot-whatsapp/bot";
import compartidaFlow from "./compartida.flow.js";
import preciosIndividualFlow from "./indivudual.flow.js";
import promoFlow from "../promo/promo.flow.js";

let menu = `Podemos ofrecer estas opciones:
- *A)* Habitaciones Compartidas 🧍🏻🧍🏻
- *B)* Habitaciones Privadas 🧍🏻
- *C)* Promos 🎁`;

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
  .addAction(async (ctx) => {
    console.log(ctx.body);
  })
  .addAnswer(
    menu,
    {
      capture: true,
    },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
      if (!["A", "B", "C", "a", "b", "c"].includes(ctx.body)) {
        return await fallBack(`Por favor selecciona una de las opciones
      ${menu}`);
      }

      if (ctx.body == "A" || ctx.body == "a") {
        return await gotoFlow(compartidaFlow);
      }

      if (ctx.body == "B" || ctx.body == "b") {
        return await gotoFlow(preciosIndividualFlow);
      }

      if (ctx.body == "C" || ctx.body == "c") {
        return await gotoFlow(promoFlow);
      }
    }
  );
