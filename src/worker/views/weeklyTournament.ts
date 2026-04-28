import { idb } from "../db/index.ts";
import { g, helpers } from "../util/index.ts";
import type { UpdateEvents } from "../../common/types.ts";

const updateWeeklyTournament = async (
	_inputs: unknown,
	updateEvents: UpdateEvents,
	state: any,
) => {
	const series = g.get("weeklyTournamentSeries");

	if (
		!updateEvents.includes("firstRun") &&
		!updateEvents.includes("gameSim") &&
		state.week === series?.week &&
		state.currentRound === series?.currentRound
	) {
		return;
	}

	if (!series) {
		return {
			week: null,
			complete: false,
			championTid: undefined,
			series: [],
			matchups: [],
			userTid: g.get("userTid"),
			season: g.get("season"),
		};
	}

	// Deep copy so augmentSeries can mutate freely
	const seriesCopy = helpers.deepCopy(series.series);

	await helpers.augmentSeries(seriesCopy, g.get("season"));

	// Build single-sided bracket layout for the HTML table.
	// Round i has rowspan 2^i; matchup j in round i goes in row j * 2^i.
	const numRounds = seriesCopy.length;
	const numRows = numRounds > 0 ? 2 ** (numRounds - 1) : 0;
	const matchups: { matchup: [number, number]; rowspan: number }[][] =
		Array.from({ length: numRows }, () => []);

	for (let i = 0; i < numRounds; i++) {
		const rowspan = 2 ** i;
		for (let j = 0; j < seriesCopy[i]!.length; j++) {
			const row = j * rowspan;
			if (matchups[row]) {
				matchups[row]!.push({ matchup: [i, j], rowspan });
			}
		}
	}

	let championName: string | undefined;
	if (series.complete && series.championTid !== undefined) {
		const info = g.get("teamInfoCache")[series.championTid];
		championName = info ? `${info.region} ${info.name}` : undefined;
	}

	return {
		week: series.week,
		currentRound: series.currentRound,
		complete: series.complete,
		championTid: series.championTid,
		championName,
		series: seriesCopy,
		matchups,
		userTid: g.get("userTid"),
		season: g.get("season"),
	};
};

export default updateWeeklyTournament;
