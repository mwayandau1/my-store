import React from 'react'

function About() {
  return (
    <>
    <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
      <h1 className="text-3xl font-bold leading-none tracking-tight sm:text-6xl">
        we love
      </h1>
      <div className="stats bg-secondary shadow">
        <div className="stat">
            <div className="stat-title text-secondary-content text-4xl font-bold tracking-widest">
                m store
            </div>
        </div>
      </div>
    </div>
    <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Perspiciatis quod cumque obcaecati nihil sint, quaerat est
       rem alias, quisquam et illo omnis vitae molestias quasi labore expedita ea sapiente quam!
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Asperiores, laboriosam aut? Quam necessitatibus obcaecati eos eaque alias incidunt qui
       numquam iste tempora, voluptatum minus veritatis amet facilis aliquid magnam accusamus
        sit velit consectetur aperiam unde enim eum optio? Soluta, dolore!
    </p>
    </>
  )
}

export default About