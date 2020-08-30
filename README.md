# react-scheduler

> A lightweight react scheduler used best for shifts planning

## Install

```bash
npm install --save react-simple-scheduler
```

## Usage

```jsx
import React from 'react'

import Scheduler from 'react-simple-scheduler'
import 'react-simple-scheduler/dist/index.css'

export default function App = () => {
  const [data, setData] = useState({
    events: sampleEvents,
    shiftTypes: sampleShiftTypes,
    resources: sampleResources
  })
  const { events, shiftTypes, resources } = data

  return (
    <React.Fragment>
      <Scheduler
        events={events}
        resources={resources}
        shiftTypes={shiftTypes}
      />
    </React.Fragment>
  )
}

```

## License

MIT © [Minh Pham](https://github.com/Minh Pham)
