![PrepMe (1200 × 630 px)](https://github.com/Blu-Fi-Tech-Inc/Interview-Prep-With-AI/assets/98633589/717949e4-7e69-4100-94cb-7c9b4f0bac12)
<a href="https://prepme.blufitech.com">
  "PrepMe – AI Generated Interviews"
  <h1 align="center">Interview-Prep-With-AI</h1>
</a>

<p align="center">
  Interview Simulator with AI Generated Feedback
</p>

<p align="center">
  <a href="https://linkedin.com/in/blufitechnology">
    <img src="https://media.licdn.com/dms/image/D4E16AQFYrBlcm7c76A/profile-displaybackgroundimage-shrink_350_1400/0/1689931877588?e=1695254400&v=beta&t=slb4a7CgykFnkBpYhgzG2SHONr62cFM-rnNq3zw0svw" width="150" height="45" alt="blufitechnology's follower count" />
  </a>
  <a href="https://github.com/blu-fi-tech-inc">
    <img src="https://img.shields.io/github/stars/blu-fi-tech-inc/interview-prep-with-ai?label=blu-fi-tech-inc%2Finterview-prep-with-ai" alt="interview-prep-with-ai repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#one-click-deploy"><strong>One-click Deploy</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

PrepMe is an interview preparation tool that provides AI feedback and suggestions.

## One-click Deploy

You can deploy this template to Vercel with the button below:

[![Deploy the demo with Vercel](https://vercel.com/button)](https://vercel.com/new/tameyer41/clone?demo-title=Liftoff%20%E2%80%93%C2%A0AI%20Mock%20Interview%20Simulator&demo-description=Liftoff%20is%20an%20interview%20preparation%20tool%20that%20provides%20AI%20feedback%20on%20your%20mock%20interviews%2C%20built%20with%20OpenAI%20Whisper%20and%20GPT.&demo-url=https%3A%2F%2Fdemo.useliftoff.com%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F5TbjLXmeKdo2rURpnjIEqn%2Fc7c8fc350183e8cd3c819d172c0005ac%2F68747470733a2f2f696b2e696d6167656b69742e696f2f396b6d3732617371752f436c65616e53686f745f323032332d30352d33315f61745f31322e34332e35&project-name=Liftoff%20%E2%80%93%C2%A0AI%20Mock%20Interview%20Simulator&repository-name=liftoff&repository-url=https%3A%2F%2Fgithub.com%2FTameyer41%2Fliftoff&from=templates&skippable-integrations=1&env=OPENAI_API_KEY&envDescription=Get%20your%20OpenAI%20API%20key%20here%3A&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys)

You can also clone & create this repo locally with the following command:

```bash
npx create-next-app interview-prep-with-ai --example "https://github.com/Blu-Fi-Tech-Inc/Interview-Prep-With-AI"
```

## Tech Stack + Features

Landing Page (https://prepme.blufitech.com/)

Interview Selection (https://prepme.blufitech.com/demo)

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [Upstash](https://upstash.com/) - Serverless Data Platform (here using serverless Redis for rate limiting)

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [`ImageResponse`](https://beta.nextjs.org/docs/api-reference/image-response) – Generate dynamic Open Graph images at the edge
- [HeadlessUI](https://headlessui.com/) - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous

- [FFMPEG.WASM](https://ffmpegwasm.netlify.app/) – Transcode video/audio files
- [React Webcam](https://github.com/mozmorris/react-webcam) - Webcam component for React
- [Stripe Gradient Animation](https://whatamesh.vercel.app/) - [@jordienr](https://twitter.com/jordienr) released a Mesh Gradient that uses WebGL and animates a beautiful gradient

## How it all works

PrepMe uses FFmpeg to transcode the raw video into MP3. Chrome, Safari, and Firefox all record with different codecs, and FFmpeg is great for standardizing them.

We then send the audio directly to be transcribed by OpenAI's Whisper endpoint, and then stream feedback from the edge using OpenAI's gpt-3.5-turbo.

## Author

- Blu.Fi Tech, Inc. ([@blufitech](https://blufitech.com))
