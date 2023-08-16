'use client'
import React from 'react'
import { Config, Layout, PlotData } from 'plotly.js'
import { twMerge } from 'tailwind-merge'

import dynamic from 'next/dynamic'

import { generateSunburstData, SunburstData } from '@/lib/generateSunburstData'
import trainingTopics from '@/lib/topics.json'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

const formattedSunburstData = generateSunburstData(trainingTopics)

interface SunburstPlotData extends PlotData {
  insidetextorientation: string
}

interface SunburstProps {
  data?: Partial<SunburstPlotData>
  layout?: Partial<Layout>
  config?: Partial<Config>
  className?: string
}

const Sunburst: React.FC<SunburstProps> = ({ data, layout, config, className }) => {
  const graphData: Partial<SunburstPlotData>[] = [
    {
      type: 'sunburst',
      insidetextorientation: 'radial',
      ids: formattedSunburstData.map((entry: SunburstData) => entry.id),
      labels: formattedSunburstData.map((entry: SunburstData) => entry.label),
      parents: formattedSunburstData.map((entry: SunburstData) => entry.parent),
      marker: { line: { width: 3 } },
      ...data,
    },
  ]

  const graphLayout: Partial<Layout> = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    hovermode: false,
    ...layout,
  }

  const graphConfig: Partial<Config> = {
    responsive: true,
    ...config,
  }
  return (
    <Plot
      data={graphData}
      layout={graphLayout}
      config={graphConfig}
      className={twMerge('w-full aspect-square', className)}
    />
  )
}

export default Sunburst
