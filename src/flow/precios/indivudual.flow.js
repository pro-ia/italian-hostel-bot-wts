import BotWhatsapp from "@bot-whatsapp/bot";
import preciosFlow from "../precios/precios.flow.js";
import singleFlow from "../precios/single.flow.js";
import dobleFlow from "../precios/doble.flow.js";
import tripleFlow from "../precios/triple.flow.js";

let menu = `*Contamos con habitaciones privadas para 1,2 y 3 personas. 
¿Que Tarifas te gustaría conocer?🤔*

- *A)* Single
- *B)* Doble
- *C)* Triple 
- *D)* Volver 👛`; //precios



export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
  .addAnswer(
    menu,
    {
      capture: true,
    },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
      if (!["A", "B", "C", "D", "a", "b", "c", "d"].includes(ctx.body)) {
        return await fallBack(`Por favor selecciona una de las opciones
        ${menu}`);
      }
    
      if (ctx.body == "A" || ctx.body == "a") {
        return await gotoFlow(singleFlow);
      }

      if (ctx.body == "B" || ctx.body == "b") { 
        return await gotoFlow(dobleFlow);
      }

      if (ctx.body == "C" || ctx.body == "c") {
        return await gotoFlow(tripleFlow);
      }

      if (ctx.body == "D" || ctx.body == "d") {
        return await gotoFlow(preciosFlow);
      }
    
    
    }
  );
