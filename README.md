# react-scheduler

> A lightweight react scheduler used best for shifts planning

[Demo]('https://monmush.github.io/react-simple-scheduler/')

## Install

---

```bash
npm install --save react-simple-scheduler
```

## Usage

---

```jsx
import React from 'react'
import Scheduler from 'react-simple-scheduler'
import 'react-simple-scheduler/dist/index.css'

export default function App = () => {
  const [data, setData] = useState({
    events: sampleEvents,
    resources: sampleResources
  })
  const { events, resources } = data

  return (
    <React.Fragment>
      <Scheduler
        events={events}
        resources={resources}
      />
    </React.Fragment>
  )
}
```

## Run example locally

---

1. Clone this repository

```bash
git clone https://github.com/monmush/react-simple-scheduler.git
```

2. Install dependencies:

```bash
npm install
```

3. Start project:

```bash
npm start # runs rollup with watch flag
```

```bash
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

4. Open http://localhost:3000/

## APIs

---

**Scheduler**

| Syntax    | Description                                                                                                            | Type        | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | ----------- | ------- |
| events    | List of the events or so-called working shifts that will be displayed in the right-hand side of the scheduler          | See below   | -       |
| resources | List of the resources or employees who are responsible for the shifts displayed in the left-hand side of the scheduler | `Resouce[]` | -       |
| config    | `config` allows passing multiple configurations to the scheduler                                                       | `Config`    | -       |

**Event**
| Syntax | Description | Type | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| id | Unique id of an event | `string | number` | - |
| event | Contain event details | `{date: string, start: string, end: string, shiftType: sting}` | - |
| resource | Name of the resource that is responsible for the event | `string` | - |
resourceId | Id of the resource that is responsible for the event | `string | number` | - |

**Resource**

| Syntax | Description               | Type              | Default |
| ------ | ------------------------- | ----------------- | ------- |
| id     | Unique id of the resource | `string | number` | -       |
| name   | Name of the resource      | `string`          | -       |

**Config**

| Syntax             | Description                                                                                                                    | Type                                       | Default                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ | ---------------------------------------- |
| currentDate        | The initial date for the scheduler to render                                                                                   | `DD/MM/YYYY`                               | -                                        |
| schedulerTitle     | The title of the scheduler                                                                                                     | `string | null`                            | 'React simple scheduler'                 |
| schedulerWidth     | Defines the width of the scheduler. By default, it will take up to 90% the width of the `inner.windowWidth` 🚨 **depreciated** | `number`                                   | window.innerWidth \* 0.9                 |
| resourcesViewWidth | determines the width of the ResourceView section (the right side of the scheduler) 🚨 **depreciated**                          | `number`                                   |                                          |
| schedulerViewWidth | determines the width of the SchedulerView section (the left side of the scheduler) 🚨 **depreciated**                          | `number`                                   | -                                        |
| cellBgColor        | Allows to adjust the background color of the cells in the scheduler                                                            | `string`                                   | '#ffffff'                                |
| cellBgHoverColor   | Allows to adjust the background color of the cells on hover                                                                    | `string`                                   | '#fafafa'                                |
| cellHeight         | Use to set the height of the cells in pixel                                                                                    | `number`                                   | 55                                       |
| cellPadding        | Use to set the padding of the cells in pixel                                                                                   | `[number, number, number, number]`         | [8, 12, 8, 12]                           |
| dateFormat         | Follows the date format rules of [Day.js]('https://day.js.org/docs/en/display/format')                                         | `string`                                   | 'DD/MM/YYYY'                             |
| cellPopoverWidth   | Determines the width of the popover in pixel on event hovering                                                                 | `number`                                   | 200                                      |
| resourceTitle      | Allows to change the header value of the ResourcesView column                                                                  | `string`                                   | 'Resources'                              |
| view               | Change the current view mode of the scheduler. Only support view type `Week` at the moment                                     | `[{ viewName: string, viewType: string }]` | [{ viewName: 'Week', viewType: 'week' }] |

**4.shiftTypeonfig**
🚧🚧🚧 In progress....

## License

---

MIT © [Minh Pham](https://github.com/monmush)
