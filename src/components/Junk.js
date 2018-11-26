        {this.state.images.map(el=>{
               	// console.log(el.title)
               	// console.log(el.rating)
               	// //console.log(el._score)
               	// console.log(el.username)
               	// console.log("----------------")
          return (
          	//##image options
          	//***If image options are changed here they must also be changed in state******
          	//downsized_medium
          	//fixed_height
          	//fixed_height_small //what i use
          	//fixed_width
          	//fixed_width_small
          	//original
          	//preview
           	<img
            //SUPER HACKEY
            //don't forget to change this**
           	//id={el.images.original.url} 
           	key={el.id} 
           	onClick={this.handleGifModalOpen} 
           	src={el.images.fixed_width.url} 
           	alt="test"
           	title={el.title}
           	data-big={el.images.original.url}
           	/>
            )
          })}