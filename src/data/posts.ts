export type Post = {
  id: number
  title: string
  date: string // YYYY-MM-DD
  excerpt: string
  body: string[]
  tags: string[]
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Why semantic HTML comes first',
    date: '2026-09-07',
    excerpt: 'My Week 1 page had no CSS at all, and it was still easy to read. Here is why.',
    body: [
      'For Week 1 I wrote a profile page with only HTML: a header, a nav, a main with sections and a footer. With no styles the browser still showed a clear structure.',
      'The real win is for people who do not look at the page. A screen reader jumps between landmarks like nav and main, and it can only do that if the tags say what each part is.',
    ],
    tags: ['HTML', 'Accessibility'],
  },
  {
    id: 2,
    title: 'A profile card with Vite and vanilla JavaScript',
    date: '2026-09-14',
    excerpt: 'Week 2 was my first Vite project. The like button taught me how state works without React.',
    body: [
      'Vite starts instantly and reloads the page when I save, which made experimenting much faster than opening a file by hand.',
      'The like button changes a variable, then I have to update the text and the aria-pressed attribute myself. It works, but I can see why people want a library for this.',
    ],
    tags: ['Vite', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Thinking in components and props',
    date: '2026-09-21',
    excerpt: 'In Week 3 I rebuilt the same card in React and split it into small typed components.',
    body: [
      'A component is just a function that returns markup. Header, ProfileCard and SkillBadge each do one job, and the data reaches them through props.',
      'TypeScript helped a lot here. When I forgot a prop, the editor told me immediately, before I ever opened the browser.',
    ],
    tags: ['React', 'TypeScript'],
  },
  {
    id: 4,
    title: 'Routing without page reloads',
    date: '2026-09-28',
    excerpt: 'React Router lets one layout stay on the screen while the page inside it changes.',
    body: [
      'A layout route draws the header and the footer once and puts the current page in an Outlet. NavLink marks the link of the page you are on.',
      'On GitHub Pages a refresh on /posts/2 gives a 404, because that file does not exist. Copying index.html to 404.html after the build fixes it.',
    ],
    tags: ['React Router', 'GitHub Pages'],
  },
  {
    id: 5,
    title: 'From Figma tokens to CSS variables',
    date: '2026-10-05',
    excerpt: 'Week 5 was about design systems. One of my tokens failed the contrast check.',
    body: [
      'I copied the Figma tokens into CSS variables, so every colour, space and radius has one name and one place to change it.',
      'The muted text colour from the design had a contrast ratio of only 2.54 to 1 on white. I darkened it until it passed 4.5 to 1, and only had to edit one variable.',
    ],
    tags: ['Figma', 'CSS', 'Accessibility'],
  },
]

// newest first; sorting here means a new object in the array shows up everywhere
export const latestFirst: Post[] = [...posts].sort((a, b) => b.date.localeCompare(a.date))
