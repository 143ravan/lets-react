const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="p-2 m-2 border-black border-1 border-solid rounded-lg"
          placeholder="name"
        />
        <input
          type="text"
          className="p-2 m-2 border-black border-1 border-solid rounded-lg"
          placeholder="message"
        />
        <button className="p-2 m-2 border-black border-1 border-solid bg-amber-500 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
