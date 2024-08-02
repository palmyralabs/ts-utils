import { P as r } from "../../../chunks/pubsub.js";
class u {
  subscribe(s, b) {
    const e = r.subscribe(s, b);
    if (e)
      return e;
    throw new Error("Not able to subscribe to topic " + s);
  }
  publish(s, b) {
    return r.publish(s, b);
  }
  unsubscribe(s) {
    r.unsubscribe(s);
  }
  unsubsribeTopic(s) {
    r.unsubscribe(s);
  }
  reset() {
    r.clearAllSubscriptions();
  }
}
const o = new u();
export {
  o as topic
};
