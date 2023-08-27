import React from 'react'

const Refresh = (props) => {
  return (
    <div className="refresh">
        <h2>No Tour Left</h2>
        <button className="refreshBtn" onClick={() => props.setTour(props.data)}>
            Refresh
        </button>
    </div>
  )
}

export default Refresh;