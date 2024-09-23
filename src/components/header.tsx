
 export default function Header(){
     return(
        <>
        <nav className="navigation p-0.5">
     <div className="headerContainer flex justify-between mx-20 my-4">
       <div className="logo text-5xl font-bold">SK</div>
         <ul className="list  flex items-center gap-10 ">
           <li className="list1 text-xl">Home</li>
       <li className="list1 text-xl">About Us</li>
       <li className="list1 text-xl">Portfolio</li>
       <li className="list1 text-xl">Contact</li>
      </ul>
       <button className="button p-2 bg-yellow-400 rounded-md text-2xl hover:bg-yellow-600 ">Hire Me</button>
     </div>
     </nav>
     </>
     )
 }