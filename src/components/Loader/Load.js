import React from 'react'

export default function Load() {
  return (
    <div
            className="loader"
            style={{
              fontSize: "50px",
              fontWeight: 500,
              fontFamily: "Fredoka",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <div className="load"></div>
          </div>
  )
}
