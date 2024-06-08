import BotWhatsapp from "@bot-whatsapp/bot";
import compartidaFlow from "./compartida.flow.js";
import preciosIndividualFlow from "./indivudual.flow.js";
import promoFlow from "../promo/promo.flow.js";


let menu = `Podemos ofrecer estas opciones:
- *A)* Habitaciones Compartidas 🧍🏻🧍🏻
- *B)* Habitaciones Privadas 🧍🏻
- *C)* Promos 🎁`;

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
.addAnswer(
  menu,
  {
    capture: true,
  },
  async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
    if (!["A", "B", "C"].includes(ctx.body)) {
      return await fallBack(`Por favor selecciona una de las opciones
      ${menu}`);
    }
    switch (ctx.body) {
      case "A":
        return await gotoFlow(compartidaFlow);

      case "B":
        return await gotoFlow(preciosIndividualFlow);

      case "C":
        return await gotoFlow(promoFlow);
    }
  }
);


