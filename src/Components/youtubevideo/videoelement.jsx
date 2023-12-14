


function VideoElement(props) {
	if (props.name == "Jesse James") {
		return (
			<iframe width="80%" height="400" src="https://www.youtube.com/embed/r4VZsz0lD8w?si=p_AhiTQ6GhnTuZAd&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe >
		);
	}
	else if (props.name == "Butch Cassidy") {
		return (
			<iframe width="560" height="315" src="https://www.youtube.com/embed/58eYo_DJNPY?si=HZNWV-Yatl7tBVMa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		);
	}
	else if (props.name == "John Dilinger") {
		return (
			<iframe width="560" height="315" src="https://www.youtube.com/embed/CI0Hs4Mgub8?si=hMM8-t4MgzugP1Vb&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		);
	}
	else if (props.name == "Willie «The Actor» Sutton") {
		return (
			<iframe width="560" height="315" src="https://www.youtube.com/embed/va0nsd0EBjY?si=cTC5muMamGZYPrfc&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		);
	}
	else if (props.name == "Henry George Starr") {
		return (
			<iframe width="560" height="315" src="https://www.youtube.com/embed/3M4Tez8dZ4c?si=GQUPZ5n3YLa1VlI3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		);
	}


}

export default VideoElement;