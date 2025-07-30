const servicesData = [
    {
        title: "Grow Your Business",
        iconClass: "ri-bar-chart-line",
        bgClass: "ri-bar-chart-line",
    },
    {
        title: "Drive More Sales",
        iconClass: "ri-money-dollar-circle-line",
        bgClass: "ri-money-dollar-circle-line",
    },
    {
        title: "Handled By Expert",
        iconClass: "ri-user-settings-line",
        bgClass: "ri-user-settings-line",
    },
    {
        title: "Discussion For Idea",
        iconClass: "ri-chat-3-line",
        bgClass: "ri-chat-3-line",
    },
    {
        title: "Web Design",
        iconClass: "ri-code-line",
        bgClass: "ri-code-line",
    },
    {
        title: "Network Security",
        iconClass: "ri-shield-keyhole-line",
        bgClass: "ri-shield-keyhole-line",
    },
    {
        title: "Social Media",
        iconClass: "ri-notification-3-line",
        bgClass: "ri-notification-3-line",
    },
    {
        title: "Design & Branding",
        iconClass: "ri-mac-line",
        bgClass: "ri-mac-line",
    },
];

const Services = () => {
    return (
        <section className=" min-h-screen bg-[#dcf3f0] flex items-center pb-20 pt-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="font-bold text-3xl text-gray-800">Our Services</h3>
                    <p className="text-xl text-gray-500 mt-2 max-w-2xl mx-auto">
                        This is just a simple text made for this unique and awesome template, you can replace it with any text.
                    </p>
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative overflow-hidden" >
                            <div className="bg-teal-100 w-12 h-12 flex items-center justify-center rounded-full mb-4 z-10 relative">
                                <i className={`${service.iconClass} text-2xl text-teal-500`}></i>
                            </div>
                            <h4 className="text-xl font-semibold my-6  text-gray-800">{service.title}</h4>
                            <p className="text-gray-500 text-l mb-4">
                                If the distribution of letters and words is random, the reader will not be distracted from making.
                            </p>
                            <button className="text-teal-500 font-medium hover:underline">
                                Read More &rarr;
                            </button>

                            
                            <i className={`${service.bgClass} text-[100px] text-teal-100 absolute  opacity-10 pointer-events-none`} ></i>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;