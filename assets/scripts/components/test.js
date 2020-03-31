js.header = js.model.extend( {
	                             $header     : null,
	                             $sub_header : null,
	                             active      : 0,
	                             hover       : 0,
	                             show        : 0,
	                             y           : 0,
	                             opacity     : 1,
	                             direction   : 'down',
	                             events      : {
		                             ready                : 'ready',
		                             scroll               : 'scroll',
		                             'mouseenter #header' : 'mouseenter',
		                             'mouseleave #header' : 'mouseleave'
	                             },
	                             ready       : function () {
		                             this.$header = e( '#header' ),
			                             this.$sub_header = e( '#sub-header' ),
			                             this.active = 1
	                             },
	                             mouseenter  : function () {
		                             var t = e( window ).scrollTop();
		                             this.hover = 1,
			                             this.opacity = 1,
			                             this.show = t,
			                             this.$header.stop().animate( { opacity : 1 }, 250 )
	                             },
	                             mouseleave  : function () {
		                             this.hover = 0
	                             },
	                             scroll      : function () {
		                             if ( this.active ) {
			                             var t = e( window ).scrollTop(),
			                                 o = t >= this.y ? 'down' : 'up',
			                                 n = o !== this.direction,
			                                 i = t - this.y,
			                                 s = this.$sub_header.outerHeight();
			                             clearTimeout( this.t ),
			                             t < 70 && this.$header.removeClass( '-white' ),

			                             n && ( 0 == this.opacity && 'up' == o
			                                    ? ( this.show = t, t < s ? this.show = 0 : this.show -= 70 )
			                                    : 1 == this.opacity && 'down' == o && ( this.show = t ),


				                             this.show = Math.max( 0, this.show ) ),

			                             this.$header.hasClass( '-open' ) && ( this.show = t ),
			                             this.hover && ( this.show = t );
			                             var r = t - this.show;
			                             r = Math.max( 0, r );


			                             var a = ( 70 - r ) / 70;
			                             this.$header.css( 'opacity', a ),
				                             t > s
				                             ? this.$header.addClass( '-white' )
				                             : 0 == a && this.$header.removeClass( '-white' ),
				                             this.y = t, this.direction = o, this.opacity = a

		                             }
	                             }
                             } )
