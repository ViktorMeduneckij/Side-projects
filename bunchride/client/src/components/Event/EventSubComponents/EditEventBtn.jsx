import React from 'react';
import { Link } from 'react-router-dom';


class EditEventBtn extends React.Component {
  render() {
    return !!this.props.eventId && (
      <Link to={ "/edit/event/" + this.props.eventId }>
        <div className="event-edit-btn">
          <span className="edit-event-icon icon"></span>
          <p>Edit this event</p>
        </div>
      </Link>
    );
  }
}

export default EditEventBtn;
