import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

let things: Writable<string[]> = writable([]);

export function getThings() {
	return things;
}

export function addThing(thing: string) {
	things.update((things) => [thing, ...things]);
}

export function removeThing(thing: string) {
	things.update((things) => things.filter((t) => t !== thing));
}
