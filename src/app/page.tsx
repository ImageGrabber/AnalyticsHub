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
]
const robot = 'https://robohash.org/ai-bot.png?set=set3'

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
        <div className="col-span-7 row-span-3 card p-6 flex flex-col bg-gradient-to-br from-[#231A15] to-[#18120E]">
          <div className="flex justify-between items-center mb-2">
            <button className="bg-[#2C211B] text-muted px-3 py-1 rounded-full text-xs">Last Week</button>
            <span className="text-lg text-text font-semibold">June 12</span>
            <button className="bg-[#2C211B] text-muted px-3 py-1 rounded-full text-xs">Next Week</button>
          </div>
          <div className="flex justify-between text-muted text-sm mb-2">
            <span>Mon 11</span>
            <span className="text-accent font-bold">Tue 12</span>
            <span>Wed 13</span>
            <span>Thu 14</span>
            <span>Fri 15</span>
            <span>Sat 16</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            {/* Time slots */}
            {[8,9,10,11].map((hour) => (
              <div key={hour} className="flex items-center gap-2">
                <span className="w-12 text-muted text-xs">{hour}:00 am</span>
                {hour === 9 ? (
                  <div className="flex-1 flex items-center">
                    <div className="bg-accent text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-card">
                      <span className="font-semibold">Weekly Sync</span>
                      <span className="text-xs text-white/70">About new project</span>
                      <img src={avatars[1]} className="w-6 h-6 rounded-full border-2 border-white -ml-2" />
                      <img src={avatars[2]} className="w-6 h-6 rounded-full border-2 border-white -ml-2" />
                    </div>
                  </div>
                ) : hour === 10 ? (
                  <div className="flex-1 flex items-center">
                    <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 shadow-card">
                      <span className="font-semibold">Weekly Sync</span>
                      <span className="text-xs text-muted">About new project</span>
                      <img src={avatars[2]} className="w-6 h-6 rounded-full border-2 border-white -ml-2" />
                      <img src={avatars[3]} className="w-6 h-6 rounded-full border-2 border-white -ml-2" />
                    </div>
                  </div>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Life */}
        <div className="col-span-5 row-span-3 card p-0 overflow-hidden relative flex items-end justify-end bg-gradient-to-tr from-[#FF7A29] to-[#FFB26B]">
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80" alt="profile silhouette" className="absolute left-0 top-0 h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FF7A29]/80 to-transparent" />
          <div className="relative z-10 p-8 w-full">
            <h2 className="text-3xl font-bold text-white mb-6">Areas <span className="font-light">of life</span></h2>
            <div className="flex flex-col gap-4">
              <button className="w-48 py-2 rounded-full border-2 border-white text-white text-lg font-medium bg-white/10 hover:bg-white/20 transition">Fitness</button>
              <button className="w-48 py-2 rounded-full border-2 border-white text-white text-lg font-medium bg-white/10 hover:bg-white/20 transition">Chek-ups</button>
              <button className="w-48 py-2 rounded-full border-2 border-white text-white text-lg font-medium bg-white/10 hover:bg-white/20 transition">Life balance</button>
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
        <div className="col-span-2 row-span-1 card p-6 flex flex-col items-start justify-center bg-gradient-to-br from-[#231A15] to-[#18120E]">
          <span className="text-muted text-sm mb-1">Max Score</span>
          <span className="text-3xl font-bold text-white">2309</span>
          <div className="flex gap-1 mt-2">
            {[...Array(9)].map((_,i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-accent inline-block" />
            ))}
          </div>
        </div>

        {/* Main Task */}
        <div className="col-span-2 row-span-2 card p-6 flex flex-col items-center justify-center bg-gradient-to-br from-[#231A15] to-[#18120E]">
          <span className="text-muted text-sm mb-2">Main task</span>
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" stroke="#2C211B" strokeWidth="12" fill="none" />
            <circle cx="60" cy="60" r="54" stroke="#FF7A29" strokeWidth="12" fill="none" strokeDasharray="339.292" strokeDashoffset="84" strokeLinecap="round" />
            <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="bold" dy=".3em">350</text>
            <text x="50%" y="70%" textAnchor="middle" fill="#fff" fontSize="16">Excellent</text>
          </svg>
          <button className="mt-4 px-6 py-2 rounded-full bg-accent text-white font-semibold">Details</button>
        </div>

        {/* AI Assistant */}
        <div className="col-span-4 row-span-3 card p-6 flex flex-col bg-gradient-to-br from-[#231A15] to-[#18120E] relative overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg text-white font-semibold">Ai Assistant</span>
            <MoreHorizontal className="text-muted w-5 h-5" />
          </div>
          <span className="text-muted text-xs mb-2">A new analysis of achieving your goals has been prepared</span>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <span className="text-muted text-xs">Goals task</span>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">88%</span>
                <span className="bg-accent text-xs text-white rounded-full px-2 py-1">24</span>
                <span className="text-muted text-xs">in one week</span>
              </div>
              <div className="flex gap-1 mt-2 mb-4">
                {[...Array(9)].map((_,i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-accent inline-block" />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#2C211B] text-white text-xs rounded-full px-3 py-1">main goal</span>
                  <span className="text-muted text-xs">Establish a workflow</span>
                  <span className="bg-green-600 text-xs text-white rounded-full px-2 py-0.5">done</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#2C211B] text-white text-xs rounded-full px-3 py-1">goal 2</span>
                  <span className="text-muted text-xs">Fitness</span>
                  <span className="bg-accent2 text-xs text-white rounded-full px-2 py-0.5">in progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#2C211B] text-white text-xs rounded-full px-3 py-1">main goal</span>
                  <span className="text-muted text-xs">Establish a workflow</span>
                  <span className="bg-red-600 text-xs text-white rounded-full px-2 py-0.5">closed</span>
                </div>
              </div>
            </div>
            <img src={robot} alt="AI Assistant" className="w-32 h-32 object-contain absolute right-4 bottom-4 opacity-80" />
          </div>
        </div>
      </div>
    </div>
  )
} 