import { useLoaderData } from "react-router-dom";
import EventSchedule from "../Components/eventSchedule";

const Schedule = () => {
  const { schedule } = useLoaderData();
  console.log(schedule);

  return (
    <div className="my-32 text-center px-2 md:px-10 lg:px-28">
      <h2 className="text-2xl text-gray-400 font-semibold mb-4">
        Our Next Schedules
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-orange-400 py-2">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2 hidden lg:block">Location</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2 hidden lg:block">Company Name</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((event) => (
              <EventSchedule key={event.id} event={event} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
