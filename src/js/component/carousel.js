import React from "react";
import ImageSlide from "../component/imageSlide.js";
import Arrow from "../component/arrow.js";
import muscovyDuck from "../../../img/MuscovyDuck.jpg";

{
	/* <img src={rigoImage} /> */
}

const imgUrls = [
	"https://youtu.be/Fd3Su5lWJsw",
	"https://download.ams.birds.cornell.edu/api/v1/asset/51036351/large",
	"https://i.ytimg.com/vi/3vvS0SK3Dmc/maxresdefault.jpg",
	"https://opimedia.azureedge.net/-/media/Images/MEN/Editorial/Blogs/Homesteading-and-Livestock/Keeping-Muscovy-Ducks-is-Now-Illegal/ducklings-jpg.jpg?h=329&w=550&la=en&hash=4C87AFF663211D112612317FE03DE320AD0B7CA4"
];

class Carousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentImageIndex: 0
		};

		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}

	previousSlide() {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

		this.setState({
			currentImageIndex: index
		});
	}

	nextSlide() {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index = shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}

	render() {
		const ImageSlide = ({ url }) => {
			const styles = {
				backgroundImage: `url(${url})`,
				backgroundSize: "100%",
				backgroundRepeat: "no-repeat"
			};

			return <div className="image-slide" style={styles} />;
		};

		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />

				<ImageSlide url={imgUrls[this.state.currentImageIndex]} />

				<Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
			</div>
		);
	}
}

export default Carousel;
