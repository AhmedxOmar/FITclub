import React from 'react'
import './JoinUs.css'

const JoinUs = () => {
  return (
    <div className='join' id='join-us'>
      <div className='left-j'>
        <hr />
        <div>
            <span className='stroke-text rdySpan'>Ready to</span>
            <span>Level Up</span>
        </div>
        <div>
            <span>Your Body </span>
            <span className='stroke-text rdySpan'>With Us?</span>
        </div>
      </div>
      <div className="right-j">
        <div className="location">
        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Cairo+(FitClub%20Gym)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
