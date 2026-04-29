export type PlayerRatings = {
	// skill ratings (RatingKey)
	srv: number; // serve quality
	ret: number; // return of serve quality
	fh: number; // forehand
	bh: number; // backhand
	spd: number; // court coverage
	endu: number; // endurance
	mnt: number; // mental/composure

	// physical (modifier)
	hgt: number;

	// metadata
	fuzz: number;
	injuryIndex?: number;
	locked?: boolean;
	ovr: number;
	pot: number;
	pos: string;
	season: number;
	skills: string[];
};

export type RatingKey =
	| "srv"
	| "ret"
	| "fh"
	| "bh"
	| "spd"
	| "endu"
	| "mnt"
	| "hgt";
