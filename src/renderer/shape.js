import { applyAttributes, createSVGElement, mount } from './utils';

export function shape(type, context, attributes) {
  const { group } = context;
  const el = createSVGElement(type);
  applyAttributes(el, attributes);
  mount(group, el);
  return el;
}

export function line(context, attributes) {
  return shape('line', context, attributes);
}

// export function rect(context, attributes){

// }
// export function circle(context, attributes){

// }
// export function text(context, attributes){

// }
// export function path(context, attributes){

// }
// export function ring(context, attributes){

// }
