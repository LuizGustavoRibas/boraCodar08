import React from "react";
import './Banner.css'

export function Banner() {
  return (
    <div className="banner">
      <div className="saleDays">
        <h1>Vendas por dia da semana</h1>
      </div>
      <div className="info">
        <div className="textInfo">
          <div>
            <div className="salesIndicator">
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 0.5L12.9952 11.75H0.00480938L6.5 0.5Z" fill="url(#paint0_linear_201_16)"/>
<defs>
<linearGradient id="paint0_linear_201_16" x1="6.5" y1="0.5" x2="6.5" y2="15.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#81FBB8"/>
<stop offset="1" stop-color="#28C76F"/>
</linearGradient>
</defs>
              </svg>
              <h5>Dia com mais vendas</h5>
            </div>
            <h4>quarta-feira</h4>
          </div>
          <div>
            <div className="salesIndicator">
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.5 11.5L12.9952 0.25H0.00480938L6.5 11.5Z" fill="url(#paint0_linear_201_24)"/>
  <defs>
  <linearGradient id="paint0_linear_201_24" x1="6.5" y1="11.5" x2="6.5" y2="-3.5" gradientUnits="userSpaceOnUse">
  <stop stop-color="#EA5455"/>
  <stop offset="1" stop-color="#FEB692"/>
  </linearGradient>
  </defs>
              </svg>
              <h5>Dia com menos vendas</h5>
            </div>
            <h4>domingo</h4>
          </div>
        </div>
        <hr />
        <div className="graphInfo">
          <div>
            <svg width="16" height="39" viewBox="0 0 16 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="15" height="39" rx="7.5" fill="url(#paint0_linear_201_33)"/>
<defs>
<linearGradient id="paint0_linear_201_33" x1="8" y1="0" x2="8" y2="39" gradientUnits="userSpaceOnUse">
<stop stop-color="#90F7EC"/>
<stop offset="1" stop-color="#32CCBC"/>
</linearGradient>
</defs>
            </svg>
            <span>dom</span>
          </div>
          <div>
            <svg width="15" height="115" viewBox="0 0 15 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="115" rx="7.5" fill="url(#paint0_linear_201_37)"/>
<defs>
<linearGradient id="paint0_linear_201_37" x1="7.5" y1="0" x2="7.5" y2="115" gradientUnits="userSpaceOnUse">
<stop stop-color="#90F7EC"/>
<stop offset="1" stop-color="#32CCBC"/>
</linearGradient>
</defs>
            </svg>
            <span>seg</span>
          </div>
          <div>
            <svg width="15" height="76" viewBox="0 0 15 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="76" rx="7.5" fill="url(#paint0_linear_201_41)"/>
<defs>
<linearGradient id="paint0_linear_201_41" x1="7.5" y1="0" x2="7.5" y2="76" gradientUnits="userSpaceOnUse">
<stop stop-color="#90F7EC"/>
<stop offset="1" stop-color="#32CCBC"/>
</linearGradient>
</defs>
            </svg>
            <span>ter</span>
          </div>
          <div>
            <svg width="15" height="159" viewBox="0 0 15 159" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="159" rx="7.5" fill="url(#paint0_linear_201_45)"/>
<defs>
<linearGradient id="paint0_linear_201_45" x1="7.5" y1="0" x2="7.5" y2="159" gradientUnits="userSpaceOnUse">
<stop stop-color="#90F7EC"/>
<stop offset="1" stop-color="#32CCBC"/>
</linearGradient>
</defs>
            </svg>
            <span>qua</span>
          </div>
          <div>
            <svg width="15" height="129" viewBox="0 0 15 129" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="129" rx="7.5" fill="url(#paint0_linear_201_49)"/>
<defs>
<linearGradient id="paint0_linear_201_49" x1="7.5" y1="0" x2="7.5" y2="129" gradientUnits="userSpaceOnUse">
<stop stop-color="#90F7EC"/>
<stop offset="1" stop-color="#32CCBC"/>
</linearGradient>
</defs>
            </svg>
            <span>qui</span>
          </div>
          <div>
            <svg width="16" height="120" viewBox="0 0 16 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="15" height="120" rx="7.5" fill="url(#paint0_linear_201_53)"/>
<defs>
<linearGradient id="paint0_linear_201_53" x1="8" y1="0" x2="8" y2="120" gradientUnits="userSpaceOnUse">
<stop stop-color="#90F7EC"/>
<stop offset="1" stop-color="#32CCBC"/>
</linearGradient>
</defs>
            </svg>
            <span>sex</span>
          </div>
          <div>
            <svg width="15" height="69" viewBox="0 0 15 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="69" rx="7.5" fill="url(#paint0_linear_201_57)"/>
<defs>
<linearGradient id="paint0_linear_201_57" x1="7.5" y1="0" x2="7.5" y2="69" gradientUnits="userSpaceOnUse">
<stop stop-color="#90F7EC"/>
<stop offset="1" stop-color="#32CCBC"/>
</linearGradient>
</defs>
            </svg>
            <span>sab</span>
          </div>
        </div>
      </div>
    </div>
  )
}