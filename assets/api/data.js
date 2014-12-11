var pageUrl = [
	{
		urlTitle : 'Google',
		urlPath : 'http://google.com'
	},
	{
		urlTitle : 'Yahoo',
		urlPath : 'http://yahoo.com'
	},
	{
		urlTitle : 'Hotmail',
		urlPath : 'http://hotmail.com'
	},
	{
		urlTitle : 'Facebook',
		urlPath : 'http://facebook.com'
	}
];

var customerData = [
	{
		id : 1, 
		joined : '2009-12-02', 
		name : 'John', 
		age : '39', 
		city : 'Hong Kong', 
		subscribe : true,
		dropNote : 'Lorem ipsum dolor sit amet', 
		orders : [
			{
				id : 1, 
				product : 'shoes', 
				total : 9.0654
			},
			{
				id : 1, 
				product : 'double a papaer', 
				total : 64.033
			},
			{
				id : 1, 
				product : 'water bottle', 
				total : 9.0654
			},
			{
				id : 1, 
				product : 'basket', 
				total : 9.0654
			}
		]
	},
	{
		id : 2, 
		joined : '2005-11-12', 
		name : 'Alan', 
		age : '21', 
		city : 'Hong Kong', 
		subscribe : false,
		dropNote : 'consectetur adipiscing elit. Duis in quam',
		orders : [
			{
				id : 3, 
				product : 'tee', 
				total : 9.0654
			},
			{
				id : 2, 
				product : 'brwoser', 
				total : 9.0654
			},
			{
				id : 2, 
				product : 'sample', 
				total : 9.0654
			},
			{
				id : 2, 
				product : 'song', 
				total : 9.0654
			},
			{
				id : 2, 
				product : 'dubstep', 
				total : 9.0654
			}
		]
	},
	{
		id : 3, 
		joined : '2011-12-02', 
		name : 'peter', 
		age : '32', 
		city : 'US', 
		subscribe : true,
		dropNote : 'ipsum. Vestibulum ante ipsum primis in faucibus orci luctus',
		orders : [
			{
				id : 3, 
				product : 'shoes', 
				total : 9.0654
			},
			{
				id : 34, 
				product : 'song', 
				total : 9.0654
			},
			{
				id : 80, 
				product : 'dubstep', 
				total : 9.0654
			}
		]
	},
	{
		id : 4, 
		joined : '2007-12-02', 
		name : 'Bitch', 
		age : '11', 
		city : 'Thailand', 
		subscribe : true,
		dropNote : 'et ultrices posuere cubilia Curae; Morbi ',
		orders : [
			{
				id : 4, 
				product : 'shoes', 
				total : 9.0654
			}
		]
	},
	{
		id : 5, 
		joined : '2007-02-12', 
		name : 'Mami', 
		age : '68', 
		city : 'Taiwan', 
		subscribe : true,
		dropNote : 'Finibus felis sit amet, lacinia metus.',
		orders : [
			{
				id : 5, 
				product : 'shoes', 
				total : 9.0654
			},
			{
				id : 2, 
				product : 'dubstep', 
				total : 9.0654
			}
		]
	},
	{
		id : 6, 
		joined : '2007-12-22', 
		name : 'Wood', 
		age : '45', 
		city : 'Africa', 
		subscribe : true,
		dropNote : 'Maecenas porttitor et tortor',
		orders : [
			{
				id : 6, 
				product : 'shoes', 
				total : 9.0654
			}
		]
	},
	{
		id : 7, 
		joined : '2007-05-12', 
		name : 'Crazy', 
		age : '22', 
		city : 'Korea', 
		subscribe : true,
		dropNote : 'Praesent eu dui vestibulum purus congue aliquet',
		orders : [
			{
				id : 7, 
				product : 'shoes', 
				total : 9.0654
			}
		]
	},
	{
		id : 8, 
		joined : '1992-04-22', 
		name : 'legs', 
		age : '56', 
		city : 'Japan', 
		subscribe : true,
		dropNote : 'Cras elementum eros quis magna eleifend',
		orders : [
			{
				id : 8, 
				product : 'shoes', 
				total : 9.0654
			},
			{
				id : 5423, 
				product : 'double cups', 
				total : 324.54
			},
			{
				id : 76, 
				product : 'Pork', 
				total : 73.54
			}
		]
	},
	{
		id : 9, 
		joined : '2002-02-15', 
		name : 'double bet', 
		age : '21', 
		city : 'Canada', 
		subscribe : true,
		dropNote : 'Curabitur quis accumsan risus. Phasellus tempus sit',
		orders : [
			{
				id : 9, 
				product : 'shoes', 
				total : 9.0654
			}
		]
	},
	{
		id : 10, 
		joined : '2003-03-29', 
		name : 'drink', 
		age : '43', 
		city : 'Taibei', 
		subscribe : true,
		dropNote : 'Mauris dapibus augue diam, vitae alique',
		orders : [
			{
				id : 10, 
				product : 'shoes', 
				total : 9.0654
			}
		]
	}, 
	{
		id : 11, 
		joined : '1989-03-25', 
		name : 'water', 
		age : '34', 
		city : 'where', 
		subscribe : true,
		dropNote : 'Gravida sed tristique ut, mattis eget libero. Cras sapien nisl, venenatis sed cursus ut',
		orders : [
			{
				id : 11, 
				product : 'shoes', 
				total : 9.0654
			}
		]
	}, 
	{
		id : 12, 
		joined : '2002-04-23', 
		name : 'orange', 
		age : '12', 
		city : 'taipei', 
		subscribe : true,
		dropNote : 'Donec elit mauris, varius quis felis luctus, tristique porttitor nisi.',
		orders : [
			{
				id : 12, 
				product : 'shoes', 
				total : 9.0654
			}
		]
	}, 
	{
		id : 13, 
		joined : '1963-06-12', 
		name : 'egg', 
		age : '67', 
		city : 'Beijin', 
		subscribe : true,
		dropNote : 'euismod condimentum turpis. Donec sed',
		orders : [
			{
				id : 13, 
				product : 'shoes', 
				total : 9.0654
			}
		]
	}, 
	{
		id : 14, 
		joined : '2033-02-13', 
		name : 'drone', 
		age : '52', 
		city : 'China', 
		subscribe : true,
		dropNote : 'Phasellus eu nisl id metus feugiat fringilla. Ut libero elit, laoreet in velit et',
		orders : [
			{
				id : 14, 
				product : 'shoes', 
				total : 9.0654
			},
			{
				id : 3232, 
				product : 'cup', 
				total : 3.23
			}
		]
	},
	{
		id : 15, 
		joined : '2033-02-13', 
		name : 'Kwan', 
		age : '82', 
		city : 'Tokyo', 
		subscribe : true,
		dropNote : 'Ut libero elit, laoreet in velit et, euismod condimentum turpis.',
		orders : []
	},
	{
		id : 16, 
		joined : '2033-02-13', 
		name : 'sexy', 
		age : '46', 
		city : 'Tokyo', 
		subscribe : true,
		dropNote : 'Duis ut justo cursus, eleifend augue et, posuere odio. Cras et justo id massa',
		orders : [
			{
				id : 16, 
				product : 'snowboard', 
				total : 32.0654
			}
		]
	},
	{
		id : 17, 
		joined : '2033-02-13', 
		name : 'cable', 
		age : '46', 
		city : 'Triple', 
		subscribe : true,
		dropNote : 'et mollis est mollis. Aliquam et tellus urna',
		orders : [
			{
				id : 17, 
				product : 'bbq pork', 
				total : 12.354
			}
		]
	},
	{
		id : 18, 
		joined : '2013-01-13', 
		name : 'sexy', 
		age : '21', 
		city : 'Somwhere', 
		subscribe : true,
		dropNote : 'Nunc sed egestas nunc. Ut in sem aliquam urna laoreet laoreet at quis enim. Suspendisse sagittis ligula',
		orders : [
			{
				id : 17, 
				product : 'Tools', 
				total : 132.358349843
			}
		]
	},
	{
		id : 19, 
		joined : '1932-11-16', 
		name : 'Ray', 
		age : '21', 
		city : 'Brooklyn', 
		subscribe : true,
		dropNote : 'Mauris at quam purus. Integer vehicula odio sed quam tempor ultricies',
		orders : [
			{
				id : 098234, 
				product : 'Keyword', 
				total : 1341.34
			},
			{
				id : 6523, 
				product : 'Meta', 
				total : 255.7834356
			},
			{
				id : 79542, 
				product : 'Taggers', 
				total : 34.357
			}
		]
	},
	{
		id : 20, 
		joined : '1995-10-04', 
		name : 'Chocky', 
		age : '13', 
		city : 'BC', 
		subscribe : true,
		dropNote : 'Etiam euismod facilisis magna',
		orders : [
			{
				id : 4527, 
				product : 'Double D', 
				total : 1341.34
			},
			{
				id : 9836543, 
				product : 'Extra Small', 
				total : 255.7834356
			},
			{
				id : 87045, 
				product : 'Medium', 
				total : 34.357
			}
		]
	}
];