import BotWhatsapp from "@bot-whatsapp/bot";
import helloFlow from "../hello.flow.js";
import desayunoFlow from "../informacion/desayuno.flow.js";
import petFlow from "../informacion/pet.flow.js";
import promoFlow from "../promo/promo.flow.js";
import derivacionFlow from "../derivacion/derivacion.flow.js";


let menu = `*Tienes mas dudas con las que podamos ayudarte? 🤔*

- *A)* Desayuno 🥐☕
- *B)* Pet Friendly 🐕🐈
- *C)* Promos
- *D)* Quiero saber disponibilidad
- *E)* Volver al inicio 🏠`;

let infoHabitacion = [
  `Estamos a 2 cuadras de la avenida principal, contamos con wifi, patio grande, desayuno casero, cocina equipada de uso común y más.`,
  `Las habitaciones privadas se encuentran en planta alta y cuentan con 2 baños toilet (compartidos y sin duchas) y las habitaciones compartidas en la planta baja, donde también están los baños compartidos con duchas.`,
  `Todas con desayuno casero incluido.`,
  `No tenemos estacionamiento pero estamos ubicados en un barrio residencial (es muy tranquilo) y es super fácil conseguir lugar para estacionar.`,
  menu,
];

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
  .addAnswer(
    `Tenemos habitaciones compartidas y privadas.`,
    {},
    async (ctx, ctxfn) => {
      await ctxfn.flowDynamic(infoHabitacion);
    }
  )
  .addAnswer(
    `Los baños son amplios y compartidos. Por un lado el de mujeres y por el otro el de hombres.`,
    {
      capture: true,
    },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
      if (!["A", "B", "C", "D", "E"].includes(ctx.body)) {
        return await fallBack(`Por favor selecciona una de las opciones
      ${menu}`);
      }
      switch (ctx.body) {
        case "A":
          return await gotoFlow(desayunoFlow);

        case "B":
          return await gotoFlow(petFlow);

        case "C":
          return await gotoFlow(promoFlow);

        case "D":
          return await gotoFlow(derivacionFlow);

        case "E":
          return await gotoFlow(helloFlow);
      }
    }
  );
