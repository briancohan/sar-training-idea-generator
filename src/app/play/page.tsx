'use client'
import { useEffect, useState } from 'react'

import { generateSunburstData, SunburstData } from '@/lib/generateSunburstData'
import getRandomChoices from '@/lib/getRandomChoices'
import trainingTopics from '@/lib/topics.json'

const topics = generateSunburstData(trainingTopics)

export default function Play() {
  const [choices, setChoices] = useState<SunburstData[]>([])

  function updateTopics() {
    setChoices(
      getRandomChoices(
        topics.filter((topic: SunburstData) => topic.parent),
        4,
      ),
    )
  }

  useEffect(() => {
    updateTopics()
  }, [])

  return (
    <main className='flex flex-col gap-8 pt-4'>
      <div className='flex flex-col justify-center items-center gap-16 py-12 px-6 rounded-lg bg-zinc-600'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
          {choices.map((topic: SunburstData) => {
            return (
              <div
                className='overflow-hidden rounded-lg text-center bg-zinc-100 shadow flex justify-center'
                key={topic.id}>
                <div className='px-4 py-5 sm:p-6'>
                  <div className='text-sm mb-4 text-gray-600'>{topic.id.split(' - ').slice(0, -1).join(' / ')}</div>
                  <div className='font-extrabold text-2xl'>{topic.label}</div>
                </div>
              </div>
            )
          })}
        </div>
        <button
          onClick={updateTopics}
          type='button'
          className='w-1/3 rounded-md bg-orange-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500'>
          Pick New Topics
        </button>
      </div>
      <div className='bg-white rounded-lg py-12 px-6  mx-auto'>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h2 className='text-2xl uppercase font-semibold'>How to Play</h2>
            <ol className='list-decimal ml-4 max-w-prose'>
              <li className='my-4'>
                Divide all players into teams. Balance the team size or number of teams so that teams can communicate,
                but scoring doesn&apos;t take a long time.
              </li>
              <li className='my-4'>
                Each group has 5 minutes to come up with the best training idea that incorporates as many visible topics
                as possible.
              </li>
              <li className='my-4'>
                After the time has run out, each group presents their idea to the other groups. The other groups can ask
                questions about the idea. The presenting group can answer the questions, but they cannot change their
                idea. Each team gets 1 point for each visible topic in their idea. If a topic is too specific, the
                parent topic can be used for half a point.
              </li>
              <li className='my-4'>
                Each team votes on the best idea (not their own). The team with the most votes gets an extra point.
              </li>
              <li className='my-4'>The team with the most points wins.</li>
            </ol>
          </div>
          <div className='max-w-prose'>
            <h3 className='text-xl uppercase font-semibold mb-2'>Clarifications</h3>
            <ul className='list-disc ml-4'>
              <li>No points are awarded for an answer uses only one topic.</li>
              <li>Training ideas should be more than presenting a lecture.</li>
              <li>Training ideas should have a duration greater than 15 minutes.</li>
            </ul>
            <h3 className='text-xl uppercase mt-6 font-semibold mb-2'>Solo Mode</h3>
            <p>
              Playing in solo mode is the same as playing with a group, just without others to compete against. Try
              picking out a points goal and come up with ideas until you reach that number of points.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
