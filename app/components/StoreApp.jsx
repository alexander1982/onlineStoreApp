import React from 'react';
let createClass = require('create-react-class');
let $ = require('jquery');

const StoreApp = createClass({
	                             render() {
		                             return (
		                           <div>
		                             <div className="grid-y grid-frame">
			                             <div className="header cell medium-2 shrink background-img"></div>
			                             <div className="cell shrink header medium-cell-block-container">
				                             <div className="header cell hide-for-medium-only hide-for-small-only">
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
			                             </div>

			                             <div className="grid-x grid-margin-x">
				                             <div className="medium-1 cell"></div>
				                             <div className="medium-2 cell medium-cell-block-container ">
						                             <div className="medium-auto cell hide-for-medium-only hide-for-small-only">
							                             <button className="button expanded right-menu" type="button">First button</button>
							                             <button className="button expanded right-menu" type="button">Second button</button>
							                             <button className="button expanded right-menu" type="button">Third button</button>
							                             <button className="button expanded right-menu" type="button">Fourth button</button>
							                             <button className="button expanded right-menu" type="button">Fifth button</button>
						                             </div>
				                             </div>

				                             <div className="large-6 medium-12 small-12 cell medium-cell-block-container">
					                            <div className="grid-y">
						                            <div className="medium-1 cell">
							                            <div className="input-group">
								                            <input className="input-group-field" type="text" placeholder="Search item by name"/>
									                            <div className="input-group-button">
										                            <input type="submit" className="button" value="Submit"/>
									                            </div>
							                            </div>
						                            </div>

						                            <div className="cell medium-cell-block-y body-height">
                                         <div className="grid-x grid-padding-y grid-padding-x product border-menu">
	                                         <div className="cell medium-3 small-6">
			                                         <img className="product-img thumbnail" src="https://i.warosu.org/data/ck/img/0056/48/1406749056589.jpg" alt="Photo of Uranus."/>
	                                         </div>
	                                         <div className="medium-7 cell small-6">
		                                         <div className="grid-y">
			                                         <div className="medium-1 cell">
				                                         <p>Name of the product  alalalallalal alalalla</p>
				                                         <p>ILS 7.5</p>
			                                         </div>
		                                         </div>
	                                         </div>
                                       </div>

							                            <div className="grid-x grid-padding-y grid-padding-x product border-menu">
								                            <div className="cell medium-3 small-6">
									                            <img className="product-img thumbnail" src="https://i.warosu.org/data/ck/img/0056/48/1406749056589.jpg" alt="Photo of Uranus."/>
								                            </div>
								                            <div className="medium-7 cell small-6">
									                            <div className="grid-y">
										                            <div className="medium-1 cell">
											                            <p>Name of the product  alalalallalal alalalla</p>
											                            <p>ILS 7.5</p>
										                            </div>
									                            </div>
								                            </div>
							                            </div>

							                            <div className="grid-x grid-padding-y grid-padding-x product border-menu">
								                            <div className="cell medium-3 small-6">
									                            <img className="product-img thumbnail" src="https://i.warosu.org/data/ck/img/0056/48/1406749056589.jpg" alt="Photo of Uranus."/>
								                            </div>
								                            <div className="medium-7 small-6 cell">
									                            <div className="grid-y">
										                            <div className="medium-1 cell">
											                            <p>Name of the product  alalalallalal alalalla</p>
											                            <p>ILS 7.5</p>
										                            </div>
									                            </div>
								                            </div>
							                            </div>

							                            <div className="grid-x grid-padding-y grid-padding-x product border-menu">
								                            <div className="cell medium-3 small-6">
									                            <img className="product-img thumbnail" src="https://i.warosu.org/data/ck/img/0056/48/1406749056589.jpg" alt="Photo of Uranus."/>
								                            </div>
								                            <div className="medium-7 small-6 cell">
									                            <div className="grid-y">
										                            <div className="medium-1 cell">
											                            <p>Name of the product  alalalallalal alalalla</p>
											                            <p>ILS 7.5</p>
										                            </div>
									                            </div>
								                            </div>
							                            </div>

							                            <div className="grid-x grid-padding-y grid-padding-x product border-menu">
								                            <div className="cell medium-3 small-6">
									                            <img className="product-img thumbnail" src="https://i.warosu.org/data/ck/img/0056/48/1406749056589.jpg" alt="Photo of Uranus."/>
								                            </div>
								                            <div className="medium-7 small-6 cell">
									                            <div className="grid-y">
										                            <div className="medium-1 cell">
											                            <p>Name of the product  alalalallalal alalalla</p>
											                            <p>ILS 7.5</p>
										                            </div>
									                            </div>
								                            </div>
							                            </div>

						                            </div>
					                            </div>
				                             </div>

				                             <div className="medium-auto cell hide-for-medium-only">
					                             <div className="grid-y grid-padding-y">
						                             <div className="slider cell medium-3 hide-for-small-only padding-for-slider-container body-border">
							                             <div className="thumbnail"><img src="https://i.warosu.org/data/ck/img/0056/48/1406749056589.jpg"/>
							                             </div>
							                             <div className="thumbnail"><img src="https://i.warosu.org/data/ck/img/0040/04/1353091314525.jpg"/>
							                             </div>
							                             <div className="thumbnail"><img src="https://i.warosu.org/data/ck/thumb/0084/53/1484087002126s.jpg"/>
							                             </div>
							                             <div className="thumbnail"><img src="https://i.warosu.org/data/ck/img/0071/39/1449352067247.jpg"/>
							                             </div>
							                             <div className="thumbnail"><img src="https://i.warosu.org/data/ck/img/0052/51/1394166286637.jpg"/>
							                             </div>
						                             </div>
					                             </div>
					                             <div className="cell medium-auto medium-cell-block-y hide-for-medium-only hide-for-small-only">
						                             <h3>Filters:</h3>
                                         <fieldset>
	                                         <label>Bla bla:</label>
	                                         <input type="checkbox" id="checkbox1"/><label for="checkbox1">Filter this</label><br/>
	                                         <input type="checkbox" id="checkbox2"/><label for="checkbox2">Filter this</label><br/>
	                                         <input type="checkbox" id="checkbox3"/><label for="checkbox3">Filter this</label><br/>
	                                         <label>Delivery options:</label>
	                                         <input type="checkbox" id="checkbox4"/><label for="checkbox4">Free international shipping</label>
                                         </fieldset>
						                             <form>
							                             <label>Filter by price:</label>
							                             <div className="grid-x grid padding-y">
								                             <div className="medium-2 cell">
									                             <label for="from" className="text-left">From:</label>
								                             </div>
								                             <div className="medium-2 cell">
									                             <input type="text" id="from"/>
								                             </div>
								                             <div className="medium-1 cell">
									                             <label for="to" className="text-left">To:</label>
								                             </div>
								                             <div className="medium-2 cell">
									                             <input type="text" id="to"/>
								                             </div>
								                             <div className="medium-3 cell">
									                             <button type="submit" className="button tiny authorize">>>></button>
								                             </div>
							                             </div>
						                             </form>
					                             </div>
				                             </div>

				                             <div className="medium-1 cell"></div>

			                             </div>

		                             </div>

		                           </div>
		                             )
	                             }
                             });

module.exports = StoreApp;