import React from 'react'
import PropTypes from 'prop-types'

function EventLogEntry({ timestamp, subject, eventType, object, ...props }) {
  return (
    <tr {...props}>
      <td>{timestamp}</td>
      <td>{subject}</td>
      <td>{eventType}</td>
      <td>{object}</td>
    </tr>
  )
}

EventLogEntry.propTypes = {
  eventType: PropTypes.string.isRequred,
  object: PropTypes.string,
  timestamp: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequred,
}

export default EventLogEntry
