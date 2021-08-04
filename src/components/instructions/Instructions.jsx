import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { HtmlTooltip } from './styles'
import { data } from './data'

const Instructions = () => {
  return (
    <div>
      <HtmlTooltip
        enterTouchDelay={25}
        leaveTouchDelay={2500}
        title={
          <>
            <Typography color="inherit" variant='h6'>How To Play</Typography>
              {data.map((section, i) => (
                <React.Fragment key={i}>
                  <Typography color="inherit" variant='overline'><b><u>{section.overline}</u></b></Typography>
                  {section.content.map((innerContent, j) => (
                    <React.Fragment key={j}>
                      {innerContent.subtitle && <Typography color="inherit" variant='subtitle2'>{innerContent.subtitle}</Typography>}
                      <ul>
                        {innerContent.list.map((item, k) => (
                          <li key={k}><b>{item.bold}</b>{' '}{item.regular}</li>
                        ))}
                      </ul>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
          </>
        }
      >
        <Button>How To Play</Button>
      </HtmlTooltip>
    </div>
  );
}

export default Instructions
