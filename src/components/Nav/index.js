import React from "react";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { WpfRetroTv, MaterialSymbolsDarkMode, IcBaselineStarBorderPurple500, CiApple } from "../../components/Symbols";



const Nav = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1250;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return (

      <div className="nav-container">
        <Box sx={{ height: 0, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ width: 300, position: 'absolute', top: 30, left: 26 }}
            icon={<IcBaselineStarBorderPurple500/>}
            direction='right'
          >
         
              <SpeedDialAction
                icon={<MaterialSymbolsDarkMode/>}
                tooltipTitle='Dark Theme'
                href='/personal-portfolio'
              />
              <SpeedDialAction
                icon={<WpfRetroTv/>}
                tooltipTitle='Retro Theme'
                href='/personal-portfolio/retro-theme/'
              />
              <SpeedDialAction
                icon={<CiApple/>}
                tooltipTitle='Severance Theme'
                href='/personal-portfolio/severance-theme/'
              />
        
          </SpeedDial>
        </Box>
      </div>
    );
  }
  return (
    <div>

    </div>
  );
}

export default Nav;