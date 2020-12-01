import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addCommasToMoney } from '../services/utils';
import { flipRoomRequest } from '../store/action/moveOut'

const TableRow = (props) => {
  const { moveOutData } = props;
  const dispatch = useDispatch();

  const onFlipRoom = (id) => {
    dispatch(flipRoomRequest(id))
  }

  return (
    <>
      {
        moveOutData.map(item => (
          <tr key={item._id} className="table_row">
            <th scope="row">{item.moveOutDate}</th>
            <td>{item._id.substring(0, 7)}</td>
            <td>
              <img className="table_image mr-2" src={item.image} alt="#" />
              <span className="table_add_text">{item.address}</span>
            </td>
            <td>{item.room}</td>
            <td>{item.location}</td>
            <td className="table_add_text">{item.lastOccupant}</td>
            <td>{item.uuid.substring(0, 7)}</td>
            <td>{`($${addCommasToMoney(item.balance)})`}</td>
            <td>
              <button 
                type="button" 
                class="btn btn-outline-success"
                onClick={() => onFlipRoom(item._id)}
                >
                <span className="table_add_text">
                  Flip Room
                </span>
              </button>
            </td>
          </tr>
        ))
      }
    </>
  )
}

TableRow.propTypes = {
  moveOutData: PropTypes.array
}

export default TableRow;