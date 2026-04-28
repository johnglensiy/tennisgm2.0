import { ResponsiveTableWrapper } from "../components/ResponsiveTableWrapper.tsx";
import useTitleBar from "../hooks/useTitleBar.tsx";
import type { View } from "../../common/types.ts";
import { PlayoffMatchup } from "../components/PlayoffMatchup.tsx";

const WeeklyTournament = ({
	championName,
	complete,
	matchups,
	season,
	series,
	userTid,
	week,
}: View<"weeklyTournament">) => {
	useTitleBar({
		title: "Weekly Tournament",
	});

	if (!week) {
		return <p>No weekly tournament in progress.</p>;
	}

	if (series.length === 0) {
		return <p>No bracket data available.</p>;
	}

	const numRounds = series.length;
	const maxWidth = 210 * numRounds;
	const tdStyle = { width: `${100 / numRounds}%` };

	return (
		<div style={{ maxWidth }}>
			<h2>Week {week}</h2>

			{complete && championName ? (
				<p className="mb-3">
					<strong>{championName}</strong> won this week&apos;s tournament.
				</p>
			) : (
				<p className="mb-3">
					Round{" "}
					{(matchups.find((row) => row.length > 0)?.[0]?.matchup[0] ?? 0) + 1}{" "}
					of {numRounds}
				</p>
			)}

			<ResponsiveTableWrapper className="mb-3">
				<table className="table-sm w-100">
					<tbody>
						{matchups.map((row, i) => (
							<tr key={i}>
								{row.map((m, j) => (
									<td key={j} rowSpan={m.rowspan} style={tdStyle}>
										<PlayoffMatchup
											numGamesToWinSeries={1}
											season={season}
											series={series[m.matchup[0]]?.[m.matchup[1]]}
											userTid={userTid}
										/>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</ResponsiveTableWrapper>
		</div>
	);
};

export default WeeklyTournament;
