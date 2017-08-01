import React from 'react';
let createClass = require('create-react-class');

const StoreApp = createClass({
	                             render() {
		                             return(
		                              <div className="grid-y grid-frame">
			                              <div className="medium-auto medium-cell-block-container cell">
					                              <div className="header cell shrink background-img"></div>
				                               <div className="header cell shrink">
					                               <div className="grid-x">
							                               <div className="medium-1 cell"></div>
							                               <div className="medium-10 cell">
								                               <div className="grid-x align-middle">
										                            <div className="medium-1 cell link-mix">First button</div>
								                                <div className="medium-1 cell link-mix">Second button</div>
									                              <div className="medium-1 cell link-mix">Third button</div>
									                              <div className="medium-1 cell link-mix">Fourth button</div>
									                               <div className="medium-1 cell link-mix">Fifth button</div>
									                               <div className="medium-5 cell"></div>
									                               <div className="medium-2 cell">
										                               <div className="grid-x grid-padding-y">
											                               <div className="medium-6 cell"></div>
											                               <div className="medium-3 cell">
												                               <button type="button" className="button tiny">Signin</button>
											                               </div>

											                               <div className="medium-3 cell">
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
																                              <input className="input-group-field" type="text" placeholder="Type the name of the product"/>
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
													                              <p>Mofo</p>
												                              </div>
											                              </div>
										                              </div>
										                              <div className="medium-2 cell">
											                              <h3>Right menu</h3>
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