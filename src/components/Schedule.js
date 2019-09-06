// console.clear();

// const DAYS_OF_WEEK = [
// 	'Sunday', 'Monday', 'Tuesday', 'Wednesday',
//   'Thursday', 'Friday', 'Saturday'
// ];

// const { Component, PropTypes } = React;

// /* Helpers */
// const padLeft = (number, padding) => (
//   padding.substring(number.toString().length) + number
// );

// const toTimeString = (hours, minutes) => (
// 	`${padLeft(hours, '00')}:${padLeft(minutes, '00')}`
// );

// const startOfWeek = (date) => {
// 	const clone = new Date(date);
//   const day = date.getDay();
// 	const diff = date.getDate() - day + (day === 0 ? -6 : 1);
//   clone.setDate(diff);
  
//   return clone;
// };

// const addDays = (date, days) => {
//   const clone = new Date(date);
//   clone.setDate(clone.getDate() + days);
  
//   return clone;
// };

// /* PropTypes */
// const appointmentPropType = PropTypes.shape({
//   name: PropTypes.string.isRequired,
//   start: PropTypes.string.isRequired,
//   end: PropTypes.string.isRequired,
//   blockSpan: PropTypes.number
// });

// const appointmentsPropType = PropTypes.arrayOf(appointmentPropType);

// /* COMPONENTS */
// class Calendar extends Component {
//   static propTypes = {
//     appointments: PropTypes.shape({
//       monday: appointmentsPropType.isRequired,
//       tuesday: appointmentsPropType.isRequired,
//       wednesday: appointmentsPropType.isRequired,
//       thursday: appointmentsPropType.isRequired,
//       friday: appointmentsPropType.isRequired
//     }).isRequired
//   };
  
//   constructor(props) {
//   	super(props);
//     this.normalizeTimeBlocks(props.appointments);
//   }
  
//   componentWillReceiveProps(nextProps) {
//   	if (this.props.appointments !== nextProps.appointments) {
//     	this.normalizeTimeBlock(nextProps.appointments);
//     }
//   }
  
//   normalizeTimeBlocks = (appointments) => {
//   	const blockSize = 30;
//     const timeBlocks = {};
//     const eventBlocks = {};
    
//     for (let day in appointments) {
//       appointments[day].forEach(appointment => {
//       	const startTime = appointment.start;
//         const endTime = appointment.end;
//       	let blockSpan = 0;
        
//         if (startTime === '00:00' && endTime === '00:00') {
//         	blockSpan = Math.ceil(24 * 60 / blockSize);
//         }
//         else {
//           const startSplit = startTime.split(':');
//           let hour = parseInt(startSplit[0]);
//           let minutes = parseInt(startSplit[1]);
//           let timeString = appointment.startTime;

//           while (timeString !== appointment.end) {
//             blockSpan++;
//             minutes += blockSize;

//             if (minutes >= 60) {
//               minutes = 0;
//               hour += 1;
//             }

//             timeString = toTimeString(hour, minutes);
//           }
//         }
        
//         eventBlocks[startTime] = eventBlocks[startTime] || {};
//         eventBlocks[startTime][day] = Object.assign({}, appointment, {
//           blockSpan
//         });
//       });
//     }
    
//     for (let hour = 0; hour < 24; hour++) {
//       for (let minutes = 0; minutes < 60; minutes += blockSize) {
//         const timeString = toTimeString(hour, minutes);
      
//         timeBlocks[timeString] = eventBlocks[timeString] || {};
//       }
//     }
    
//     this.timeBlocks = timeBlocks;
//   };

//   render() {
//     const rows = [];

//     for (let time in this.timeBlocks) {
//       const block = this.timeBlocks[time];

//       rows.push(
//         <Row key={time}>
//           <TimeCell className="calendar__cell--time-col">{time}</TimeCell>
//           <AppointmentCell className="calendar__cell--time-spacing" />
//           <AppointmentCell appointment={block.monday} />
//           <AppointmentCell appointment={block.tuesday} />
//           <AppointmentCell appointment={block.wednesday} />
//           <AppointmentCell appointment={block.thursday} />
//           <AppointmentCell appointment={block.friday} />
//           <AppointmentCell className="calendar__cell--weekend" />
//           <AppointmentCell className="calendar__cell--weekend" />
//         </Row>
//       );
//     }
    
//     const monday = startOfWeek(new Date);
  
//     return (
//       <div className="calendar">
//         <Row>
//           <HeaderCell className="calendar__cell--time-col" />
//           <Cell className="calendar__cell--time-spacing" />
//           <HeaderCell day={monday} />
//           <HeaderCell day={addDays(monday, 1)} />
//           <HeaderCell day={addDays(monday, 2)} />
//           <HeaderCell day={addDays(monday, 3)} />
//           <HeaderCell day={addDays(monday, 4)} />
//           <HeaderCell day={addDays(monday, 5)} />
//           <HeaderCell day={addDays(monday, 6)} />
//         </Row>
  
