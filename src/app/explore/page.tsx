import Sunburst from '@/components/Sunburst'

export default function Home() {
  return (
    <main className='flex items-center flex-col justify-center'>
      <h1 className='text-5xl text-orange-700 my-6 font-bold'>Search and Rescue Topics</h1>
      <p className=' text-white bg-zinc-700 px-4 rounded-full py-2 max-w-prose'>
        Click on wedges to further narrow down the search. Click on the center to reset.
      </p>
      <div className='w-10/12 bg-white rounded-full overflow-hidden mt-4'>
        <Sunburst />
      </div>
    </main>
  )
}
