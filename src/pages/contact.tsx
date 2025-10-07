
const Contact = () => {
  return (
    <div id="contact" className="bg-neutral-900 h-screen px-8 py-10 relative overflow-hidden">
      <h1 className="text-neutral-200 text-center uppercase text-8xl font-bold">contact-us</h1>
      <form action="" className="bg-neutral-900 w-1/3 mx-auto p-4 flex flex-col gap-4 mt-10 rounded">
        <div>
          <input type="email" id="email" placeholder="email" className="px-4 py-2 w-full rounded border-2 border-neutral-700 text-neutral-200" />
        </div>
        <div>
          <textarea name="message" id="message" placeholder="message" rows={10} className="w-full border-2 border-neutral-700 rounded px-4 py-2 text-neutral-200"></textarea>
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-neutral-200 rounded cursor-pointer hover:bg-blue-700 font-semibold">send</button>
      </form>
    </div>
  )
}

export default Contact
