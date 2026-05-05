const SPORT_FALLBACKS: Partial<Record<string, string>> = {
	tennis: "basketball",
};

export const bySport = <T>(
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
	const sport = process.env.SPORT;
	if (Object.hasOwn(object, sport)) {
		// https://github.com/microsoft/TypeScript/issues/21732
		// @ts-expect-error
		return object[sport];
	}

	const fallback = SPORT_FALLBACKS[sport];
	if (fallback !== undefined && Object.hasOwn(object, fallback)) {
		// https://github.com/microsoft/TypeScript/issues/21732
		// @ts-expect-error
		return object[fallback];
	}

	if (Object.hasOwn(object, "default")) {
		// https://github.com/microsoft/TypeScript/issues/21732
		// @ts-expect-error
		return object.default;
	}

	throw new Error("No value for sport and no default");
};

export const isSport = (
	sport: "baseball" | "basketball" | "football" | "hockey" | "tennis",
) => {
	return sport === process.env.SPORT;
};
