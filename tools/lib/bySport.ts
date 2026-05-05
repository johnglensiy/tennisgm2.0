import { type Sport } from "./getSport.ts";

const SPORT_FALLBACKS: Partial<Record<Sport, Sport>> = {
	tennis: "basketball",
};

export const bySport = <T>(
	sport: Sport,
	object:
		| {
				baseball: T;
				basketball: T;
				football: T;
				hockey: T;
				default?: T;
		  }
		| {
				baseball?: T;
				basketball?: T;
				football?: T;
				hockey?: T;
				default: T;
		  },
): T => {
	if (Object.hasOwn(object, sport)) {
		return (object as any)[sport];
	}

	const fallback = SPORT_FALLBACKS[sport];
	if (fallback !== undefined && Object.hasOwn(object, fallback)) {
		return (object as any)[fallback];
	}

	if (Object.hasOwn(object, "default")) {
		return (object as any).default;
	}

	throw new Error("No value for sport and no default");
};
