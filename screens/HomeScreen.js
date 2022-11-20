import { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FarmList from '../components/FarmList';
import { fetchActiveFarms } from '../store/actions/farmActions';
import { getToken, getTokenPayload } from '../utils/token-manager';

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
