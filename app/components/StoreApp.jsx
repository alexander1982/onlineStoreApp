import React from 'react';
let createClass = require('create-react-class');

const StoreApp = createClass({
	render() {
		return(
					<div className="grid-y medium-grid-frame">
						<div className="cell shrink header medium-1 medium-cell-block-container my-header">
							<div className="grid-x grid-padding-x">
								<div className="cell">
									A
								</div>
							</div>
						</div>

						<div className="cell large-auto large-cell-block-container">
							<div className="grid-x grid-padding-x">
								<div className="cell large-2 large-cell-block-y first-cell">
								</div>
								<div className="cell large-6 second-cell">
										<div className="cell second-inner-second-cell">
											<div className="grid-y grid-padding-x">
													<div className="slider cell medium-2 hide-for-small-only">
														<div><img src="https://i.warosu.org/data/ck/thumb/0063/30/1426707705826s.jpg"/></div>
														<div><img src="https://img.4plebs.org/boards/pol/thumb/1479/33/1479332097841s.jpg"/></div>
														<div><img src="https://i.warosu.org/data/tg/thumb/0405/59/1434357205701s.jpg"/></div>
														<div><img src="https://jpg.breadberry.com/content/images/thumbs/0101975_beer-mayim-soda-1-liter-pineapple-338-oz_125.jpeg"/></div>
														<div><img src="https://jpg.breadberry.com/content/images/thumbs/0101965_beer-mayim-soda-1-liter-ginger-ale-338-oz_125.jpeg"/></div>
														<div><img src="https://jpg.breadberry.com/content/images/thumbs/0101967_beer-mayim-soda-1-liter-cola-338-oz_125.jpeg"/></div>
														<div><img src="https://i.warosu.org/data/ck/thumb/0074/75/1458695241366s.jpg"/></div>
													</div>
													<div className="cell large-cell-block-y medium-10 padding-top">
														<div className="grid-x grid-margin-x">
															<div className="cell large-3 large-cell-block-y first-cell border-menu">
																<h4>Side menu</h4>
																<ul>
																	<li>Some generic</li>
																	<li>Some generic</li>
																	<li>Some generic</li>
																	<li>Some generic</li>
																	<li>Some generic</li>
																</ul>
															</div>
															<div className="cell large-9 large-cell-block-y first-cell">
																<h4>Independent scrolling left sidebar</h4>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus odio, accumsan id ullamcorper eget, varius nec erat. Nulla facilisi. Donec dui felis, euismod nec finibus vitae, dapibus quis arcu. Maecenas tempor et ipsum quis venenatis. Ut posuere sed augue sit amet efficitur. Sed imperdiet, justo id tempus rhoncus, est est viverra turpis, non vulputate magna lectus et nisl. Pellentesque ultrices porttitor vehicula. Ut aliquet efficitur ligula, a consectetur felis. Proin tristique ut augue nec luctus. Curabitur a sapien pretium, auctor elit a, efficitur erat. Donec tincidunt dui vel velit bibendum euismod. Cras vitae nibh dui. Aliquam erat volutpat. Etiam sit amet arcu a erat efficitur facilisis. Ut viverra dapibus turpis, et ornare justo. Integer in dui cursus, dignissim tortor a, hendrerit risus.</p>

																<p>Suspendisse pulvinar, massa iaculis feugiat lobortis, dolor sapien vestibulum nulla, vel cursus tellus leo in lorem. Aliquam eu placerat urna. Suspendisse sed viverra orci, ut mattis neque. Fusce non ultrices nisi. In sagittis varius mollis. Quisque dolor quam, consectetur eu lacinia ac, ullamcorper vel arcu. Nullam mattis imperdiet nulla sed ornare. Praesent tristique, est id eleifend vestibulum, neque nibh condimentum ex, nec lobortis purus justo a libero. Phasellus id ex ac nunc hendrerit hendrerit. Nullam urna ipsum, rutrum at fringilla vel, venenatis non purus. Maecenas egestas ex vitae venenatis molestie. Ut et odio egestas, accumsan neque et, viverra nisl. Sed faucibus nec nulla sed imperdiet. Fusce quis sem ac urna semper tempor a id elit. Nulla fringilla vitae sapien a vehicula.</p>
															</div>

														</div>
														
													</div>
											</div>
										</div>
								</div>

								<div className="cell large-2 large-cell-block-y third-cell">
									<h2>Independent scrolling right sidebar</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus odio, accumsan id ullamcorper eget, varius nec erat. Nulla facilisi. Donec dui felis, euismod nec finibus vitae, dapibus quis arcu. Maecenas tempor et ipsum quis venenatis. Ut posuere sed augue sit amet efficitur. Sed imperdiet, justo id tempus rhoncus, est est viverra turpis, non vulputate magna lectus et nisl. Pellentesque ultrices porttitor vehicula. Ut aliquet efficitur ligula, a consectetur felis. Proin tristique ut augue nec luctus. Curabitur a sapien pretium, auctor elit a, efficitur erat. Donec tincidunt dui vel velit bibendum euismod. Cras vitae nibh dui. Aliquam erat volutpat. Etiam sit amet arcu a erat efficitur facilisis. Ut viverra dapibus turpis, et ornare justo. Integer in dui cursus, dignissim tortor a, hendrerit risus.</p>

									<p>Suspendisse pulvinar, massa iaculis feugiat lobortis, dolor sapien vestibulum nulla, vel cursus tellus leo in lorem. Aliquam eu placerat urna. Suspendisse sed viverra orci, ut mattis neque. Fusce non ultrices nisi. In sagittis varius mollis. Quisque dolor quam, consectetur eu lacinia ac, ullamcorper vel arcu. Nullam mattis imperdiet nulla sed ornare. Praesent tristique, est id eleifend vestibulum, neque nibh condimentum ex, nec lobortis purus justo a libero. Phasellus id ex ac nunc hendrerit hendrerit. Nullam urna ipsum, rutrum at fringilla vel, venenatis non purus. Maecenas egestas ex vitae venenatis molestie. Ut et odio egestas, accumsan neque et, viverra nisl. Sed faucibus nec nulla sed imperdiet. Fusce quis sem ac urna semper tempor a id elit. Nulla fringilla vitae sapien a vehicula.</p>

									<p>Nullam vestibulum lorem nec lectus egestas, nec ullamcorper diam maximus. Maecenas condimentum, nibh at blandit semper, ex erat tempus magna, id maximus neque velit accumsan nibh. Aenean dignissim lorem eu nisl laoreet vestibulum. Vivamus efficitur et augue vitae tincidunt. Etiam et magna felis. Integer mattis, nisi aliquet scelerisque blandit, ex mi sodales ante, eget accumsan quam magna et ligula. Curabitur id tristique leo. Proin rutrum mi vitae enim rhoncus, at cursus neque eleifend. Integer ultrices volutpat tellus ac porta. Fusce sollicitudin venenatis lacinia. Fusce ante lorem, gravida semper varius non, pharetra non erat. Sed dapibus arcu turpis, ac sollicitudin nibh lacinia vel. Nullam at enim porta, luctus metus sit amet, rutrum odio. Cras tempor enim vel pellentesque sollicitudin. Maecenas ullamcorper, sem non accumsan volutpat, neque tortor pulvinar orci, ut ultrices ligula lorem ut risus.</p>

									<p>Aliquam facilisis, nibh eget posuere suscipit, arcu sapien iaculis odio, in molestie dolor lectus vitae sem. Cras id nunc mollis mi rutrum dapibus. Quisque rutrum a augue at scelerisque. Praesent faucibus ac enim vitae gravida. Sed et sodales elit. Duis magna lectus, interdum sit amet metus a, sagittis varius magna. Proin nibh lectus, egestas a luctus ut, dapibus et enim. Curabitur fringilla ipsum vitae nunc imperdiet consectetur eget non neque. Suspendisse ultricies odio quis lorem vulputate, ac vulputate turpis feugiat. Maecenas posuere rhoncus orci, in ornare velit suscipit tempor. Curabitur pretium nisl id lorem placerat consequat. In quis quam eros. Nam mattis elit eu quam sagittis, in varius erat tempor.</p>

									<p>Fusce felis magna, pellentesque eget mollis a, rutrum id eros. Curabitur auctor varius arcu a consequat. Phasellus quis pulvinar enim, eu ultricies justo. Pellentesque risus libero, dapibus at erat ultricies, gravida varius erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla tempus, justo ut laoreet mollis, nunc tellus convallis urna, vel pretium dui velit eget ligula. Aliquam semper sed nulla a molestie. Maecenas at egestas massa, vitae aliquam mi. Fusce nec sem egestas, pretium lacus non, tincidunt sapien. Sed tristique odio at ultricies vulputate. Integer et convallis augue, eu aliquam enim. Mauris ut faucibus diam. Donec vulputate nunc sed congue accumsan. Etiam lobortis nisi quis lacinia pharetra.</p>
								</div>
							</div>
							<div className="cell large-2 large-cell-block-y first-cell">
							</div>
						</div>
						<div className="grid-x grid-padding-x">
							<div className="cell shrink-footer padding fourth-cell">
								<h3>Footer</h3>
							</div>
						</div>
					</div>
		)
	}
                             });

module.exports = StoreApp;