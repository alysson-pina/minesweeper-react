import React from 'react'
import { Button, Typography, Divider } from '@material-ui/core'
import { HtmlTooltip } from './styles'

const Instructions = () => {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit" variant='h6'>How To Play</Typography>
              <Typography color="inherit" variant='overline'><b><u>Desktop</u></b></Typography>
              <Typography color="inherit" variant='subtitle2'>Mouse</Typography>
              <ul>
                <li><b>Left click</b> to reveal an empty square</li>
                <li><b>Righ click</b> to mark/unmark a flag on a square</li>
                <li><b>Click</b> on the smiley face to reset the game</li>
              </ul>

              <Typography color="inherit" variant='subtitle2'>Keyboard</Typography>

              <ul>
                <li><b>Use the arrow keys</b> to go up, down, left or right from the current square</li>
                <li><b>Press space</b> on the selected square to mark/unmark a flag on it</li>
                <li><b>Press C or Enter</b> on the selected square to reveal it</li>
                <li><b>Press R</b> to reset the game</li>
              </ul>

              <Divider />
              <Typography color="inherit" variant='overline'><b><u>Mobile</u></b></Typography>

              <ul>
                <li><b>Single Tap</b> to reveal an empty square</li>
                <li><b>Long Tap</b> to mark/unmark a flag on a square</li>
                <li><b>Tap</b> on the smiley face to reset the game</li>
              </ul>
          </React.Fragment>
        }
      >
        <Button>How To Play</Button>
      </HtmlTooltip>
    </div>
  );
}

export default Instructions
