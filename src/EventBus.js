// Event Bus
import mitt from 'mitt'
import emitter from 'tiny-emitter';
import Emitter from 'tiny-emitter';
export const EventBus = new mitt();
// export default {
//     $on: (...args) => emitter.on(...args),
//     $once: (...args) => emitter.once(...args),
//     $off: (...args) => emitter.off(...args),
//     $emit: (...args) => emitter.emit(...args)
// }
// import Vue from 'vue'
// export const EventBus = new Vue();