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
												                             <li><button type="button" className="button">First link</button></li>
												                             <li><button type="button" className="button">Second link</button></li>
												                             <li><button type="button" className="button">Third link</button></li>
												                             <li><button type="button" className="button">Fourth link</button></li>
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
											                             <button type="button" className="button tiny authorize">Signin</button>
										                             </div>

										                             <div className="medium-3 cell padding-button-container">
											                             <button type="button" className="button tiny authorize">Login</button>
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

						                             <div className="medium-10 cell">
							                             <div className="grid-x">
								                             <div className="medium-2 cell">
									                             <div className="grid-y grid-padding-x grid-padding-y grid-margin-y">
										                             <div className="medium-5 cell text-center border-menu">
											                             <button className="button expanded right-menu" type="button">First button</button>
											                             <button className="button expanded right-menu" type="button">Second button</button>
											                             <button className="button expanded right-menu" type="button">Third button</button>
											                             <button className="button expanded right-menu" type="button">Fourth button</button>
											                             <button className="button expanded right-menu" type="button">Fifth button</button>
										                             </div>
										                             <div className="medium-5 cell border-menu">
											                             <fieldset>
												                             <legend>Filters</legend>
												                             <div>
													                             <input id="checkbox1" type="checkbox"/><label for="checkbox1">Filter it</label>
													                             <input id="checkbox2" type="checkbox"/><label for="checkbox2">Filter it 2</label>
												                             </div>
												                             <div>
													                             <input id="checkbox3" type="checkbox"/><label for="checkbox3">Filter it 3</label>
													                             <input id="checkbox4" type="checkbox"/><label for="checkbox4">Filter it 3</label>
												                             </div>
												                             <label>Search by price</label>
												                             <div className="grid-x grid-padding-x grid-padding-x">
													                             <div className="medium-6 cell">
														                             <span>From:</span>
													                             </div>
													                           <div className="medium-6 cell padding-left-none">
														                           <span>To:</span>
												                             </div>

												                             </div>
												                             <div className="input-group">
													                             <input className="input-group-field filters" type="number"/>
													                             <input className="input-group-field filters" type="number"/>
												                             </div>
												                             <div className="input-group-button">
													                             <input type="submit" className="button small" value="Submit"/>
												                             </div>
											                             </fieldset>
										                             </div>
									                             </div>
								                             </div>

								                             <div className="cell medium-auto cell-block-container body-border">
									                             <div className="grid-y grid-padding-x grid-padding-y">
										                             <div className="cell medium-4">
											                             <div className="grid-x">
												                             <div className="medium-4 cell">
													                             <h3>Search item by name:</h3>
												                             </div>
												                             <div className="cell auto">
													                             <div className="input-group">
														                             <input className="input-group-field" type="text"
														                                    placeholder="Type the name of the product"/>
														                             <div className="input-group-button">
															                             <input type="submit" className="button search-submit" value="Submit"/>
														                             </div>
													                             </div>
												                             </div>
											                             </div>
										                             </div>

										                             <div className="cell medium-auto medium-cell-block-container">
											                             <div className="grid-x grid-padding-y">

													                             <div className="cell medium-cell-block-y body-height">
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
														                             <p>saafdfsdfsdfsdfsdfsffdsdfsddbcvbxbzkvDlcAS:UCb;z:Dioidclzxm zjvoisnlm 'D'pcmzxl </p>
													                             </div>

											                             </div>
										                             </div>

									                             </div>
								                             </div>
								                             <div className="medium-2 cell  medium-cell-block-container border-menu">
									                             <div className="grid-y grid-padding-x">
										                             <div className="slider cell medium-4  medium-cell-block-yhide-for-small-only padding-for-slider-container">
											                             <div><img src="https://i.warosu.org/data/ck/img/0056/48/1406749056589.jpg"/>
											                             </div>
											                             <div><img src="https://i.warosu.org/data/ck/img/0040/04/1353091314525.jpg"/>
											                             </div>
											                             <div><img src="https://i.warosu.org/data/ck/thumb/0084/53/1484087002126s.jpg"/>
											                             </div>
											                             <div><img src="https://i.warosu.org/data/ck/img/0071/39/1449352067247.jpg"/>
											                             </div>
											                             <div><img src="https://i.warosu.org/data/ck/img/0052/51/1394166286637.jpg"/>
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