//   			<div className="calendar__body">
// 	        {rows}
        
//           <Row className="calendar__row--deco-last-row">
//             <TimeCell className="calendar__cell--time-col">00:00</TimeCell>
//             <AppointmentCell />
//           </Row>
          
//           <CurrentTimeIndicator />
//         </div>
//       </div>
//     );
//   }
// }

// class CurrentTimeIndicator extends Component {
// 	state = {
// 		now: new Date
// 	};
  
//   componentDidMount() {
//   	const seconds = this.state.now.getSeconds();
    
//     this.timeout = setTimeout(() => {
//     	this.updateDate();
//       this.interval = setInterval(this.updateDate, 60 * 1000);
//     }, (60 - seconds) * 1000);
//   }
  
//   componentWillUnmount() {
//   	clearTimeout(this.timeout);
//   	clearInterval(this.interval);
//   }
  
//   updateDate = () => {
//   	this.setState({
//       now: new Date
//     });
//   };
  
//   getPercentage = () => {
//   	const { now } = this.state;
//   	const minutesPassed = now.getHours() * 60 + now.getMinutes();
    
//   	return minutesPassed * 100 / 1440;
//   };
  
//   render() {
//   	const { now } = this.state; 
//   	const style = {
//       top: this.getPercentage() + '%'
//     };
  
//     return (
//       <div className="calendar__current-time" style={style}>
//         <div className="calendar__current-time__text">
//           {toTimeString(now.getHours(), now.getMinutes())}
//         </div>
//       </div>
//     );
//   }
// };

// const Appointment = (props) => {
// 	const { appointment } = props;  
// 	const wholeDay = appointment.start === '00:00' &&
//   	appointment.end === '00:00';
    
//   const time = wholeDay ?
//   	'Todo el día' :
//     `${appointment.start} - ${appointment.end}`;

// 	return (
//     <div {...props} className="calendar__appointment">
//       <div className="calendar__appointment__time">
//         {time}
//       </div>
//       <div className="calendar__appointment__name">
//         {appointment.name}
//       </div>
//     </div>
// 	);
// }

// Appointment.propTypes = {
// 	appointment: appointmentPropType
// };

// const Row = (props) => (
//   <div {...props}
//   	className={classNames('calendar__row', props.className)}
//   />
// );

// const Cell = (props) => (
//   <div {...props}
//   	className={classNames('calendar__cell', props.className)}
//   />
// );

// const HeaderCell = (props) => {
// 	const { day } = props; 
// 	const isToday = day &&
//   	day.toDateString() === new Date().toDateString();

// 	return (
//     <Cell {...props}
//       className={
//         classNames('calendar__cell--day-of-week', props.className, {
//           'calendar__cell--day-of-week--today': isToday 
//         })
//       }
//       >
//       {day &&
//         <div className="calendar__cell--day-of-week__day">
//           {DAYS_OF_WEEK[day.getDay()]}
//         </div>
//       }
//       {day &&
//         <div className="calendar__cell--day-of-week__date">
//           {day.getDate()}
//         </div>
//       }
//     </Cell>
//   );
// };

// HeaderCell.propTypes = {
// 	day: PropTypes.instanceOf(Date)
// };

// const TimeCell = (props) => (
//   <Cell {...props}
//   	className={classNames('calendar__cell--time', props.className)}
//   />
// );

// const AppointmentCell = (props) => {
// 	const { appointment } = props;
//   let appointmentComponent = null;
  
//   if (appointment) {
//     const { blockSpan } = appointment;
//     const height = (100 * blockSpan) + '%';
//     const borderPixels = (blockSpan + 1) + 'px';
//     const cssHeight = 'calc(' + height + ' + ' + borderPixels + ')';
    
//     appointmentComponent = (
// 	    <Appointment style={{ height: cssHeight }} appointment={appointment} />
//     );
//   }

// 	return (
//     <Cell {...props}
//     	className={classNames('calendar__cell--appointment', props.className)}
//       >
//       {appointmentComponent}
//     </Cell>
//   );
// };

// AppointmentCell.propTypes = {
// 	appointment: appointmentPropType
// };

// const App = (props) => (
//   <div className="container">
//     <Calendar {...props} />
//   </div>
// );

// /* INIT */
// const renderCalendar = (appointments) => {
//   ReactDOM.render(
//     <App appointments={appointments} />,
//     document.getElementById('root')
//   );
// };

// renderCalendar({
//   monday: [
//     { name: 'Gustavo', start: '08:00', end: '09:00' },
//     { name: 'Felipe', start: '09:30', end: '11:00' },
//     { name: 'Cony', start: '18:00', end: '18:30' }
//   ],
//   tuesday: [],
//   wednesday: [
//   	{ name: 'Nicole', start: '11:30', end: '14:00' }
//   ],
//   thursday: [
//   	{ name: 'Alejandro', start: '00:00', end: '00:00' }
//   ],
//   friday: []
// });
