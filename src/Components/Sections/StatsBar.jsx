import React from 'react';
import CountUpModule from "react-countup";
const CountUp = CountUpModule.default || CountUpModule;
const StatsBar = () => {
    const stats = [
        { number: 10, label: 'Years Experience' },
        { number: 99, label: 'Accuracy Rate' },
        { number: 500, label: 'Positive Reviews' },
        { number: 600, label: 'Trusted Partners' },
    ];

    return (
        <section className='section-main'>
            <div className="flex justify-center items-center">
                {/* Container with background gradient, rounded corners, and shadow */}
                <div className="flex flex-col md:flex-row w-full bg-linear-to-b from-[#1D2D2A] to-[#000000] text-white rounded-xl shadow-lg border border-neutral-800 overflow-hidden">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex-1 flex items-center relative py-5 md:py-0">
                            {/* Center the stat item */}
                            <div className="w-full flex flex-col items-center justify-center p-4 md:p-8 text-center space-y-4">
                                {/* Stat Number */}
                                <div className="text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-[#CDC72A]">
                                    <CountUp end={stat.number} duration={5} enableScrollSpy />+
                                </div>

                                {/* Stat Label */}
                                <div className="text-base md:text-lg font-medium text-neutral-300">
                                    {stat.label}
                                </div>
                            </div>

                            {/* Vertical Divider (Except after the last item, on desktop) */}
                            {index < stats.length - 1 && (
                                <div className="absolute right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-neutral-50/70 to-transparent hidden md:block" />
                            )}

                            {/* Horizontal Divider (Only on mobile) */}
                            {index < stats.length - 1 && (
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-neutral-800 md:hidden" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default StatsBar;