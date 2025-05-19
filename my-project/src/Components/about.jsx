

export default function about() {
  return (
    <main>
      <header class="flex justify-between p-5">
        <h1 className="text-3xl font-bold">Readduff</h1>
        <nav className="flex gap-5 mr-32  text-lg">
          <a href="#work">Work</a>
          <a href="#culture">Culture</a>
          <a href="#services">Services</a>
          <a href="#news">News</a>
        </nav>
      </header>
      <hr className="border-gray-300 p-5" />
      <section>
        <h2 className="text-center p-5 m-2 md:bg-black sm:bg-green lg:text-2xl xl:text-4xl 2xl:text">News</h2>
        <p className="text-center text-3xl font-semibold">Exciting events and announcements</p>

        <div className="flex justify-between" >
          <div className="flex gap-5">
            <img src="" alt="" 
            className=" w-30 h-20"/>
            <p>Find us on linkedin</p>
            <p>09.12.2025</p>
          </div>
          <div>
            <a href="#read-more">Read More</a>
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </main>
  );

}