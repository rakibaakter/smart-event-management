import PropTypes from "prop-types";
import useAuthInfoHooks from "../../Hooks/useAuthInfoHooks";

const History = () => {
  const { historyInfo } = useAuthInfoHooks();

  // console.log(historyInfo);

  return (
    <div className="bg-white w-11/12 lg:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 ">
      {Object.keys(historyInfo).map((key, index) => (
        <div className="text-center md:py-6">
          <div className={`${index === 0 ? "" : "border-l border-orange-400"}`}>
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
