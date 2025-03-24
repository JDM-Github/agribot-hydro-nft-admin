import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Card, CardContent } from "~/components/ui/card";
import { Tooltip } from "react-tooltip";
import { addDays, format } from "date-fns";
import { Activity } from "lucide-react";

const today = new Date();
const activityData = [
	{ date: addDays(today, -10), count: 1 },
	{ date: addDays(today, -9), count: 2 },
	{ date: addDays(today, -8), count: 4 },
	{ date: addDays(today, -7), count: 3 },
	{ date: addDays(today, -6), count: 5 },
	{ date: addDays(today, -3), count: 2 },
	{ date: addDays(today, -1), count: 4 },
];

const MilestoneHeatmap = () => {
	return (
		<Card className="bg-gray-900 text-white shadow-lg border-0 py-6 lg:px-6 px-3">
			<CardContent>
				<h3 className="lg:text-xl mg:text-xl text-md font-bold mb-4 border-b border-gray-700 pb-2 flex items-center justify-between">
					Milestone Activity Heatmap
					<Activity size={24} className="text-gray-400" />
				</h3>

				<div className="flex items-center justify-center min-h-25">
					<CalendarHeatmap
						startDate={addDays(today, -365)}
						endDate={today}
						values={activityData}
						classForValue={(value) => {
							if (!value) return "fill-gray-700";
							// if (value.count === 1) return "fill-green-200";
							// if (value.count === 2) return "fill-green-400";
							// if (value.count === 3) return "fill-green-500";
							// if (value.count === 4) return "fill-green-600";
							return "fill-green-700";
						}}
						gutterSize={3}
						tooltipDataAttrs={(value) => {
							if (!value || !value.date) return {};
							return {
								"data-tooltip-id": "heatmap-tooltip",
								"data-tooltip-content": `Activity on ${format(
									value.date,
									"MMM dd"
								)}: ${value.count}`,
							} as any;
						}}
					/>
				</div>
				<Tooltip id="heatmap-tooltip" place="top" />
			</CardContent>
		</Card>
	);
};

export default MilestoneHeatmap;
