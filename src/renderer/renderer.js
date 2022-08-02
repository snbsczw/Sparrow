import { createContext } from './context';
import {
  line,
} from './shape';
// import { restore, save, scale, translate, rotate } from './transform'

export function createRenderer(width, height) {
  const context = createContext(width, height);
  return {
    line: (options) => line(context, options),
    // circle: (options) => circle(context, options),
    // text: (options) => text(context, options),
    // rect: (options) => rect(context, options),
    // path: (options) => path(context, options),
    // ring: (options) => ring(context, options),
    // restore: () => restore(context),
    // save: () => save(context),
    // scale: (...args) => scale(context, ...args),
    // translate: (...args) => translate(context, ...args),
    // rotate: (...args) => rotate(context, ...args),
    node: () => context.node,
    group: () => context.group,
  };
}
