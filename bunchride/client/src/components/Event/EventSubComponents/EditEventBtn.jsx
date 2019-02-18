import React from 'react';

class EditEventBtn extends React.Component {
  render() {
    return !!this.props.eventId && (
      <a className="event-edit-btn" href={"http://localhost:3001/api/v.1.0/update/edit-event/" + this.props.eventId }>
        <span className="edit-event-icon icon"></span>
        <p>Edit this event</p>
      </a>
    );
  }
}

export default EditEventBtn;
