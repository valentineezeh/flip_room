import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import TableRow from './TableRow';
import { getAllRooms } from '../store/action/rooms';
import Loader from 'react-loader-spinner';

const Table = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    // code to run on component mount
    
    // dispatch getRoom method on component did mount
    dispatch(getAllRooms());
  }, [dispatch]);

  let { roomsData, isLoading } = props;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Move-out Date</th>
            <th scope="col">ID</th>
            <th scope="col">Address</th>
            <th scope="col">Room</th>
            <th scope="col">Location</th>
            <th scope="col">Last Occupant</th>
            <th scope="col">UID</th>
            <th scope="col">Balance</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {
          isLoading ? (
            <div className="loader_style">
              <Loader
                type="Circles"
                color="#055005"
                height={100}
                width={100}
                />
            </div>
          ) : (
            <TableRow 
            roomsData={roomsData} 
            isLoading={isLoading}
            />
          )
        }
        </tbody>
      </table>
    </>
  )
}

Table.propTypes = {
  roomsData: PropTypes.array,
  isLoading: PropTypes.bool,
}

const mapStateToProps = state => ({
  isLoading: state.getRoomReducer.isLoading,
  roomsData: state.getRoomReducer.rooms,
})

export default connect(mapStateToProps, null)(Table);