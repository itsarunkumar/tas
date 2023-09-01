// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module leaflet {
	export interface IconOptions {
		iconUrl: string;
		iconRetinaUrl: string;
		iconSize: [number, number];
		iconAnchor: [number, number];
		popupAnchor: [number, number];
		shadowUrl: string;
		shadowSize: [number, number];
		shadowAnchor: [number, number];
	}
}

export {};
