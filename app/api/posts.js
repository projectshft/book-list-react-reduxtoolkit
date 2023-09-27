import { v4 as uuidv4 } from 'uuid';

export const posts = [
	{
		_id: uuidv4(),
		title: 'How to Land a Coding Job',
		categories: ['career'],
		content:
			"Dear coding bootcamp graduates, Stop applying to 1,000 jobs thinking that it will increase your chances. You will probably have a 0% success rate with cold applications. It's not because you're not smart and talented. It's because on paper, you don't stand out. It doesn't matter how great your resume and LinkedIn are, it still communicates that you have 0 experience. Actually, apply for 0 jobs. Instead, find a connection with a real person at a company you want to work at, at all costs. Figure out who makes decisions there (Linkedin). Then, send them an email asking for a Zoom meeting. They may not respond the first time. Don't assume they don't want to talk to you. Follow up. Follow up 2, 3, 4 or 5 times. You really want to work there, right? On Zoom, share your story, talk about your passion for coding and the projects you've built. Ask your connection what the best way to apply is. Then apply. Rejected? Don't sweat it. You have 999 more opportunities to make a real connection. Don't blow those opportunities by submitting cold resumes. Are you too scared or too nervous to actually reach out to real people? Good. So is everyone else, which is why they won't do this. You'll set yourself apart. You are hirable and you add value. You just have to help them find you.",
	},
	{
		_id: uuidv4(),
		title: 'How to Focus',
		categories: ['productivity'],
		content:
			"How is your ability to focus during this season? It's difficult for me, but I keep reminding myself that 10 year goals are achieved 25 minutes at a time. For example, here are the buckets I use to plan out my time: The next 10 years The next 5 years The next 3 years The next year The next 3 months (quarter) This week Today 25 minutes In order to win over the next 10 years, you have to at least be able to win for the next 25 minutes. Edit: I use the pomodoro method when working which is 25 minutes of work followed by a 5 minute break.",
	},
	{
		_id: uuidv4(),
		title: 'What are Distractions?',
		categories: ['productivity'],
		content:
			"The most dangerous kind of distractions are tasks that make us feel like we’re making progress, but don’t actually move the needle in terms of helping us accomplish our larger goals. No task, whether it's surfing Facebook or paying your bills, is inherently productive or distracting. If it’s not what you intended to do with your time, it’s a distraction.",
	},
	{
		_id: uuidv4(),
		title: 'I love coffee',
		categories: ['food', 'health'],
		content: 'That is all. Coffee is great.',
	},
	{
		_id: uuidv4(),
		title: 'I love bacon',
		categories: ['food', 'health'],
		content: 'That is all. Bacon is great.',
	},
];
