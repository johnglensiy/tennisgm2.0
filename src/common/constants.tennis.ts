import type { CompositeWeights, Conf, Div, NonEmptyArray } from "./types.ts";
import type { RatingKey } from "./types.tennis.ts";

export const COMPOSITE_WEIGHTS: CompositeWeights<RatingKey> = {
	serving: {
		ratings: ["srv", "hgt"],
		weights: [1, 0.25],
		skill: {
			label: "S",
			cutoff: 0.65,
		},
	},
	returning: {
		ratings: ["ret", "spd", "mnt"],
		weights: [1, 0.3, 0.2],
		skill: {
			label: "R",
			cutoff: 0.65,
		},
	},
	baseline: {
		ratings: ["fh", "bh", "mnt"],
		weights: [1, 1, 0.3],
		skill: {
			label: "BL",
			cutoff: 0.65,
		},
	},
	movement: {
		ratings: ["spd", "endu"],
		weights: [1, 0.5],
	},
	mental: {
		ratings: ["mnt", "endu"],
		weights: [1, 0.3],
		skill: {
			label: "Mn",
			cutoff: 0.68,
		},
	},
	endurance: {
		ratings: [50, "endu"],
		weights: [1, 1],
	},
};

export const PLAYER_GAME_STATS = {
	all: {
		name: "All",
		stats: [
			"gs",
			"min",
			"fg",
			"fga",
			"fgp",
			"tp",
			"tpa",
			"tpp",
			"ft",
			"fta",
			"ftp",
			"orb",
			"drb",
			"trb",
			"ast",
			"tov",
			"stl",
			"blk",
			"ba",
			"pf",
			"pts",
			"pm",
			"gmsc",
		],
		sortBy: ["min"],
	},
};

export const PLAYER_SUMMARY = {
	summary: {
		name: "Summary",
		stats: [
			"gp",
			"min",
			"pts",
			"trb",
			"ast",
			"fgp",
			"tpp",
			"ftp",
			"tsp",
			"per",
			"ws",
		],
	},
};

export const PLAYER_STATS_TABLES = {
	regular: {
		name: "Per Game",
		stats: [
			"gp",
			"gs",
			"min",
			"fg",
			"fga",
			"fgp",
			"tp",
			"tpa",
			"tpp",
			"2p",
			"2pa",
			"2pp",
			"efg",
			"ft",
			"fta",
			"ftp",
			"orb",
			"drb",
			"trb",
			"ast",
			"tov",
			"stl",
			"blk",
			"ba",
			"pf",
			"pts",
		],
	},
	shotLocations: {
		name: "Shot Locations and Feats",
		stats: [
			"gp",
			"gs",
			"min",
			"fgAtRim",
			"fgaAtRim",
			"fgpAtRim",
			"fgLowPost",
			"fgaLowPost",
			"fgpLowPost",
			"fgMidRange",
			"fgaMidRange",
			"fgpMidRange",
			"tp",
			"tpa",
			"tpp",
			"dd",
			"td",
			"qd",
			"fxf",
		],
		superCols: [
			{
				title: "",
				colspan: 7,
			},
			{
				title: "At Rim",
				colspan: 3,
			},
			{
				title: "Low Post",
				colspan: 3,
			},
			{
				title: "Mid-Range",
				colspan: 3,
			},
			{
				title: "3PT",
				desc: "Three-Pointers",
				colspan: 3,
			},
			{
				title: "Feats",
				desc: "Statistical Feats",
				colspan: 4,
			},
		],
	},
	advanced: {
		name: "Advanced",
		stats: [
			"gp",
			"gs",
			"min",
			"per",
			"ewa",
			"tsp",
			"tpar",
			"ftr",
			"orbp",
			"drbp",
			"trbp",
			"astp",
			"stlp",
			"blkp",
			"tovp",
			"usgp",
			//"pm",
			"pm100",
			"onOff100",
			"ortg",
			"drtg",
			"ows",
			"dws",
			"ws",
			"ws48",
			"obpm",
			"dbpm",
			"bpm",
			"vorp",
		],
	},
	gameHighs: {
		name: "Game Highs",
		stats: [
			"gp",
			"minMax",
			"fgMax",
			"fgaMax",
			"tpMax",
			"tpaMax",
			"2pMax",
			"2paMax",
			"ftMax",
			"ftaMax",
			"orbMax",
			"drbMax",
			"trbMax",
			"astMax",
			"tovMax",
			"stlMax",
			"blkMax",
			"baMax",
			"pfMax",
			"ptsMax",
			"pmMax",
			"gmscMax",
		],
	},
};

