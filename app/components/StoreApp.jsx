import React from 'react';
let createClass = require('create-react-class');
let $ = require('jquery');

const StoreApp = createClass({
	                             getInitialState() {
		                             return {
			                             buttonClass: ''
		                             }
	                             },
	                             onMouseOver(e) {
		                             $('div.link-mix').hover(() => {
			                             $(this).removeClass('link-mix-hover')
		                             });
	                             },
	                             onMouseOut() {
		                             $('div.link-mix').hover(() => {
			                             $(this).removeClass('link-mix-hover')
		                             });
	                             },
	                             //onHover() {
	                             //$('div.menu-link').hover(() => {
	                             //	$(this).addClass('link-mix-hover')
	                             //},() => {
	                             //	$(this).removeClass('link-mix-hover');
	                             //});
	                             //},
	                             render() {
		                             const {buttonClass} = this.state;
		                             return (
		                             <div className="grid-y grid-frame">
			                             <div className="medium-auto medium-cell-block-container cell">
				                             <div className="header cell shrink background-img"></div>
				                             <div className="header cell shrink">
					                             <div className="grid-x">
						                             <div className="medium-1 cell"></div>
						                             <div className="medium-10 cell">
							                             <div className="grid-x align-middle">
								                             <div className="medium-7 cell">
									                             <div className="top-bar">
										                             <div className="top-bar-left">
											                             <ul className="dropdown menu" data-dropdown-menu>
												                             <li><a href="#">First link</a></li>
												                             <li><a href="#">Second link</a></li>
												                             <li><a href="#">Third link</a></li>
												                             <li><a href="#">Fourth link</a></li>
											                             </ul>
										                             </div>
									                             </div>
								                             </div>

								                             <div className="medium-3 cell"></div>
								                             <div className="medium-2 cell">
									                             <div className="grid-x grid-padding-y">
										                             <div className="medium-3 cell">
											                             <i
											                             className="fi-list-bullet align-center icon-medium icon-container-setup"></i>
										                             </div>
										                             <div className="medium-3 cell">
											                             <i
											                             className="fi-shopping-cart align-center icon-medium icon-container-setup"></i>
										                             </div>
										                             <div className="medium-3 cell padding-button-container">
											                             <button type="button" className="button tiny">Signin</button>
										                             </div>

										                             <div className="medium-3 cell padding-button-container">
											                             <button type="button" className="button tiny">Login</button>
										                             </div>
									                             </div>
								                             </div>
							                             </div>
						                             </div>

					                             </div>
				                             </div>
				                             <div className="cell medium-auto">
					                             <div className="grid-x">
						                             <div className="medium-1 cell"></div>


						                             <div className="medium-10 cell background-pink">
							                             <div className="grid-x">

								                             <div className="medium-2 cell border-menu">
									                             <div className="grid-y grid-padding-x grid-padding-y">
										                             <div className="medium-8 cell background-blue">
											                             <p>Side menu</p>
											                             <p>Side menu</p>
											                             <p>Side menu</p>
											                             <p>Side menu</p>
										                             </div>
									                             </div>
								                             </div>

								                             <div className="medium-8 cell">
									                             <div className="grid-y grid-padding-x grid-padding-y">
										                             <div className="medium-1 cell border-bottom">
											                             <div className="grid-x">
												                             <div className="medium-4 cell">
													                             <h3>Search item by name:</h3>
												                             </div>
												                             <div className="cell auto">
													                             <div className="input-group">
														                             <input className="input-group-field" type="text"
														                                    placeholder="Type the name of the product"/>
														                             <div className="input-group-button">
															                             <input type="submit" className="button" value="Submit"/>
														                             </div>
													                             </div>
												                             </div>
											                             </div>
										                             </div>
										                             <div className="cell medium-auto medium-cell-block-container">
											                             <p>Mofo</p>
											                             <p>Mofo</p>
											                             <p>Mofo</p>
										                             </div>
									                             </div>
								                             </div>
								                             <div className="medium-2 cell">
									                             <div className="grid-y grid-padding-x">
										                             <div
										                             className="slider cell medium-4 hide-for-small-only padding-for-slider-container">
											                             <div><img
											                             src="https://i.warosu.org/data/ck/img/0056/48/1406749056589.jpg"/>
											                             </div>
											                             <div><img
											                             src="https://i.warosu.org/data/ck/img/0040/04/1353091314525.jpg"/>
											                             </div>
											                             <div><img
											                             src="https://i.warosu.org/data/ck/thumb/0084/53/1484087002126s.jpg"/>
											                             </div>
											                             <div><img
											                             src="https://i.warosu.org/data/ck/img/0071/39/1449352067247.jpg"/>
											                             </div>
											                             <div><img
											                             src="https://i.warosu.org/data/ck/img/0052/51/1394166286637.jpg"/>
											                             </div>
										                             </div>
									                             </div>
								                             </div>
							                             </div>
						                             </div>

						                             <div className="medium-1 cell"></div>
					                             </div>
				                             </div>
			                             </div>

			                             <div className="cell shrink footer background-blue">
				                             <h3>Some footer</h3>
			                             </div>

		                             </div>
		                             )
	                             }
                             });

module.exports = StoreApp;