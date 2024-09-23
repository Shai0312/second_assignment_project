
//  {code with css}

 import Header from "@/components/header";
 export default function Home() {
   return(
    <>
    <Header />
 <hr className="line border-t-2" />
     <div className="homeContainer"><img src="https://img.freepik.com/premium-photo/3d-illustration-teenage-girl-with-laptop-books_1057-40971.jpg"  alt="cartoonic girl image" /></div>
      <p className="childContainer"><span className="text-3xl">Hey there,</span> <br />I am Shaista
     <br />  
        a <span className="color">Next.js developer</span>. <br />I create modern and responsive websites<br/>
       with Next.js...</p>
      
     </>
   )
 }
