import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Timeline(props) {
	return (
		<VerticalTimeline>
			{props.robber.text1 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date={props.robber.date1}
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h4 className="vertical-timeline-element-subtitle">{props.robber.title1}</h4>
				<p>
					{props.robber.text1}
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text2 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date={props.robber.date2}
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h4 className="vertical-timeline-element-subtitle">{props.robber.title2}</h4>
				<p>
					{props.robber.text2}
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text3 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date={props.robber.date3}
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h4 className="vertical-timeline-element-subtitle">{props.robber.title3}</h4>
				<p>
					{props.robber.text3}
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text4 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date={props.robber.date4}
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h4 className="vertical-timeline-element-subtitle">{props.robber.title4}</h4>
				<p>
					{props.robber.text4}
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text5 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date={props.robber.date5}
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h4 className="vertical-timeline-element-subtitle">{props.robber.title5}</h4>
				<p>
					{props.robber.text5}
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text6 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date={props.robber.date6}
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h4 className="vertical-timeline-element-subtitle">{props.robber.title6}</h4>
				<p>
					{props.robber.text6}
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text7 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date={props.robber.date7}
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h4 className="vertical-timeline-element-subtitle">{props.robber.title7}</h4>
				<p>
					{props.robber.text7}
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text8 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date={props.robber.date8}
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h4 className="vertical-timeline-element-subtitle">{props.robber.title8}</h4>
				<p>
					{props.robber.text8}
				</p>
			</VerticalTimelineElement>)
			}
		</VerticalTimeline>
	);
}

export default Timeline;