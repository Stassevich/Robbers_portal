import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Timeline(props) {
	return (
		<VerticalTimeline>
			{props.robber.text1 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date="2008 - 2010"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
					User Experience, Visual Design
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text2 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date="2008 - 2010"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
					User Experience, Visual Design
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text3 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date="2008 - 2010"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
					User Experience, Visual Design
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text4 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date="2008 - 2010"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
					User Experience, Visual Design
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text5 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date="2008 - 2010"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
					User Experience, Visual Design
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text6 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date="2008 - 2010"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
					User Experience, Visual Design
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text7 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date="2008 - 2010"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
					User Experience, Visual Design
				</p>
			</VerticalTimelineElement>)
			}
			{props.robber.text8 && (<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
				date="2008 - 2010"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
					User Experience, Visual Design
				</p>
			</VerticalTimelineElement>)
			}
		</VerticalTimeline>
	);
}

export default Timeline;