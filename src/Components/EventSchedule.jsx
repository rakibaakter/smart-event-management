const EventSchedule = ({ event }) => {
  const { name, date, location, time, company_name } = event;
  return (
    <tr className="bg-slate-200">
      <th>{name}</th>
      <th>{date}</th>
      <th className="hidden lg:block">{location}</th>
      <th>{time}</th>
      <th className="hidden lg:block">{company_name}</th>
    </tr>
  );
};

export default EventSchedule;
