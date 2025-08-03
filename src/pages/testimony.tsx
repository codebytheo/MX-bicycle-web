
const Testimony = () => {
  return (
    <div className="bg-neutral-900 min-h-screen px-8 py-10 relative">
      <div className="grid grid-cols-2">
        <div className="w-full h-screen">
          <img src="/img/2.webp" alt="bicycle" className="saturate-150" />
          <div className="mt-8">
            <p className="text-2xl uppercase text-neutral-200 font-semibold text-justify">"I've bought several bikes over the years, but nothing compares to the one I got from MX. The quality is top-notch, the ride is smooth, and the staff truly know their stuff. Highly recommended!"
            </p>
            <p className="text-xl uppercase text-orange-600 font-bold">james, California</p>
          </div>
        </div>
        <div className="w-full place-content-end place-items-end">
          <img src="/img/8.webp" alt="bicycle" className="w-3/4 saturate-150" />
          <div className="w-3/4 flex flex-col mt-8">
            <p className="text-2xl uppercase text-neutral-200 font-semibold text-justify">"As a competitive cyclist, I need a bike that performs under pressure. The team at helped me choose the perfect model, and it's been a game-changer in my training. Light, responsive, and built to last."
            </p>
            <p className="text-xl uppercase text-blue-600 font-bold">Klye, Hamburg</p>
          </div>
        </div>
      </div>
      <p className="absolute right-8 top-10 tracking-widest text-neutral-200 font-semibold">. testimony</p>
    </div>
  )
}

export default Testimony
