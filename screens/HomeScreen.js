import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FarmList from '../components/FarmList';
import { fetchActiveFarms } from '../store/actions/farmActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { farms } = useSelector((state) => state.farmState);

  useEffect(() => {
    if (!farms) {
      dispatch(fetchActiveFarms());
    }
  }, [dispatch, farms]);

  return <>{farms && <FarmList farms={farms} />}</>;
};

export default HomeScreen;
