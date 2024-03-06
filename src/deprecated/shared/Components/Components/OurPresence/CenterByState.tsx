import { useEffect, useState } from 'react';
import centersData from '../../../../jsonFiles/map-center-data.json';

type CenterData = {
  _id: string;
  centers: string[];
  state: string;
};
const CentersByState = () => {
  // const [stateValues, setStateValues] = useState({centersCount});
  const getStateColor = (centersCount: number) => {
    if (centersCount >= 0 && centersCount <= 1) {
      return '#D5D5D5';
    } else if (centersCount > 1 && centersCount <= 2) {
      return '#FBCD8F';
    } else if (centersCount > 2 && centersCount <= 4) {
      return '#FFC000';
    } else if (centersCount > 4 && centersCount <= 10) {
      return '#FF8A00';
    } else if (centersCount > 10 && centersCount <= 20) {
      return '#FF6B00';
    } else if (centersCount > 20 && centersCount <= 50) {
      return '#FF6B00';
    }
    return '#D5D5D5-default';
  };

  const [centersCountByState, setCentersCountByState] = useState<{
    [key: string]: number;
  }>({});

  const calculateCentersCountByState = (data: CenterData[]) => {
    const centersCount: { [key: string]: number } = {};
    centersData?.data.forEach((item) => {
      if (!centersCount[item.state]) {
        centersCount[item.state] = 0;
      }
      centersCount[item.state] += item.centers.length;
    });
    const keyData = Object.keys(centersCount);
    const finalCenters: { [key: string]: string } = {};
    keyData.forEach((item: string, index: number) => {
      finalCenters[item] = getStateColor(centersCount[item]);
    });
    console.log(finalCenters, 'value');
    return finalCenters;
  };
  useEffect(() => {
    const centersCount = calculateCentersCountByState(
      centersData.data as CenterData[]
    );
    // setCentersCountByState(centersCount);
  }, []);

  return (
    <div>
      <h1>Centers Count by State</h1>
      <ul>
        {Object.entries(centersCountByState).map(([state, count], index) => (
          <li key={index}>
            {state}: {count} centers
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CentersByState;
