

import axios from "axios"



const Home = () => {

   

    async function items(){
        try{
          const response=await axios.get("https://dummyjson.com/products")
          console.log(response.data.products)
          console.log("hello")
         
        }
        catch(err){
         console.log(err)
        }
    }
    items()

  





    return (
        <div>
            <div className="item-heading">
                All Items
            </div>


            <div className="items">







                <div className="item">
                    <div className="item-back">
           <img src="#" alt="item-image"/>
           
                    </div>



                    <div className="price">
                        <p>Title:</p>
                        <p>Price:$100</p>
                    </div>


                    <div className="add">
                        <a>Add To Cart</a>
                    </div>

                </div>
                <div className="item">

                </div>
                <div className="item">

                </div>
                <div className="item">

                </div>



            </div>



        </div>

    )
}


export default Home