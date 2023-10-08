import PropTypes from "prop-types";
import useAuthInfoHooks from "../../Hooks/useAuthInfoHooks";

const History = () => {
  const { historyInfo } = useAuthInfoHooks();

  console.log(historyInfo);

  return (
    <div className="bg-white w-11/12 md:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-1 absolute left-4 md:left-20 lg:left-40 md:right-0 bottom-2 md:bottom-6 lg:bottom-20">
      {Object.keys(historyInfo).map((key, index) => (
        <div className="text-center md:py-6">
          <div
            className={`md:${index === 0 ? "" : "border-l border-orange-400"}`}
          >
            <h3 className="md:text-3xl font-semibold md:mt-6">
              {historyInfo[key]}
            </h3>
            <p className="mb-6">{key}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
// History.propTypes = {
//   key: PropTypes.any.isRequired,
// };
