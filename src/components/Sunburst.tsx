'use client'
import { Config, Layout, PlotData } from 'plotly.js'

import dynamic from 'next/dynamic'

import { generateSunburstData, SunburstData } from '@/lib/generateSunburstData'
import trainingTopics from '@/lib/topics.json'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

const formattedSunburstData = generateSunburstData(trainingTopics)

interface SunburstPlotData extends PlotData {
  insidetextorientation: string
}

const graphData: Partial<SunburstPlotData>[] = [
  {
    type: 'sunburst',
    insidetextorientation: 'radial',
    ids: formattedSunburstData.map((entry: SunburstData) => entry.id),
    labels: formattedSunburstData.map((entry: SunburstData) => entry.label),
    parents: formattedSunburstData.map((entry: SunburstData) => entry.parent),
  },
]

const graphLayout: Partial<Layout> = {
  title: 'A Fancy Plot',
  margin: { l: 0, r: 0, b: 0, t: 0 },
}

const graphConfig: Partial<Config> = {
  responsive: true,
}

const Sunburst = () => {
  return <Plot data={graphData} layout={graphLayout} config={graphConfig} className='w-9/12 aspect-square' />
}

export default Sunburst
