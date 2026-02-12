import { useEffect } from 'react';
import { ContactCTA } from '../sections/ContactCTA';

export function NewsroomPage() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Newsroom
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl">
                            Latest news, announcements, and press releases from Darvanta Technologies.
                        </p>
                    </div>
                </div>
            </div>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Darvanta Launches Advanced AI Solutions Practice",
                                date: "Feb 2024",
                                desc: "Darvanta expands its expertise with a dedicated AI & machine learning solutions team to serve enterprise customers."
                            },
                            {
                                title: "Major Enterprise Platform Upgrade Released",
                                date: "Jan 2024",
                                desc: "Darvanta rolled out a large update focused on scalability, security, and performance for its core enterprise platform."
                            },
                            {
                                title: "Darvanta Expands Client Base in Asia-Pacific",
                                date: "Dec 2023",
                                desc: "The company strengthens its global footprint with new client engagements across key APAC markets."
                            },
                            {
                                title: "Darvanta Partners with Leading Cloud Providers",
                                date: "Nov 2023",
                                desc: "New collaborations enhance cloud capabilities and accelerate digital transformation offerings for customers."
                            }
                        ]
                            .map((item, i) => (
                                <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out" style={{ animationDelay: `${i * 100}ms` }}>
                                    <span className="text-sm text-[#0A5C4E] font-semibold">{item.date}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
        </>
    );
}