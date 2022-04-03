import {join} from '../animations';
import {decorate, threadable} from "../decorators";

decorate(all, threadable());
export function* all(...tasks: Generator[]): Generator {
  for (const task of tasks) {
    yield task;
  }
  yield* join(true, ...tasks);
}