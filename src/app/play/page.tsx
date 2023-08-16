'use client'
import { useEffect, useState } from 'react'

import { generateSunburstData, SunburstData } from '@/lib/generateSunburstData'
import getRandomChoices from '@/lib/getRandomChoices'
import trainingTopics from '@/lib/topics.json'

const topics = generateSunburstData(trainingTopics)

export default function Play() {
  const [choices, setChoices] = useState<SunburstData[]>([])

  function updateTopics() {
    setChoices(getRandomChoices(topics, 3))
  }

  useEffect(() => {
    updateTopics()
  }, [])

  return (
    <main>
      <div className='flex flex-col justify-center items-center gap-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
          {choices.map((topic: SunburstData) => {
            return (
              <div
                className='overflow-hidden rounded-lg text-center bg-zinc-100 shadow flex justify-center'
                key={topic.id}>
                <div className='px-4 py-5 sm:p-6'>
                  <div className='text-sm mb-4 text-gray-600'>{topic.id.split(' - ').slice(0, -1).join(' / ')}</div>
                  <div className='font-bold text-2xl'>{topic.label}</div>
                </div>
              </div>
            )
          })}
        </div>
        <button
          onClick={updateTopics}
          type='button'
          className='w-1/2 rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500'>
          Pick New Topics
        </button>
      </div>
    </main>
  )
}
