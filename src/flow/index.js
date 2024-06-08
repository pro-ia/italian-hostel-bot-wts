import BotWhatsapp from "@bot-whatsapp/bot";

import helloFlow from "./hello.flow.js";
import preciosFlow from "./precios/precios.flow.js";
import preciosCompartidaFlow from "./precios/compartida.flow.js";
import preciosIndividualFlow from "./precios/indivudual.flow.js";
import singleFlow from "./precios/single.flow.js";
import dobleFlow from "./precios/doble.flow.js";
import tripleFlow from "./precios/triple.flow.js";
import infoTemporada from "./precios/temporada.flow.js";
import informacionFlow from "./informacion/informacion.flow.js";
import desayunoFlow from "./informacion/desayuno.flow.js";
import petFlow from "./informacion/pet.flow.js"
import promoFlow from "./promo/promo.flow.js";
import derivacionFlow from "./derivacion/derivacion.flow.js";

export default BotWhatsapp.createFlow([
  helloFlow,
  preciosFlow,
  preciosCompartidaFlow,
  preciosIndividualFlow,
  singleFlow,
  dobleFlow,
  tripleFlow,
  infoTemporada,
  informacionFlow,
  desayunoFlow,
  petFlow,
  promoFlow,
  derivacionFlow

]);
