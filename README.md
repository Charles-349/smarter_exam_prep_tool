# Cloudstep — make cloud concepts click

Cloudstep is an unofficial, beginner-friendly AZ-900 study companion. Its core idea is simple: practice should teach the *why*, not just mark an answer right or wrong.

## Run the app

Cloudstep uses Node.js 22.9 or newer and has no npm dependencies.

1. Copy `.env.example` to `.env`.
2. Create a Gemini API key in [Google AI Studio](https://aistudio.google.com/app/apikey) and set `GEMINI_API_KEY` in `.env`. Keep this file private; it is excluded from Git.
3. Run `npm start`, then open [http://127.0.0.1:3000](http://127.0.0.1:3000). Do not open the app with VS Code Live Server or `file://` when using AI: those serve only static assets and cannot reach the Gemini proxy.

Without a key, the quiz, flashcards, planner, and prompt builder still work. The server displays the Gemini setup state and gives a clear configuration message when a learner tries live chat. The model can be changed with `GEMINI_MODEL` if the default is unavailable to your AI Studio project.

Quiz progress, review cards, study activity, and the study plan stay in the current browser's local storage. Chat history exists only in page memory and is sent to Gemini through the server proxy with `store: false`; it is not persisted by Cloudstep. Do not send passwords, personal data, or confidential information to an AI tutor.

## Learning experience

- **Balanced practice:** 50 original questions across the three public exam domains (13 cloud concepts, 20 Azure architecture and services, 17 management and governance), with coverage proportions inside the current outline ranges. A 10-question mixed session samples 3/4/3 questions from those domains; focused sessions draw without repeats.
- **Feedback that teaches:** Every answer includes a plain-language explanation. Question labels show the skill being practised, and missed questions can be retried.
- **Recall and revision:** 23 flashcards with a personal review pile. Rate your recall and finish a review round without losing cards you still need to revisit.
- **Practical planning:** Set an exam date, available weekly hours, and areas to focus on for a flexible week-by-week plan.
- **Live AI study buddy:** Use a guided tutor that teaches step by step or switch to open cloud Q&A. Choose English or Kiswahili and an example style. A server-side Gemini proxy keeps the API key out of browser code, falls back to Gemini's text-generation endpoint if Interactions is temporarily busy, and constrains the model to original learning support.
- **AI study-buddy prompt builder:** Create a tailored prompt for a tutor the learner chooses, with source constraints, original-question safeguards, English or Kiswahili instructions, and familiar African example settings. The prompt is prepared locally and is never sent by Cloudstep.
- **Honest progress signals:** Track practice accuracy and activity by domain. The practice signal blends domain accuracy with evidence from up to five answers per domain, weighted by the outline ranges. It is explicitly not a pass prediction or exam-readiness guarantee.
- **Mobile and keyboard friendly:** Responsive layout, semantic controls, visible focus styles, reduced-motion support, and live feedback.
- **Local context:** Examples use familiar everyday situations, including a Kenyan team's Azure region choice and a market during a festival, while keeping the underlying cloud concepts general.

## Content accuracy

The app organizes content using the public [AZ-900 skills outline on Microsoft Learn](https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-900):

- Describe cloud concepts: **25–30%**
- Describe Azure architecture and services: **35–40%**
- Describe Azure management and governance: **30–35%**

The bank samples the listed areas but is not comprehensive exam coverage. Questions and flashcard wording are original and are not copied from actual exam items. Azure services and certification objectives can change; check the official outline before studying. No practice score can guarantee an exam outcome.

This project is unofficial, is not affiliated with or endorsed by Microsoft, and does not use Microsoft logos.

## Hackathon pitch

**Problem:** Beginners can find practice questions, but often do not learn why their answer was right or wrong. The broad exam outline also makes it difficult to know what to practise next.

**Solution:** Cloudstep turns each answer into a short teaching moment, organizes practice around the AZ-900 domains, and gives learners a low-friction way to plan and revisit weak areas. Its live AI tutor offers guided teaching and broad cloud Q&A, with source and uncertainty guardrails, while the prompt builder remains available for learners who prefer another AI assistant.

**For whom:** First-time cloud learners and AZ-900 candidates who want a guided, approachable revision routine, including learners studying on a phone or with limited study time.

**Suggested 90-second demo:** Open the overview and point out the official domain ranges. Start a mixed quiz, answer one question, and explain how the feedback teaches the concept. Finish a short session and retry a missed question. Ask the live tutor a concept question and show how it explains the idea in steps; change to Kiswahili or use a starter question. Point out that Gemini does not browse live docs, then verify the official skills guide. Mark a flashcard for review and build a plan with an exam date and weekly hours.

**Impact and next steps:** The same content model and workflow could support other entry-level certifications. The next quality step is learner testing and expert review of every question against the official skills measured; optional localization and account-based sync should come after that validation.

## Known limits

- The live tutor uses a language model and can be wrong. It does not browse live documentation, and its AZ-900 guidance should be checked against Microsoft Learn.
- A Gemini API key and network access are required for live AI. Quotas, model availability, and provider policies apply.
- Cloud sync, accounts, and a database are not included.
- The readiness signal is an at-a-glance practice metric, not a psychometrically validated score.
- The sample question bank is a starter set, not a complete mock exam.

## Tests

Run `npm test` to test the local server, Gemini proxy behavior, validation, and configuration errors with a mocked provider response. These tests do not require an API key.