export const TEAM_STATS_TABLES = {
	team: {
		name: "Team",
		stats: [
			"fg",
			"fga",
			"fgp",
			"tp",
			"tpa",
			"tpp",
			"2p",
			"2pa",
			"2pp",
			"ft",
			"fta",
			"ftp",
			"orb",
			"drb",
			"trb",
			"ast",
			"tov",
			"stl",
			"blk",
			"pf",
			"pts",
			"mov",
		],
	},
	opponent: {
		name: "Opponent",
		stats: [
			"oppFg",
			"oppFga",
			"oppFgp",
			"oppTp",
			"oppTpa",
			"oppTpp",
			"opp2p",
			"opp2pa",
			"opp2pp",
			"oppFt",
			"oppFta",
			"oppFtp",
			"oppOrb",
			"oppDrb",
			"oppTrb",
			"oppAst",
			"oppTov",
			"oppStl",
			"oppBlk",
			"oppPf",
			"oppPts",
			"oppMov",
		],
	},
	teamShotLocations: {
		name: "Shot Locations and Feats",
		stats: [
			"fgAtRim",
			"fgaAtRim",
			"fgpAtRim",
			"fgLowPost",
			"fgaLowPost",
			"fgpLowPost",
			"fgMidRange",
			"fgaMidRange",
			"fgpMidRange",
			"tp",
			"tpa",
			"tpp",
			"dd",
			"td",
			"qd",
			"fxf",
		],
		superCols: [
			{
				title: "",
				colspan: 4,
			},
			{
				title: "At Rim",
				colspan: 3,
			},
			{
				title: "Low Post",
				colspan: 3,
			},
			{
				title: "Mid-Range",
				colspan: 3,
			},
			{
				title: "3PT",
				desc: "Three-Pointers",
				colspan: 3,
			},
			{
				title: "Feats",
				desc: "Statistical Feats",
				colspan: 4,
			},
		],
	},
	opponentShotLocations: {
		name: "Opponent Shot Locations and Feats",
		stats: [
			"oppFgAtRim",
			"oppFgaAtRim",
			"oppFgpAtRim",
			"oppFgLowPost",
			"oppFgaLowPost",
			"oppFgpLowPost",
			"oppFgMidRange",
			"oppFgaMidRange",
			"oppFgpMidRange",
			"oppTp",
			"oppTpa",
			"oppTpp",
			"oppDd",
			"oppTd",
			"oppQd",
			"oppFxf",
		],
		superCols: [
			{
				title: "",
				colspan: 4,
			},
			{
				title: "At Rim",
				colspan: 3,
			},
			{
				title: "Low Post",
				colspan: 3,
			},
			{
				title: "Mid-Range",
				colspan: 3,
			},
			{
				title: "3PT",
				desc: "Three-Pointers",
				colspan: 3,
			},
			{
				title: "Feats",
				desc: "Statistical Feats",
				colspan: 4,
			},
		],
	},
	advanced: {
		name: "Advanced",
		stats: [
			"pw",
			"pl",
			"ortg",
			"drtg",
			"nrtg",
			"pace",
			"tpar",
			"ftr",
			"tsp",
			"efg",
			"tovp",
			"orbp",
			"ftpFga",
			"oppEfg",
			"oppTovp",
			"drbp",
			"oppFtpFga",
		],
		superCols: [
			{
				title: "",
				colspan: 13,
			},
			{
				title: "Offensive Four Factors",
				colspan: 4,
			},
			{
				title: "Defensive Four Factors",
				colspan: 4,
			},
		],
	},
};

export type Surface = "clay" | "hard" | "grass";

// Multipliers applied to composite ratings per surface in calcServePointProb.
// Values > 1 amplify that composite, < 1 diminish it.
export const SURFACE_MODIFIERS: Record<
	Surface,
	Partial<Record<keyof typeof COMPOSITE_WEIGHTS, number>>
> = {
	clay: {
		serving: 0.85, // serve is less dominant on slow clay
		returning: 1.1,
		baseline: 1.2, // clay rewards baseline grinders
		movement: 1.15, // court coverage matters more in long rallies
		endurance: 1.2, // longer points drain stamina
	},
	hard: {
		serving: 1.0,
		returning: 1.0,
		baseline: 1.0,
		movement: 1.0,
		endurance: 1.0,
	},
	grass: {
		serving: 1.2, // grass amplifies serve dominance
		returning: 0.9, // harder to read fast serves
		baseline: 0.85, // low bounce punishes baseline game
		movement: 0.95,
		endurance: 0.9, // points are shorter
	},
};

export const POSITIONS = ["P"];

export const POSITION_COUNTS = {};

export const RATINGS: RatingKey[] = [
	"srv",
	"ret",
	"fh",
	"bh",
	"spd",
	"endu",
	"mnt",
	"hgt",
];

export const SIMPLE_AWARDS = [
	"mvp",
	"roy",
	"smoy",
	"dpoy",
	"mip",
	"finalsMvp",
] as const;

export const AWARD_NAMES = {
	mvp: "Most Valuable Player",
	roy: "Rookie of the Year",
	smoy: "Sixth Man of the Year",
	dpoy: "Defensive Player of the Year",
	mip: "Most Improved Player",
	finalsMvp: "Finals MVP",
	sfmvp: "Semifinals MVP",
	allLeague: "All-League",
	allDefensive: "All-Defensive",
	allRookie: "All-Rookie Team",
} as const;

export const DEFAULT_CONFS: NonEmptyArray<Conf> = [
	{
		cid: 0,
		name: "Eastern Conference",
	},
	{
		cid: 1,
		name: "Western Conference",
	},
];

export const DEFAULT_DIVS: NonEmptyArray<Div> = [
	{
		did: 0,
		cid: 0,
		name: "Atlantic",
	},
	{
		did: 1,
		cid: 0,
		name: "Central",
	},
	{
		did: 2,
		cid: 0,
		name: "Southeast",
	},
	{
		did: 3,
		cid: 1,
		name: "Southwest",
	},
	{
		did: 4,
		cid: 1,
		name: "Northwest",
	},
	{
		did: 5,
		cid: 1,
		name: "Pacific",
	},
];
