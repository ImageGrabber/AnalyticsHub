'use client'

import { useState } from 'react'
import {
    Search,
    MoreHorizontal,
    FileText,
    User,
    Users,
    CheckCircle,
    Circle,
    Activity,
    BarChart3,
    Calendar,
    Clock,
    Settings,
} from 'lucide-react'

// Placeholder avatars and robot image
const avatars = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/45.jpg',
    'https://randomuser.me/api/portraits/women/46.jpg',
    'https://randomuser.me/api/portraits/men/47.jpg',
    'https://randomuser.me/api/portraits/women/48.jpg',
]
const robot = 'https://robohash.org/ai-bot.png?set=set3'

const weekDays = [
    { day: 'Mon', date: 11 },
    { day: 'Tue', date: 12, current: true },
    { day: 'Wed', date: 13 },
    { day: 'Thu', date: 14 },
    { day: 'Fri', date: 15 },
    { day: 'Sat', date: 16 },
]

export default function Dashboard() {
    return (
        <div className="relative min-h-screen w-full bg-gradient-to-br from-[#FF7A29] via-[#18120E] to-[#231A15] p-8">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-sidebar text-accent">
                        <Clock className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-sidebar text-accent">
                        <Settings className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="w-[400px] bg-[#2C211B] rounded-full flex items-center px-4 py-2">
                        <Search className="w-5 h-5 text-muted mr-2" />
                        <input
                            className="bg-transparent outline-none text-text flex-1 placeholder:text-muted"
                            placeholder="Enter your search request"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-sidebar">
                        <User className="w-5 h-5 text-accent" />
                    </button>
                    <img
                        src={avatars[0]}
                        alt="profile"
                        className="w-10 h-10 rounded-full object-cover border-2 border-accent"
                    />
                </div>
            </div>

            {/* Dashboard grid */}
            <div className="grid grid-cols-12 grid-rows-6 gap-6 h-[calc(100vh-6rem)]">
                {/* Calendar/Schedule */}
                <div className="col-span-7 row-span-3 card p-0 flex flex-col bg-gradient-to-br from-[#231A15] to-[#18120E] overflow-hidden relative">
                    <div className="flex justify-between items-center px-6 pt-6">
                        <button className="bg-[#2C211B] text-muted px-3 py-1 rounded-full text-xs">Last Week</button>
                        <span className="text-lg text-text font-semibold">June 12</span>
                        <button className="bg-[#2C211B] text-muted px-3 py-1 rounded-full text-xs">Next Week</button>
                    </div>
                    {/* Week days and vertical lines (reverted) */}
                    <div className="relative flex px-6 mt-4" style={{ height: '60px' }}>
                        {weekDays.map((d, i) => (
                            <div key={d.day} className="flex-1 flex flex-col items-center">
                                <span className={`text-sm ${d.current ? 'text-white font-bold' : 'text-muted'}`}>{d.day}</span>
                                <span className={`text-base ${d.current ? 'text-white font-bold' : 'text-muted'}`}>{d.date}</span>
                                {/* Vertical line */}
                                <div className="w-px h-40 bg-[#3a2a1e] mt-2" style={{ opacity: i === weekDays.length - 1 ? 0 : 1 }} />
                            </div>
                        ))}
                    </div>
                    {/* Time slots and events (reverted) */}
                    <div className="absolute left-0 top-[120px] w-full px-6" style={{ zIndex: 2 }}>
                        {/* 9am event (orange) */}
                        <div className="flex w-full" style={{ height: '128px' }}>
                            <div className="flex-[1]" />
                            <div className="flex-[3] flex items-center">
                                <div className="bg-accent text-white px-6 py-3 rounded-xl flex justify-between items-center gap-4 shadow-card w-full">

                                    {/* Text on the left */}
                                    <div>
                                        <div className="font-semibold leading-tight">Weekly Sync</div>
                                        <div className="text-xs text-white/70 leading-tight">About new project</div>
                                    </div>

                                    {/* Avatars on the right */}
                                    <div className="flex items-center">
                                        <img src={avatars[1]} className="w-7 h-7 rounded-full border-2 border-white -ml-2" />
                                        <img src={avatars[2]} className="w-7 h-7 rounded-full border-2 border-white -ml-2" />
                                    </div>

                                </div>
                            </div>
                            <div className="flex-[2]" />
                        </div>

                        {/* 10am event (white) */}
                        <div className="flex w-full mt-2" style={{ height: '48px' }}>
                            <div className="flex-[2]" />
                            <div className="flex-[3] flex items-center">
                                <div className="bg-white text-black px-6 py-2 rounded-xl flex justify-between items-center gap-4 shadow-card w-full">

                                    {/* Text on the left */}
                                    <div>
                                        <div className="font-semibold leading-tight">Weekly Sync</div>
                                        <div className="text-xs text-muted leading-tight">About new project</div>
                                    </div>

                                    {/* Avatars on the right */}
                                    <div className="flex items-center">
                                        <img src={avatars[3]} className="w-7 h-7 rounded-full border-2 border-white -ml-2" />
                                        <img src={avatars[4]} className="w-7 h-7 rounded-full border-2 border-white -ml-2" />
                                    </div>

                                </div>
                            </div>
                            <div className="flex-[2]" />
                        </div>

                    </div>
                    {/* Time labels (reverted) */}
                    <div className="absolute left-0 top-[140px] flex flex-col gap-4 pl-6 text-muted text-xs" style={{ zIndex: 3 }}>

                        <span>8:00 am</span>
                        <span>9:00 am</span>
                        <span>10:00 am</span>
                        <span>11:00 am</span>
                        <span>12:00 pm</span>
                        <span>1:00 pm</span>
                        <span>2:00 pm</span>

                    </div>
                </div>

                <div className="col-span-5 row-span-3 card p-0 overflow-hidden relative bg-black rounded-2xl">
                    {/* Background Image */}
                    <img
                        src="https://img.freepik.com/premium-photo/portrait-handsome-young-man-dark-background-side-view_900706-6566.jpg"
                        alt="zigzag bg"
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-black/20" />

                    {/* Content */}
                    <div className="relative z-10 h-full px-8 py-6 flex flex-col justify-center gap-8">
                        <h2 className="text-4xl font-bold text-white">Areas <span className="font-light">of life</span></h2>

                        {/* Zigzag buttons */}
                        <div className="flex flex-col gap-6">
                            {/* Left aligned */}
                            <div className="flex justify-start">
                                <button className="px-6 py-2 rounded-full border border-white text-white bg-white/10 hover:bg-white/20 transition w-48 text-left">
                                    Fitness
                                </button>
                            </div>

                            {/* Right aligned */}
                            <div className="flex justify-end">
                                <button className="px-6 py-2 rounded-full border border-white text-white bg-white/10 hover:bg-white/20 transition w-48 text-right">
                                    Check-ups
                                </button>
                            </div>

                            {/* Left aligned again */}
                            <div className="flex justify-start">
                                <button className="px-6 py-2 rounded-full border border-white text-white bg-white/10 hover:bg-white/20 transition w-48 text-left">
                                    Life balance
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Sales/Goal/Docs */}
                <div className="col-span-4 row-span-3 card p-6 flex flex-col bg-gradient-to-br from-[#231A15] to-[#18120E]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-white font-semibold">Sales</span>
                        <MoreHorizontal className="text-muted w-5 h-5" />
                    </div>
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1 bg-[#2C211B] rounded-lg p-2 flex flex-col">
                            <span className="text-sm text-muted mb-2">Documents</span>
                            <div className="flex gap-2">
                                <FileText className="w-8 h-8 text-accent" />
                                <FileText className="w-8 h-8 text-accent2" />
                                <FileText className="w-8 h-8 text-muted" />
                            </div>
                        </div>
                        <button className="bg-[#2C211B] text-muted px-3 py-1 rounded-full text-xs self-start">More</button>
                    </div>
                    <div className="bg-[#2C211B] rounded-lg p-4 flex-1">
                        <span className="text-sm text-muted mb-2 block">Goal</span>
                        <p className="text-xs text-white">
                            I strive for steady growth and balance, improving my daily routine, nutrition, and sleep. In business, I aim to scale the studio internationally, attracting <b>at least 10 new clients and growing revenue by 50%</b> while keeping a healthy work-life balance. Learning, exploring new opportunities, and setting ambitious goals.
                        </p>
                    </div>
                </div>

                {/* Max Score */}
                <div className="col-span-4 flex flex-col gap-6">
  {/* Max Score */}
  <div className="card p-6 flex flex-col items-start justify-center bg-gradient-to-br from-[#231A15] to-[#18120E] rounded-xl">
    <span className="text-muted text-sm mb-1">Max Score</span>
    <span className="text-3xl font-bold text-white">2309</span>
    <div className="flex gap-1 mt-2">
      {[...Array(9)].map((_, i) => (
        <span key={i} className="w-2 h-2 rounded-full bg-accent inline-block" />
      ))}
    </div>
  </div>

  {/* Main Task */}
  <div className="card p-6 flex flex-col items-center justify-center bg-gradient-to-br from-[#231A15] to-[#18120E] rounded-xl">
    <span className="text-muted text-sm mb-2">Main task</span>
    <svg width="165" height="165" viewBox="0 0 200 200">
  {/* Larger circle radius but same stroke width */}
  <circle cx="100" cy="100" r="88" stroke="#2C211B" strokeWidth="12" fill="none" />
  <circle
    cx="100"
    cy="100"
    r="88"
    stroke="#FF7A29"
    strokeWidth="12"
    fill="none"
    strokeDasharray="552.92"
    strokeDashoffset="136"
    strokeLinecap="round"
  />

  {/* Smaller text and repositioned to fit bigger circle */}
  <text x="50%" y="48%" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" dy=".3em">350</text>
  <text x="50%" y="62%" textAnchor="middle" fill="#fff" fontSize="14">Excellent</text>
</svg>

   
  </div>
</div>


                {/* AI Assistant */}
                <div className="card col-span-4 row-span-3 flex flex-col gap-6 bg-gradient-to-br from-[#231A15] to-[#18120E] rounded-2xl p-6 relative  w-full">



  {/* Goal Stats */}
  <div className="flex justify-between items-start mt-0">
    <div>
      <div className="text-white text-sm font-semibold mb-1 flex items-center gap-2">
        Goals task
        <span className="bg-[#FF7A29] text-white text-xs px-2 py-0.5 rounded-full">24 ⟶</span>
      </div>
      <div className="flex items-end gap-1 text-white mb-1">
        <span className="text-4xl font-bold">88%</span>
        <span className="text-xs text-muted mb-1">in one week</span>
      </div>
      {/* Dots */}
      <div className="flex gap-1 mt-2 mb-4 flex-wrap">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="w-2 h-2 rounded-full bg-[#FF7A29] inline-block" />
        ))}
      </div>
    </div>

    {/* Robot Image */}
    <img
      src="https://static.vecteezy.com/system/resources/previews/024/238/434/non_2x/ai-generated-small-robots-futuristic-marvels-of-artificial-intelligence-free-png.png"
      alt="AI Assistant"
      className="w-24 h-24 object-contain"
    />
  </div>

  {/* Goal Tasks */}
  <div className="flex flex-col gap-3 mt-3">
    {/* Goal 1 */}
    <div className="flex items-center justify-between bg-[#2C211B] px-4 py-2 rounded-full text-white text-sm">
      <span className="flex gap-2 items-center">
        <span className="bg-[#3A2C25] px-3 py-1 rounded-full text-xs">main goal</span>
        Establish a workflow
      </span>
      <span className="bg-green-600 px-3 py-0.5 rounded-full text-xs text-white">done</span>
    </div>

    {/* Goal 2 */}
    <div className="flex items-center justify-between bg-[#2C211B] px-4 py-2 rounded-full text-white text-sm">
      <span className="flex gap-2 items-center">
        <span className="bg-[#3A2C25] px-3 py-1 rounded-full text-xs">goal 2</span>
        Fitness
      </span>
      <span className="bg-[#FF7A29] px-3 py-0.5 rounded-full text-xs text-white">in progress</span>
    </div>

    {/* Goal 3 */}
    <div className="flex items-center justify-between bg-[#2C211B] px-4 py-2 rounded-full text-white text-sm">
      <span className="flex gap-2 items-center">
        <span className="bg-[#3A2C25] px-3 py-1 rounded-full text-xs">main goal</span>
        Establish a workflow
      </span>
      <span className="bg-red-600 px-3 py-0.5 rounded-full text-xs text-white">closed</span>
    </div>
  </div>
</div>

            </div>
        </div>
    )
} 