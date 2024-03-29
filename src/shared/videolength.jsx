import React from 'react'
import moment from "moment"

function Videolength({time}) {
    const videolengthInSeconds = moment().startOf("day").second(time).format("H:mm:ss");
  return (
   <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white rounded  text-sm overflow-hidden">
        {videolengthInSeconds}
   </div>
  )
}

export default Videolength