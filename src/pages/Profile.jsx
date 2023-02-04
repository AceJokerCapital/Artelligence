import React, { useState, useEffect } from 'react'
import { Card } from '../componenets';

const Profile = () => {

   //standard


   //state
   const [userPosts, setuserPosts] = useState(null);


   //function
   useEffect(() => {
      fetchUserPost();
      console.log(userPosts);
   }, []);



   const RenderCards = ({ data, title }) => {

      if (data?.length > 0)
         return data.map(post => <Card key={post._id} _id={post._id} name={post.name} prompt={post.prompt} photo={post.photo} isProfile={true} />)
      // above code maps over data gets each posts and then makes a card for each post. A card will consist of the post id and all data of the previous post will be passed into it
      return (
         <h2 className='mt-5 font-bold text-[#9fbf93] text-xl uppercase' >
            {title}
         </h2>
      )

   }


   let user = JSON.parse(localStorage.getItem('user'))


   const fetchUserPost = async () => {

      console.log(user);
      try {

         const response = await fetch('https://artilligence.onrender.com/api/v1/post-x/profile-posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sub: user.sub })
         })


         if (response.ok) {
            const result = await response.json();
            setuserPosts(result.data.reverse());
         }


      } catch (error) {

         console.log(error);

      }


   }



   return (
      <div className='w-full h-full flex flex-col' >

         <div className='flex flex-col w-full h-full ' >
            <div className='flex flex-col p-4 bg-[#809475] w-full gap-3 justify-center items-center mt-[-5vh]' >
               <img className='max-xs:w-20 max-xs:h-20 w-24 h-24 rounded-md mt-6'
                  src={user.picture}
               />

               <h1 className='max-xs:text-[15px] text-[21px] font-bold'>
                  {user.name}
               </h1>

               <div className='bg-[#617868] w-screen p-2 mt-10' >
                  <p className='flex flex-col justify-center items-center' >
                     {
                        userPosts ? (
                           `Total Posts : ${userPosts?.length}`

                        ) : (

                           'Total Posts : ...'
                        )
                     }
                  </p>

               </div>


            </div>

            <div className={'grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 p-4 mt-10 mb-10'} >
               {

                  <RenderCards
                     data={userPosts}
                     title='No posts found'
                     isProfile={true}
                  />


               }
            </div>

         </div>



      </div>
   )
}


export default Profile;