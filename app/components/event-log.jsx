import React from 'react'
import EventLogEntry from './event-log-entry'

function EventLog(props) {
  return (
    <table {...props}>
      <thead>
        <tr>
          <th className="text-left">Timestamp</th>
          <th className="text-left">Subject</th>
          <th className="text-left">Event</th>
          <th className="text-left">Object</th>
        </tr>
      </thead>

      <tbody>
        <EventLogEntry
          timestamp="2021-04-20 04:20Z"
          subject="The Bouncing Borsalino Brothers"
          eventType="order.complete"
          object="6 unitards"
        />
        <EventLogEntry
          timestamp="2021-04-20 04:24Z"
          subject="Nemo"
          eventType="order.complete"
          object="Roller Skates"
        />
        <EventLogEntry
          timestamp="2021-04-20 16:20Z"
          subject="Chloe the Clam"
          eventType="order.complete"
          object="sunglasses"
        />
      </tbody>
    </table>
  )
}

export default EventLog
