const Contact = () => {
    return (
        <section className="min-h-screen bg-[#dcf3f0] py-20">
            <div className="container mx-auto px-4">
                
                <div className="text-center mb-10 my-8">
                    <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
                    <p className="text-gray-500 my-4 text-sm max-w-xl mx-auto">
                        This is just a simple text made for this unique and awesome template, you can replace it with any text.
                    </p>
                </div>

                <div className="flex  lg:flex-row items-center justify-center  mt-10">
                    <div className="w-full md:w-[90%] lg:w-[400px] bg-white p-6 rounded-xl shadow-md">
                        <form className="space-y-4">
                            
                            <div className="col-span-6">
                                <label className="block text-sm md:lg-cols-2 text-gray-600 mb-1">Your Name</label>
                                <input type="text"   placeholder="Name"  className="w-full p-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none"/>
                                <label className="block text-sm text-gray-600 mb-1">Your Email</label>
                                <input  type="email"  placeholder="Email"  className="w-full p-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none" />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Subject</label>
                                <input  type="text" placeholder="Subject"  className="w-full p-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none"  />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Message</label>
                                <textarea  placeholder="Message"   className="w-full p-2 text-sm bg-gray-50 border border-gray-300 rounded-md h-24 resize-none focus:outline-none"  ></textarea>
                            </div>

                            <button  type="submit"  className="w-full bg-teal-500 text-white text-sm px-4 py-2 rounded-md font-medium hover:bg-teal-600 transition"  >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;